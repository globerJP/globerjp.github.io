<template>
  <v-container v-if="hasImages" v-show="shouldShow"  style="width:100%; max-width: 800px;" >
      <v-card v-if="isMobileScreen && portraitImages && portraitImages.length" class="post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center" style="width:min(100%,800px);">
        <Carousel
          v-if="shouldShow"
          :starting-image="0"
          :images="portraitImages"
          :auto-slide-interval="0"
          :show-progress-bar="false"
          :eager="false"
          :portrait="true"
          :postId="post.id"
        ></Carousel>
        <div class="pa-5 pt-5 post-text-container" >
          <nuxt-link :to="`/event/${post.eventId}`">
            <h2 class="mb-2 black--text">
                Event: {{ post.title }} {{landscapeImages && landscapeImages.length? '(Portrait)' : ''}}
            </h2>
          </nuxt-link>
          <p v-html="post.alteredComment" style="word-break:break-word" v-if="post.comment && post.comment.replace(/\s/g, '').length">
          </p>
          <span>
            Posted by:
          <nuxt-link class="black--text" :to="`/profile/${post.userId}`">
            {{ post.firstName || "anonymous"}}
          </nuxt-link>
          </span>
          <div class="d-flex flex-column flex-wrap mt-2 textarea-emoji-picker" style="position: relative;">
              <div v-click-outside="onClickOutsidePotrait" style="width: fit-content">
              <picker
                
                style="position: absolute; top: -425px; flex: 1"
                v-show="showEmojiPickerPortrait"
                title="Pick your emoji..."
                emoji="point_down"
                @select="addEmoji"
                
              />
              <span
                style="width: fit-content;"
                class="emoji-trigger d-flex justify-center align-center"
                :class="{ 'triggered': showEmojiPickerPortrait }"
                @click.stop="toggleEmojiPickerPortrait"
              >
                <svg
                  style="width:30px;height:30px"
                  viewBox="0 0 24 24"
                >
                  <path fill="#888888" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                </svg>
                <div>{{emojiCount? "&nbsp;("+emojiCount+")": ""}}</div>
              </span>
              </div>
              <div v-if="!isMobileScreen"  v-dragscroll @dragscrollstart="start"
            @dragscrollend="end"
            @click.capture="click" style="max-height: 80px; overflow: auto" class="d-flex flex-column justify-center align-center flex-wrap">
                <v-chip
                  :color="selectedEmojis.has(key)? 'primary' : ''"
                  v-for="(value, key ,i) in emojis"
                  :key="i"
                  class="ma-2"
                  :class="[selectedEmojis.has(key)? 'selected-chip' : '']"
                  v-show="emojis[key] && (emojis[key].count != 0)"
                  @click="doAction(key,value)"
                >
                    <span style="font-size: 20px;">{{emojis[key].native + ""}}</span><span> {{ "&nbsp;&nbsp;" + emojis[key].count}}</span>
                </v-chip>
              </div>
              <div v-else style="max-height: 80px; overflow: auto" class="d-flex flex-column justify-center align-center flex-wrap">
                <v-chip
                  :color="selectedEmojis.has(key)? 'primary' : ''"
                  v-for="(value, key ,i) in emojis"
                  :key="i"
                  class="ma-2"
                  :class="[selectedEmojis.has(key)? 'selected-chip' : '']"
                  v-show="emojis[key] && (emojis[key].count != 0)"
                  @click="doAction(key,value)"
                >
                    <span style="font-size: 20px;">{{emojis[key].native + ""}}</span><span> {{ "&nbsp;&nbsp;" + emojis[key].count}}</span>
                </v-chip>
              </div>
          </div>
        </div>
      </v-card>
      <v-card v-if="isMobileScreen && landscapeImages && landscapeImages.length" class="post-carousel pc-none my-3 my-md-5 d-flex flex-column justify-center align-center" style="width:min(100%,800px);">
        <Carousel
          v-if="shouldShow"
          :starting-image="0"
          :images="landscapeImages"
          :auto-slide-interval="0"
          :show-progress-bar="false"
          :eager="false"
          :postId="post.id"
        ></Carousel>
        <div class="pa-5 pt-5 post-text-container" >
          <nuxt-link :to="`/event/${post.eventId}`">
            <h2 class="mb-2 black--text">
                Event: {{ post.title }} {{  portraitImages && portraitImages.length? '(Landscape)' : ''}} 
            </h2>
          </nuxt-link>
          <p v-html="post.alteredComment" style="word-break:break-word" v-if="post.comment && post.comment.replace(/\s/g, '').length">
          </p>
          <span>
            Posted by:
          <nuxt-link class="black--text" :to="`/profile/${post.userId}`">
            {{ post.firstName || "anonymous"}}
          </nuxt-link>
          </span>
          <div class="d-flex flex-column flex-wrap mt-2 textarea-emoji-picker" style="position: relative;">
              <div v-click-outside="onClickOutsideLandscape" style="width: fit-content">
              <picker
                
                style="position: absolute; top: -425px; flex: 1"
                v-show="showEmojiPickerLandscape"
                title="Pick your emoji..."
                emoji="point_down"
                @select="addEmoji"
                
              />
              <span
                style="width: fit-content;"
                class="emoji-trigger d-flex justify-center align-center"
                :class="{ 'triggered': showEmojiPickerLandscape }"
                @click.stop="toggleEmojiPickerLandscape"
              >
                <svg
                  style="width:30px;height:30px"
                  viewBox="0 0 24 24"
                >
                  <path fill="#888888" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                </svg>
                <div>{{emojiCount? "&nbsp;("+emojiCount+")": ""}}</div>
              </span>
              </div>
              <div v-if="!isMobileScreen"  v-dragscroll @dragscrollstart="start"
            @dragscrollend="end"
            @click.capture="click" style="max-height: 80px; overflow: auto" class="d-flex flex-column justify-center align-center flex-wrap">
                <v-chip
                  :color="selectedEmojis.has(key)? 'primary' : ''"
                  v-for="(value, key ,i) in emojis"
                  :key="i"
                  class="ma-2"
                  :class="[selectedEmojis.has(key)? 'selected-chip' : '']"
                  v-show="emojis[key] && (emojis[key].count != 0)"
                  @click="doAction(key,value)"
                >
                    <span style="font-size: 20px;">{{emojis[key].native + ""}}</span><span> {{ "&nbsp;&nbsp;" + emojis[key].count}}</span>
                </v-chip>
              </div>
              <div v-else style="max-height: 80px; overflow: auto" class="d-flex flex-column justify-center align-center flex-wrap">
                <v-chip
                  :color="selectedEmojis.has(key)? 'primary' : ''"
                  v-for="(value, key ,i) in emojis"
                  :key="i"
                  class="ma-2"
                  :class="[selectedEmojis.has(key)? 'selected-chip' : '']"
                  v-show="emojis[key] && (emojis[key].count != 0)"
                  @click="doAction(key,value)"
                >
                    <span style="font-size: 20px;">{{emojis[key].native + ""}}</span><span> {{ "&nbsp;&nbsp;" + emojis[key].count}}</span>
                </v-chip>
              </div>
          </div>
        </div>
      </v-card>
      <v-card v-if="!isMobileScreen" class="post-carousel sp-none my-3 my-md-5 d-flex flex-column justify-center align-center" style="width:min(100%,800px);">
        <Carousel
          v-if="shouldShow"
          :starting-image="0"
          :images="images"
          :auto-slide-interval="0"
          :show-progress-bar="false"
          :eager="false"
          :postId="post.id"
        ></Carousel>
        <div class="pa-5 pt-5 post-text-container" >
          <nuxt-link :to="`/event/${post.eventId}`">
            <h2 class="mb-2 black--text">
                Event: {{ post.title }}
            </h2>
          </nuxt-link>
          <p v-html="post.alteredComment" style="word-break:break-word" v-if="post.comment && post.comment.replace(/\s/g, '').length">
          </p>
          <span>
            Posted by:
          <nuxt-link class="black--text" :to="`/profile/${post.userId}`">
            {{ post.firstName || "anonymous"}}
          </nuxt-link>
          </span>
          <div class="d-flex flex-column flex-wrap mt-2 textarea-emoji-picker" style="position: relative;">
              <div v-click-outside="onClickOutside" style="width: fit-content">
              <picker
                
                style="position: absolute; top: -425px; flex: 1"
                v-show="showEmojiPicker"
                title="Pick your emoji..."
                emoji="point_down"
                @select="addEmoji"
                
              />
              <span
                style="width: fit-content;"
                class="emoji-trigger d-flex justify-center align-center"
                :class="{ 'triggered': showEmojiPicker }"
                @click.stop="toggleEmojiPicker"
              >
                <svg
                  style="width:30px;height:30px"
                  viewBox="0 0 24 24"
                >
                  <path fill="#888888" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                </svg>
                <div>{{emojiCount? "&nbsp;("+emojiCount+")": ""}}</div>
              </span>
              </div>
              <div v-if="!isMobileScreen"  v-dragscroll @dragscrollstart="start"
            @dragscrollend="end"
            @click.capture="click" style="max-height: 80px; overflow: auto" class="d-flex flex-column justify-center align-center flex-wrap">
                <v-chip
                  :color="selectedEmojis.has(key)? 'primary' : ''"
                  v-for="(value, key ,i) in emojis"
                  :key="i"
                  class="ma-2"
                  :class="[selectedEmojis.has(key)? 'selected-chip' : '']"
                  v-show="emojis[key] && (emojis[key].count != 0)"
                  @click="doAction(key,value)"
                >
                    <span style="font-size: 20px;">{{emojis[key].native + ""}}</span><span> {{ "&nbsp;&nbsp;" + emojis[key].count}}</span>
                </v-chip>
              </div>
              <div v-else style="max-height: 80px; overflow: auto" class="d-flex flex-column justify-center align-center flex-wrap">
                <v-chip
                  :color="selectedEmojis.has(key)? 'primary' : ''"
                  v-for="(value, key ,i) in emojis"
                  :key="i"
                  class="ma-2"
                  :class="[selectedEmojis.has(key)? 'selected-chip' : '']"
                  v-show="emojis[key] && (emojis[key].count != 0)"
                  @click="doAction(key,value)"
                >
                    <span style="font-size: 20px;">{{emojis[key].native + ""}}</span><span> {{ "&nbsp;&nbsp;" + emojis[key].count}}</span>
                </v-chip>
              </div>
          </div>
        </div>
      </v-card>
  </v-container>
</template>

<script>
// import emojiData from 'emoji-mart-vue/data/messenger.json'
import Carousel from '@/components/Carousel.vue'
import Spinner from '@/components/LoadingSpinner'
import { Picker } from 'emoji-mart-vue'

export default {
  components: {Spinner, Picker, Carousel},
  name: 'Post',
  data() {
    return {
      shouldShow: true,
      // newImages: [],
      // loadFinish: false,
      // landscapeImages: [],
      // portraitImages: [],
      showEmojiPicker: false,
      showEmojiPickerPortrait: false,
      showEmojiPickerLandscape: false,
      imagesLoaded : false,
      // imageCount : 0,
      currentIndex: 0,
      // emojis: {},
      emojis: {},
      selectedEmojis: new Set(),
      selectedEmojiNatives: new Set(),
      timer: null,
      emojiCount: 0
      // closePopup: true,
    }
  },
  watch: {
    value: {
      handler(val) {
        // console.log('changed val', val)
        this.shouldShow = val.value
      },
      deep: true
      
    },
    async $route(to, from) {
      if (to.name === 'feed') {
        await this.getCommentEntries()
      }
    },
  },


  async created() {
    await this.getCommentEntries()
  // this.newImages = this.images
    //self healing code - do not delete
    // let lacksProperSize = this.images.some(e=>!e.width || !e.height)
    
    // if (lacksProperSize) {
    //   let promises = []
    //   this.images.forEach(image => {
    //       promises.push(new Promise((resolve, reject) => {
    //         let img = new Image();
    //         img.src = image.teaserImageUrl;
    //         img.onload = () => resolve({...image, width: img.width, height: img.height})
    //         img.onerror = (e) => reject(e)
    //       }))
    //   })

    //   try {
    //     await Promise.all(promises).then((res)=>{
    //       this.newImages = res
    //       this.updateImageFirestore()
    //     })
    //   } catch(e) {
    //     console.log(e, "error")
    //   }
    // }

    // this.images.forEach(image => {
    //   if (image.width && image.height) {
    //       if (image.width > image.height) {
    //         this.landscapeImages.push(image)
    //       } else {
    //         this.portraitImages.push(image)
    //       }
    //   } 
    // })

    
    // document.body.addEventListener('click', this.hidePopup)
  },
  // beforeDestroy() {
  //   document.body.removeEventListener('click', this.hidePopup)
  // },
  props: {
    post: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
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
    hasImages() {
      return this.post.images && this.post.images.length > 0 && this.post.images[0].imageUrl
    },
    images() {
      return this.post.images
    },
    landscapeImages() {
      return this.post.images.filter(image => image.width && image.height && image.width > image.height)
    },
    portraitImages() {
      return this.post.images.filter(image => image.width && image.height && image.height >= image.width)
    },
    user() {
      return this.$store.state.authUser
    }
  },
  // computed: {
  //   tags () {
  //     return this.teaser.tags.slice(0).sort()
  //   }
  // }
  methods: {
    // async updateImageFirestore() {
    //   try{
    //       let data = {
    //         images: this.newImages,
    //       }
    //       await this.$fire.firestore.collection("eventImages").doc(this.post.id).update(data)
    //       .then(()=>{
    //         this.success = "Successfully updated!!"
    //         setTimeout(()=>{
    //           this.success = null
    //         },2000)
    //       })
    //     } catch(error) {
    //       this.error = "Could not set user information"
    //       setTimeout(()=>{
    //         this.error = null
    //       },2000)
    //     }
    // },
    // onImageLoad() {
    //   this.imageCount += 1;
    //   if (this.imageCount >= 1) {
    //     this.imagesLoaded = true;
    //   }
    // },
    start() {
      this.timer = setTimeout(() => (this.dragging = true), 100);
    },
    end() {
      clearTimeout(this.timer);
      setTimeout(() => (this.dragging = false));
    },
    click(event) {
      if (this.dragging) {
        event.stopPropagation();
      }
    },
    async doAction(key, value) {
     await this.selectedEmojis.has(key)?  this.removeEmoji(key, value) : this.addEmojiOld(key, value)
    },
    onClickOutside() {
        this.showEmojiPicker = false
    },
    onClickOutsidePotrait() {
        this.showEmojiPickerPortrait = false
    },
    onClickOutsideLandscape() {
        this.showEmojiPickerLandscape = false
    },
    async saveCommentEntries() {
      await this.$fire.firestore.collection('commentEntries').doc(this.user.uid+this.post.eventId+this.post.userId).set({
          eventId: this.post.eventId,
          userId: this.user.uid,
          creatorId: this.post.userId,
          selectedEmojis: [...this.selectedEmojis],
          selectedEmojiNatives: [...this.selectedEmojiNatives],
        })
    },
    async getCommentEntries() {
      const allCommentEntriesQuery = await this.$fire.firestore.collection('commentEntries')
      .where("eventId","==",this.post.eventId).get()


      // after some time open it
      const creatorCommentEntriesQuery = await this.$fire.firestore.collection('commentEntries')
      .where("eventId","==",this.post.eventId)
      .where("creatorId","==",this.post.userId)
      .get()

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
          if (!data.creatorId || data.creatorId === this.post.userId) {
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

      this.emojis = allEmojis
      this.selectedEmojis = userSelectedEmojis
      this.selectedEmojiNatives = userSelectedEmojiNatives
      this.emojiCount = emojiCount
      
    },
    // hidePopup() {
      
    //   this.showEmojiPicker = false
    // },
    toggleEmojiPicker () {
      // clearTimeout(this.timer)
      this.showEmojiPicker = !this.showEmojiPicker
      // this.timer = setTimeout(()=> {
      //   this.allowedOutsideClick = true
      // }, 600)
      
    },
    toggleEmojiPickerPortrait () {
      // clearTimeout(this.timer)
      this.showEmojiPickerPortrait = !this.showEmojiPickerPortrait
      // this.timer = setTimeout(()=> {
      //   this.allowedOutsideClick = true
      // }, 600)
      
    },
    toggleEmojiPickerLandscape () {
      // clearTimeout(this.timer)
      this.showEmojiPickerLandscape = !this.showEmojiPickerLandscape
      // this.timer = setTimeout(()=> {
      //   this.allowedOutsideClick = true
      // }, 600)
      
    },
    async addEmoji (emoji) {
      
      if (this.selectedEmojis.has(emoji.name)) return;
      this.emojis[emoji.name] = this.emojis[emoji.name] ? {...this.emojis[emoji.name], count: this.emojis[emoji.name].count + 1} : {count: 1, native: emoji.native}
      this.selectedEmojis.add(emoji.name)
      this.selectedEmojiNatives.add(emoji.native)
      this.emojiCount += 1
      await this.saveCommentEntries()
      
      this.showEmojiPicker = false
      this.showEmojiPickerPortrait = false
      this.showEmojiPickerLandscape = false
      
    },
    async addEmojiOld (key, value) {

      if (this.selectedEmojis.has(key)) return;
      this.emojis[key] = this.emojis[key]? {...this.emojis[key], count: this.emojis[key].count + 1} : {count: 1, native: value.native}
      
      this.selectedEmojis.add(key)
      this.selectedEmojiNatives.add(value.native)
      this.emojiCount += 1
      await this.saveCommentEntries()
      this.$forceUpdate()
    },
    async removeEmoji (key, value) {
      if (!this.selectedEmojis.has(key)) return;
      const newCount = this.emojis[key].count - 1
      this.emojis[key] = {...this.emojis[key], count: newCount}
      this.selectedEmojis.delete(key)
      this.selectedEmojiNatives.delete(this.emojis[key].native)
      this.emojiCount -= 1
      await this.saveCommentEntries()
      this.$forceUpdate()

      // const textarea = this.$refs.textarea
      // const cursorPosition = textarea.selectionEnd
      // const start = this.value.substring(0, textarea.selectionStart)
      // const end = this.value.substring(textarea.selectionStart)
      // const text = start + emoji.native + end
      // this.$emit('input', text)
      // textarea.focus()
      // this.$nextTick(() => {
      //   textarea.selectionEnd = cursorPosition + emoji.native.length
      // })
    },
    downloadMe() {

      const link = document.createElement('a')
      link.href = this.post.images[this.currentIndex].imageUrl
      link.download = 'image_' + Date.now().toString()
      link.target = '_blank'
      link.click()
    }
  }
}
</script>
<style lang="scss" scoped>
.pc-none {
  @media screen and (min-width: 501px) {
    display: none !important;
  }
}
.sp-none {
  @media screen and (max-width: 500px) {
    display: none !important;
  }
}
.v-image__image {
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (min-width: 801px) {
    width: 760px;
  }
}
.post-text-container {
  @media screen and (max-width: 599px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    min-width: 520px;
  }
}
</style>
<style lang="scss"> /* <-- remove scoped here if you have it*/
  // .post-carousel {
  //   .v-carousel__controls{
  //    height: 40px;
  //     bottom: -10px;
  //     overflow: visible;
  //  }
  //  .v-carousel {
  //    overflow: visible;
  //    padding-bottom: 0px;
  //    @media screen and (max-width: 800px) {
  //      padding-bottom: 0px;
  //    }
  //  }
   
  //  .v-btn--icon {
  //    height: 28px;
  //   width: 28px;
  //  }
  // }
  .d-none {
    display: none !important;
  }
  .selected-chip {
    border: 3px solid black;
    background-color: #555
  }

</style>