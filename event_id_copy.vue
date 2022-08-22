<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <Spinner v-if="!pageLoaded" />
    <v-card v-else-if="pageLoaded" style="width: min(100%, 800px)" >
      <v-alert style="position:absolute;left: 50%;
  z-index:100;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 0 auto; " type="success" :value="!!success">{{ success }}</v-alert>
      <v-alert style="position:absolute;left: 50%;
  z-index:100;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 0 auto; " type="error" :value="!!error">{{ error }}</v-alert>
        <v-carousel
          height="380px"
          hide-delimiter-background
          :show-arrows="eventTopImages.length > 1"
          hide-delimiters>
          <v-carousel-item 
            v-for="(item, index) in eventTopImages" 
            eager
            :key="index">
            <v-img
              contain
              eager
              :src="
                item ||
                'https://www.iapco.org/app/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png'
              "
              min-height="380px"
              max-height="380px"
            ></v-img>
          </v-carousel-item>
        </v-carousel>
        <v-container class="pt-0 pt-md-5 pa-2 pa-sm-4 pa-md-8;">
          <v-row class=" d-flex align-center justify-center">
            <v-col class="pt-0" cols="12" sm="11">
              <v-card-title style="word-break:break-word;text-align:center"> {{ event.title }} </v-card-title>
              <v-card-subtitle class="text-body-1" v-html="event.alteredDescription" style="padding-top:10px;white-space:pre-wrap;word-break:break-word;"
              ></v-card-subtitle>
              <v-card-text>
                <p class="text-body-1" v-if="event.isOnline">Online Event</p>
                <p class="text-body-1" v-else-if="event.location">Location: {{ event.location }}</p>
                <p class="text-body-1" v-if="startingTime">Starting time: {{ startingTime }}</p>
                <p class="text-body-1" v-if="endingTime">Ending time: {{ endingTime }}</p>
                <p class="text-body-1" v-if="duration">Duration: {{ duration }}</p>
                <p class="text-body-1" v-if="deadlineString">Deadline to register: {{ deadlineString }}</p>
                <p class="text-body-1" v-if="event.hasAttendeeLimit && event.attendeeLimit">Maximum Capacity: {{ event.attendeeLimit }} {{ event.attendeeLimit > 1 ? "Participants" : "Participant"}}</p>
                <v-chip v-for="tag of event.tags" :key="tag" class="tag">
                  {{ tag }}
                </v-chip>
                <v-card-actions class="px-0 pb-5">
                  <v-btn
                    v-if="user && !userAlreadyRegistered"
                    class="blue white--text"
                    :disabled="isRegistering || isUnRegistering || isPassedDeadline || isEventFull"
                    @click="handleRegistration(event.id)"
                    >{{ isPassedDeadline? "Event Past Deadline" : (isEventFull ? "Event Full" : "Register")}}</v-btn
                  >
                  <v-btn
                    v-else-if="user"
                    class="grey white--text"
                    :disabled="isRegistering || isUnRegistering || isPassedDeadline"
                    @click="handleUnRegistration(event.id)"
                    >{{ isPassedDeadline? "Event Past Deadline" : "Unregister" }}</v-btn
                  >
                  <v-btn
                    v-else
                    class="white--text"
                    :disabled="!user"
                    >Please Login to Join</v-btn
                  >
                </v-card-actions>
                <h2>{{"Attendees" + " (" + attendees.length + ")"}}</h2>
                <v-card v-if="attendees.length" outlined class="my-5" style="max-height: 170px; overflow-y: scroll;scrollbar-width: thin;">
                <v-list class="py-0">
                  <v-list-item nuxt-link class="black--text" :to="`/profile/${attendant.id}/`" v-for="attendant of attendees" :key="attendant.id"
                    ><v-list-item-avatar
                      ><v-icon>mdi-account</v-icon></v-list-item-avatar
                    ><v-list-item-title v-if="(attendant.firstName || attendant.lastName) && (attendant.firstName.replace(/\s/g, '').length || attendant.lastName.replace(/\s/g, '').length)">{{
                      attendant.firstName + " " + attendant.lastName
                    }}</v-list-item-title>
                    <v-list-item-title v-else>{{
                      "anonymous"
                    }}</v-list-item-title>
                    <v-list-item-action-text
                      v-if="user && attendant.id === user.uid"
                      >YOURSELF</v-list-item-action-text
                    >
                  </v-list-item>
                </v-list>
                </v-card>
                <p v-else>Be the first one to register!</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
    </v-card>
    <v-card  v-if="
              eventImagesArray.length
            "
             class="mt-5 mt-md-7 pa-5" style="width: min(100%, 800px)">
      <v-card-title>Event Images</v-card-title>
      <v-row>
          <v-col
            v-if="
              eventImagesArray
            "
            class="pt-0"
            cols="12"
          >
            <Carousel
              :starting-image="0"
              :images="eventImagesArray"
              :auto-slide-interval="0"
              :show-progress-bar="false"
            ></Carousel>
          </v-col>
        </v-row>
    </v-card>
    <AccountForm :newInfoDialog ="openDialog" :error="passError" :success="success" />
    <v-snackbar v-model="isRegistering" app>Registering</v-snackbar>
    <v-snackbar v-model="isUnRegistering" app>Unregistering</v-snackbar>
    <v-snackbar v-model="isRegistered" app>Event Registered</v-snackbar>
    <v-snackbar v-model="isUnRegistered" app>Event Unregistered</v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import Spinner from '@/components/LoadingSpinner'
import Carousel from '../../components/Carousel.vue';
import AccountForm from "../../components/FormAccount.vue";
export default {
  components: { Spinner, Carousel, AccountForm },
  data() {
    return {
      openDialog: false,
      isRegistered: false,
      isRegistering: false,
      isUnRegistered: false,
      isUnRegistering: false,
      eventImagesArray: [],
      entryId: "",
      passError: "",
      error: "",
      success: "",
      userAlreadyRegistered: false,
      event: "",
      pageLoaded: false,
      eventTopImages : [],
      attendees: [],
      entries: []
    };
  },
  async created() {
    await this.getInfo()
    await this.isUserAlreadyRegistered()
    await this.getEventImages(this.$route.params.id)
    this.$nuxt.$on('closeDialog', ($event) => {
      this.openDialog = false
    })
    this.$nuxt.$on('success', ($event) => {
      this.success = $event
      setTimeout(()=>{
        this.success = null
      },3000)
      this.handleRegistration(this.event.id);
    })
    this.$nuxt.$on('error', ($event) => {
      this.error = $event
      setTimeout(()=>{
        this.error = null
      },3000)
    })
  },
  methods: {
    async getInfo() {
      if(!this.$route.params.id) {
        error({ statusCode: 404, message: 'Page not found' });
        return
      }
      let res = await this.$fire.firestore.collection('events')
      .doc(this.$route.params.id)
      .get()
      let pageLoaded = false
      let event = {
        id: "ID",
        title: "",
        description: "",
        location: "",
        isOnline: false,
        creatorId: "ID",
        eventDateFrom: "",
        eventDateTo: "",
        eventTimeFrom: "",
        eventTimeTo: "",
        deadlineDate: "",
        deadlineTime: "",
        hasDeadline: false,
        hasAttendeeLimit: false,
        attendeeLimit: 0,
        images: []
      }

      let alteredDescription = ""
      let eventTopImages = []
      if (res.exists) {
        let data = res.data();
        if (data.description) {
          let match = data.description.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
          alteredDescription=data.description;
          if (match) {
            match.map(url=>{
              alteredDescription=alteredDescription.replace(url,"<a style='color:blue !important' href=\""+url+"\" target=\"_BLANK\">"+url+"</a>")
            })
          }
        }
        
        event = {
          ...event,
          ...data,
          id: res.id,
          alteredDescription
        }

        if (event.images) {
          event.images.forEach((eventImage) => {
            if (eventImage && eventImage.imageUrl) {
                eventTopImages.push(eventImage.imageUrl)
            }
            
            // Array.prototype.push.apply(out, eventImages.images);
          })
        }
        if (event.isPublished) {
          pageLoaded = true;
        }
      }
      else {
        error({ statusCode: 404, message: 'Page not found' });
        return
      }
      
      let entries = await this.$fire.firestore.collection('entries').where("eventId","==",this.$route.params.id)
      .get()
      .then((querySnapshot) => {
        let out = []
        querySnapshot.forEach((doc) => {
          let data = doc.data()
          out.push({
            id: doc.id,
            ...data,
          })
        })
        return out
      })
      let promises = []
      for (let entry of entries) {
        promises.push(this.$fire.firestore.collection('users').doc(entry.userId).get())
      }
      let attendees = await Promise.all(promises).then((querySnapshot) => {
        let out = []
        querySnapshot.forEach(res => {
          let id = res.id
          let data = res.data()
          if (res && id && data) {
            out.push({
              id,
              ...data
            })
          }
        })
        return out
      })
    
      this.event = event;
      this.pageLoaded = pageLoaded;
      this.eventTopImages = eventTopImages;
      this.attendees = attendees;
      this.entries = entries;
      
    },
    async getEventImages(eventId) {
      // console.log("selected thing",event)
      // let eventId = event.id
      let eventImagesArray = await this.$fire.firestore.collection('eventImages')
      .where("eventId","==",eventId)
      .get()
      .then((querySnapshot) => {
        let out = []
        querySnapshot.forEach((doc) => {
          let id = doc.id
          let data = doc.data()
          out.push({
            id,
            ...data
          })
        })
        return out
      })
      // console.log("eventimagesget", eventImages)
      if (eventImagesArray) {
        let out = []
        eventImagesArray.forEach((eventImages) => {
          if (eventImages.images) {
            eventImages.images.forEach((eventImage) => {
              if (eventImage && eventImage.imageUrl) {
                out.push(eventImage)
              }
            })
          }
          
          // Array.prototype.push.apply(out, eventImages.images);
        })
        eventImagesArray = out
      }
      this.eventImagesArray = eventImagesArray
    },
    async isUserAlreadyRegistered() {
      for (let entry of this.entries) {
        if (this.user&& entry&&entry.userId == this.user.uid) {
          this.entryId = entry.id
        }
      }
      this.userAlreadyRegistered = !!this.entryId
    },
    async handleRegistration(eventId) {
      if (!this.isAccountComplete) {
        this.passError = "Please complete your profile first!"
          setTimeout(()=>{
            this.passError = null
          },4000)
        this.openDialog = true;
        return
      }
      if (this.userAlreadyRegistered) {
        return
      }
      this.isRegistering = true;
      await this.$fire.firestore.collection('entries').add({
        eventId,
        userId: this.user.uid
      })
      .then((docRef) => {
        this.entryId = docRef.id;
        
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

      this.attendees.push({
        ...this.$store.state.account.ACCOUNT,
        id: this.user.uid
      })
      this.userAlreadyRegistered = true;
      this.isRegistered = true;
      // this.isRegistering = false;
    },
    async handleUnRegistration() {
      this.isUnRegistering = true;
      await this.$fire.firestore.collection('entries').doc(this.entryId).delete()
      .then(() => {
        let index = this.attendees.findIndex((attendant) => attendant.id == this.user.uid)
        this.attendees.splice(index,1)
        this.userAlreadyRegistered = false;
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
      this.isUnRegistered = true;
      // this.isUnRegistering = false;
    },
    isPastEndDate(date) {
      const currDate = Date.now()
      // console.log(date + 43200*1000, currDate)
      if (currDate > date) {
        return true
      } else {
        return false
      }
    },
  },
  // async asyncData({store, $fire, $moment, route, error}) {
  //   if(!route.params.id) {
  //     error({ statusCode: 404, message: 'Page not found' });
  //     return
  //   }
  //   let res = await $fire.firestore.collection('events')
  //   .doc(route.params.id)
  //   .get()
  //   let pageLoaded = false
  //   let event = {
  //     id: "ID",
  //     title: "",
  //     description: "",
  //     location: "",
  //     isOnline: false,
  //     creatorId: "ID",
  //     eventDateFrom: "",
  //     eventDateTo: "",
  //     eventTimeFrom: "",
  //     eventTimeTo: "",
  //     deadlineDate: "",
  //     deadlineTime: "",
  //     hasDeadline: false,
  //     hasAttendeeLimit: false,
  //     attendeeLimit: 0,
  //     images: []
  //   }

  //   let alteredDescription = ""
  //   let eventTopImages = []
  //   if (res.exists) {
  //     let data = res.data();
  //     if (data.description) {
  //       let match = data.description.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
  //       alteredDescription=data.description;
  //       if (match) {
  //         match.map(url=>{
  //           alteredDescription=alteredDescription.replace(url,"<a style='color:blue !important' href=\""+url+"\" target=\"_BLANK\">"+url+"</a>")
  //         })
  //       }
  //     }
      
  //     event = {
  //       ...event,
  //       ...data,
  //       id: res.id,
  //       alteredDescription
  //     }

  //     if (event.images) {
  //       event.images.forEach((eventImage) => {
  //         if (eventImage && eventImage.teaserImageUrl) {
  //             eventTopImages.push(eventImage.teaserImageUrl)
  //         }
          
  //         // Array.prototype.push.apply(out, eventImages.images);
  //       })
  //     }
  //     if (event.isPublished) {
  //       pageLoaded = true;
  //     }
  //   }
  //   else {
  //     error({ statusCode: 404, message: 'Page not found' });
  //     return
  //   }
    
  //   let entries = await $fire.firestore.collection('entries').where("eventId","==",route.params.id)
  //   .get()
  //   .then((querySnapshot) => {
  //     let out = []
  //     querySnapshot.forEach((doc) => {
  //       let data = doc.data()
  //       out.push({
  //         id: doc.id,
  //         ...data,
  //       })
  //     })
  //     return out
  //   })
  //   let promises = []
  //   for (let entry of entries) {
  //     promises.push($fire.firestore.collection('users').doc(entry.userId).get())
  //   }
  //   let attendees = await Promise.all(promises).then((querySnapshot) => {
  //     let out = []
  //     querySnapshot.forEach(res => {
  //       let id = res.id
  //       let data = res.data()
  //       if (res && id && data) {
  //         out.push({
  //           id,
  //           ...data
  //         })
  //       }
  //     })
  //     return out
  //   })
  
  //   return {
  //     event,
  //     pageLoaded,
  //     eventTopImages,
  //     attendees,
  //     entries,
  //   }
    
  // },
  computed: {
    // eventImages() {
    //   if (!this.job.images) return;
    //   const images = this.job.images.filter(
    //     e => e.imageUrl && e.imageUrl !== ''
    //   );
    //   return images;
    // },
    isAccountComplete() {
      return this.account.firstName && this.account.country && this.account.university && this.account.dateOfEntry && this.account.major && this.account.expectedGraduationYear && this.account.degree
    },
    ...mapState({
      account: state => state.account.ACCOUNT,
    }),
    startingTime() {
      if (!this.event.eventDateFrom || !this.event.eventTimeFrom) return ""
      return this.toWeekDate(this.event.eventDateFrom +"T"+this.event.eventTimeFrom)
    },
    endingTime() {
      if (!this.event.eventDateTo || !this.event.eventTimeTo) return ""
      return this.toWeekDate(this.event.eventDateTo +"T"+this.event.eventTimeTo); 
    },
    duration() {
      if (!this.startingTime || !this.endingTime) return ""
      const diffInMs = Math.abs(
        new Date(this.event.eventDateFrom +"T"+this.event.eventTimeFrom) -
          new Date(this.event.eventDateTo +"T"+this.event.eventTimeTo)
      );

      const minutesDuration = Math.floor(diffInMs / 1000 / 60);
      let days = 0;
      let hours = 0;
      let minutes = 0;
      days = Math.floor(minutesDuration / 1440);
      hours = Math.floor((minutesDuration - days*1440) / 60);
      minutes = minutesDuration % 60;
      
      if (!hours && !minutes && !days) {
          return ""
      }
      return (
          (days ? ( days == 1? `1 day `: `${days} days `) : "") +
          (hours ? ( hours == 1? `1 hour `: `${hours} hours `) : "") +
          (minutes ? ( minutes == 1? `1 minute`: `${minutes} minutes`) : "")
        );
    },
    deadlineString() {
      if (!this.event.deadlineDate || !this.event.deadlineTime) return ""
      return new Date(this.event.deadlineDate +"T"+this.event.deadlineTime).toLocaleString('en-CA', {year: 'numeric', month: 'numeric', day: 'numeric',hour: 'numeric', minute:'2-digit'})
    },
    deadline() {
      if (!this.event.deadlineDate || !this.event.deadlineTime) return ""
      return new Date(this.event.deadlineDate +"T"+this.event.deadlineTime)
    },
    isEventFull() {
      return this.event.hasAttendeeLimit && (this.event.attendeeLimit <= this.attendees.length)
    },
    isPassedDeadline() {
      if (!this.event.hasDeadline)
      {
        const date = Date.parse(this.event.eventDateTo + "T" + this.event.eventTimeTo)
        const isPassed = this.isPastEndDate(date)
        return isPassed
      }
      const diff = (new Date()).getTime() - this.deadline
      if (diff > 0) {
        return true
      } else {
        return false
      }
    },
    user() {
      return this.$store.state.authUser
    },
  },
  watch: {
    isRegistered() {
      if (this.isRegistered) {
        setTimeout(() => {this.isRegistered = false; this.isRegistering=false}, 3000);
      }
    },
    isUnRegistered() {
      if (this.isUnRegistered) {
        setTimeout(() => {this.isUnRegistered = false;this.isUnRegistering=false}, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  text-align: center;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  p {
    margin-bottom: 0;
  }
}
#tags {
  display: flex;
  justify-content: flex-start;
}
</style>

<style lang="scss" scoped>
.top-carousel-div {
  @media screen and (max-width: 801px) {
    width: 800px;
  }
}
.carousel-div {
  // width: 800px;
  @media screen and (max-width: 801px) {
    width: 800px !important;
  }
}
</style>
