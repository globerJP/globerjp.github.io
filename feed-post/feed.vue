<template>
      <v-container v-if="!user">
      <h1>
        You must be logged in to view this page.
      </h1>
      <v-btn
        color="primary"
        class="pa-0"
        style="text-transform: unset !important; font-size: 16px !important;"
        @click="handleJoin"
        text
        >Click here to Join</v-btn
      >
    </v-container>
  <v-container v-else class="d-flex flex-column justify-center align-center" style="width: 100%;">
    <h1 class="d-flex justify-center align-center mt-7 mb-3 mt-md-9 blue--text text-decoration-underline" style="text-align:center;width:100%"> Welcome </h1>
    <Post v-for="(post, index) of posts" v-model="postShownValue[index]" :ref="post.id" :key="post.createdAt" :post="post" class="mb-0 pa-0" />
    <Spinner v-if="isLoading" style="min-height: 90px;" />
    <v-card-title v-if="eof" style="min-height:90px;">No more posts.</v-card-title>
  </v-container>
</template>

<script>
import Post from '../../components/Post'
import Spinner from '@/components/LoadingSpinner'
import {cloneDeep} from 'lodash'
import { isMoment } from 'moment'

export default {
  components: {
    Spinner,
    Post
  },
  data() {
    return {
      emojis: {},
      selectedEmojis: {},
      selectedEmojiNatives: {},
      emojiCount: {},
      currentTop: 0,
      lockScroll: true,
      savedFirstTrue: null,
      latestUpdatedAt: null,
      postShown: [],
      postShownValue: [],
      posts: [],
      eof: false,
      isLoading: false,
      lastDoc: null,
      batchSize: 5,
      minSize: 5,
      eventIds: {},
      userIds: {}
    }
  },
  computed: {
    isMobileScreen() {
      if (process.browser) {
        // let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        return (window.innerWidth > 500) ? false : true 
      }
      return true
    },
    user() {
      return this.$store.state.authUser
    }
  },
  async mounted () {
    if (this.user) {
      // this.countMiss = this.batchSize
      await this.loadUntilSome()
      window.addEventListener('scroll', this.loadMore)
      this.lockScroll  = false
      // window.addEventListener('scroll', this.checkWindow)
    }
  },
  destroyed () {
    if (process.browser){
      window.removeEventListener('scroll', this.loadMore)
      //  window.removeEventListener('scroll', this.checkWindow)
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === 'feed') {
        this.checkNewBlogsAndLoad();
        this.lockScroll  = false
      }
      if (from.name === 'feed') {
        this.lockScroll  = true
      }
    },
    
  },
  methods: {
    async getCommentEntries(post) {
      const allCommentEntriesQuery = await this.$fire.firestore.collection('commentEntries')
      .where("eventId","==",post.eventId).get()


      // after some time open it
      // const creatorCommentEntriesQuery = await this.$fire.firestore.collection('commentEntries')
      // .where("eventId","==",post.eventId)
      // .where("creatorId","==",post.userId)
      // .get()

      // const userCommentEntries = await this.$fire.firestore.collection('commentEntries')
      // .where("userId","==",this.user.uid)
      // .where("")
      let allEmojis = {}
      let userSelectedEmojis = new Set()
      let userSelectedEmojiNatives = new Set()
      let emojiCount = 0
      if (allCommentEntriesQuery.size > 0) {
        for (const doc of allCommentEntriesQuery.docs) {
          let id = doc.id
          let data = doc.data()
          let selectedEmojis = data.selectedEmojis
          let selectedEmojiNatives = data.selectedEmojiNatives
          if (!data.creatorId || data.creatorId === post.userId) {
            selectedEmojis.forEach((e,i) => {
              allEmojis[e] = allEmojis[e]? {...allEmojis[e], count: allEmojis[e].count + 1} : {count: 1, native: selectedEmojiNatives[i]}
              emojiCount += 1
            })
            if (data.userId === this.user.uid) {
              userSelectedEmojis = new Set(selectedEmojis)
              userSelectedEmojiNatives = new Set(selectedEmojiNatives)
            }
          }
        }
      }

      post['emojis'] = allEmojis
      post['selectedEmojis'] = userSelectedEmojis
      post['selectedEmojiNatives'] = userSelectedEmojiNatives
      post['emojiCount'] = emojiCount

      
    },
    // resetPostShownValue() {
    //   if (this.postShown.length >= 2*this.batchSize) {
    //     for (let i = 0; i< this.postShown.length; i++) {
    //       if (i < 2*this.batchSize - 1) {
    //         this.postShown[i] = true
    //         this.postShownValue[i].value = true
    //       } else {
    //         this.postShown[i] = false
    //         this.postShownValue[i].value = false
    //       }
    //     }
    //   }
    //   this.$forceUpdate();
      
    // },
    async checkNewBlogsAndLoad() {
      const db = this.$fire.firestore
      let query = db.collection('eventImages')
        .orderBy('updatedAt', 'desc')
        .limit(1)

      const querySnapShot = await query.get()
      if (querySnapShot.size > 0) {
        const data = querySnapShot.docs[0].data()
        if (data.updatedAt == this.latestUpdatedAt) {
          return
        }
        this.lastDoc = null;
        this.eof = false;
        this.posts = [];
        await this.loadUntilSome();
      }
    },

    async loadBlogs () {
      const db = this.$fire.firestore


      let query = db.collection('eventImages')
        .orderBy('createdAt', 'desc')
        .limit(this.batchSize)


      if (!this.posts.length) {
        let query2SnapShot = await db.collection('eventImages')
        .orderBy('updatedAt', 'desc')
        .limit(1).get()
        if (query2SnapShot.size > 0) {
          const latestUpdatedData = query2SnapShot.docs[0].data()
          this.latestUpdatedAt = latestUpdatedData.updatedAt
        }
      }

      if (this.lastDoc) {
        query = query.startAfter(this.lastDoc)
      }
      
    
      const querySnapshot = await query.get()

      this.eof = querySnapshot.empty
      this.countMiss = 0
      if (querySnapshot.size > 0) {
        this.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]
        let promises = []
        for (const doc of querySnapshot.docs) {
          let id = doc.id;
          let data = doc.data();
          if (!data.images.length && this.posts.length) {
            this.countMiss += 1;
            if (this.posts.length) {
              continue
            }
          }
          let alteredComment = ""
          if (data.comment) {
            let match = data.comment.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
            alteredComment=data.comment;
            if (match) {
              match.map(url=>{
                alteredComment=alteredComment.replace(url,"<a style='color:blue !important' href=\""+url+"\" target=\"_BLANK\">"+url+"</a>")
              })
            }
          }
          if (!this.eventIds[data.eventId]) {
            let event = this.$fire.firestore.collection('events').doc(data.eventId).get()
            promises.push(event)
          }
          if (!this.userIds[data.userId]) {
            let user = this.$fire.firestore.collection('users').doc(data.userId).get()
            promises.push(user)
          }
          await Promise.all(promises).then((querySnapshot) => {
            querySnapshot.forEach(res => {
              let id = res.id
              let data = res.data()
              if (id && data) {
                if (data.title) {
                  this.eventIds[id] = data
                }
                if (data.email) {
                  this.userIds[id] = data
                }
              }
            })
          })
          const post = {
            id,
            ...this.eventIds[data.eventId],
            ...this.userIds[data.userId],
            ...data,
            alteredComment
          }
          await this.getCommentEntries(post)
          this.posts.push(post)
          // console.log('before push',cloneDeep(this.postShown))
          this.postShown.push(true)
          this.postShownValue.push({value: true})
          
          let firstTrue = this.postShown.indexOf(true)
          let lastIndexTrue = this.postShown.lastIndexOf(true)
          if (lastIndexTrue - firstTrue >= this.batchSize + 1) {
            firstTrue = this.postShown.indexOf(true)
            lastIndexTrue = this.postShown.lastIndexOf(true)
            this.postShown[firstTrue] = false
            this.postShownValue[firstTrue].value = false
            
          }
          // console.log('after push',cloneDeep(this.postShown))
        }
      }

    },
    async loadUntilSome() {
      if (this.isLoading || this.eof) {
        return
      }
      this.isLoading = true
      this.countMiss = this.batchSize
      while (this.countMiss >= (this.batchSize - 1) && !this.eof) {
        await this.loadBlogs()
      }
      this.isLoading = false
    },
    loadMore () {
      
      if (process.browser && !this.lockScroll){
        const elementBounds = this.$el.getBoundingClientRect()

        let changed = this.isMobileScreen? Math.abs(this.currentTop - elementBounds.top) > 200:Math.abs(this.currentTop - elementBounds.top) > 100
        if (changed) {
          this.currentTop = elementBounds.top
                  // Add extra padding to load earlier even before the bottom of the element is in view.
          const padding = this.isMobileScreen? 600:300
          const paddingTop = this.isMobileScreen? -1200 : -600

          const topOfWindow =
            elementBounds.top >= paddingTop
          // console.log(elementBounds.top)
          if (topOfWindow) {
            

            let firstTrue = this.postShown.indexOf(true)
            let lastIndexTrue = this.postShown.lastIndexOf(true)
            if (this.postShown.length > this.batchSize && firstTrue > 0) {
              // console.log('before',cloneDeep(this.postShown))
              this.postShown[firstTrue - 1] = true
              this.postShownValue[firstTrue - 1].value = true
              
              if (lastIndexTrue - firstTrue >= this.batchSize + 1) {
                lastIndexTrue = this.postShown.lastIndexOf(true)
                this.postShown[lastIndexTrue] = false
                this.postShownValue[lastIndexTrue].value = false
              }
              // console.log('after',cloneDeep(this.postShown))
              
            }
          }

          const bottomOfWindow =
            elementBounds.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) + padding

          // console.log(elementBounds.bottom, (window.innerHeight || document.documentElement.clientHeight) + padding)
          if (bottomOfWindow) {
            // console.log('bottom')
            let firstTrue = this.postShown.indexOf(true )
            let lastIndexTrue = this.postShown.lastIndexOf(true)
            if (this.postShown.length > this.batchSize && lastIndexTrue < this.postShown.length - 1) {
              // console.log('before',cloneDeep(this.postShown))
              this.postShown[lastIndexTrue + 1] = true
              this.postShownValue[lastIndexTrue + 1].value = true
              if (lastIndexTrue - firstTrue >= this.batchSize + 1) {
                firstTrue = this.postShown.indexOf(true)
                this.postShown[firstTrue] = false
                this.postShownValue[firstTrue].value = false
              }
              // console.log('after',cloneDeep(this.postShown))
            } 
            
            // if( this.postShown.length> 5 && !this.postShown[this.postShown.length - 1]) {
            //   console.log('before',cloneDeep(this.postShown))
            //   const firstTrue = this.postShown.indexOf(true)
            //   this.postShown[firstTrue] = false
            //   const firstFalseAfterTrue = this.postShown.indexOf(false, firstTrue)
            //   this.postShown[firstFalseAfterTrue] = true
            //   console.log('after',cloneDeep(this.postShown))
            //   return
            // }
          }
          if (bottomOfWindow && !this.isLoading && !this.eof && this.postShown[this.postShown.length - 1]) {
            this.loadUntilSome()
          }
        }
      }
    },

  }
}
</script>