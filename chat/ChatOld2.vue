<template>
  <div v-if="pageLoaded" class="window-container" :class="{ 'window-mobile': isDevice }">
    <client-only>
      <vue-advanced-chat
      :height="screenHeight"
      :show-emojis="false"
      :show-reaction-emojis="false"
      :username-options="{minUsers: 2, currentUser: false}"
			:theme="theme"
			:styles="styles"
			:current-user-id="currentUserId"
			:room-id="roomId"
			:rooms="loadedRooms"
			:loading-rooms="loadingRooms"
			:messages="messages"
			:messages-loaded="messagesLoaded"
			:user-tags-enabled="false"
			:rooms-loaded="roomsLoaded"
			:room-message="roomMessage"
			:templates-text="templatesText"
      :show-add-room="false"
      :accepted-files="'image/png, image/jpeg, image/gif, application/pdf'"
      :message-actions="messageActions"
      @fetch-more-rooms="fetchMoreRooms"
			@fetch-messages="fetchMessages"
			@send-message="sendMessage"
			@edit-message="editMessage"
			@delete-message="deleteMessage"
			@open-file="openFile"
			@open-user-tag="openUserTag"
			@send-message-reaction="sendMessageReaction"
			@typing-message="typingMessage"
			@toggle-rooms-list="$emit('show-demo-options', $event.opened)"
    >
    			<!-- <template #emoji-picker="{ emojiOpened, addEmoji }">
				<button @click="addEmoji({ unicode: '😁' })">
					{{ emojiOpened }}
				</button>
			</template> -->
      </vue-advanced-chat>
  </client-only>
  </div>
</template>
<script>
import { parseTimestamp, isSameDay } from '@/utils/dates'

// import ChatWindow, { Rooms } from 'vue-advanced-chat'
// import ChatWindow from 'vue-advanced-chat'
// import 'vue-advanced-chat/dist/vue-advanced-chat.css'
// import ChatWindow from './../../dist/vue-advanced-chat.umd.min.js'

export default {

	props: {
    currentUserId: {
      type: String,
      default: ''
    },
    isAdmin: {
      type: Boolean || String,
      default: false
    },
    screenHeight: {
      type: String,
      required: true
    },
		// roomsListOpened: {
		// 	type: Boolean,
		// 	required: true
		// },
    isDevice: { type: Boolean, required: true }
	},

	emits: ['show-demo-options'],

	data() {
		return {
			roomsListOpened: false,
      remainingUsersIdNameList: [],
      pageLoaded: false,
      theme: 'light',
      usersRef: null,
      roomsRef: null,
      messagesRef: null,
      filesRef: null,
      dbTimestamp: null,
      deleteDbField: null,
			roomsPerPage: 15,
			rooms: [],
			roomId: '',
			startRooms: null,
			endRooms: null,
			roomsLoaded: false,
			loadingRooms: true,
			allUsers: [],
      allUsersDictionary: {},
      allUsersIdNameList: [],
			loadingLastMessageByRoom: 0,
			roomsLoadedCount: false,
			selectedRoom: null,
			messagesPerPage: 20,
			messages: [],
			messagesLoaded: false,
			roomMessage: '',
			startMessages: null,
			endMessages: null,
			roomsListeners: [],
			listeners: [],
			typingMessageCache: '',
			disableForm: false,
			addNewRoom: null,
      addRoomUserIdList: [],
			inviteRoomId: null,
			invitedUserIdList: [],
			removeRoomId: null,
			removeUserId: '',
			removeUsers: [],
      messageActions:[
        {
          name: 'replyMessage',
          title: 'Reply'
        },
        {
          name: 'editMessage',
          title: 'Edit Message',
          onlyMe: true
        },
        {
          name: 'deleteMessage',
          title: 'Delete Message',
          onlyMe: !this.isAdmin
        },
      ],
			styles: { 
        message: {
			background: '#fff',
			backgroundMe: '#cce7f2',
			color: '#0a0a0a',
			colorStarted: '#9ca6af',
			backgroundDeleted: '#dadfe2',
			backgroundSelected: '#c2dcf2',
			colorDeleted: '#757e85',
			colorUsername: '#9ca6af',
			colorTimestamp: '#828c94',
			backgroundDate: '#e5effa',
			colorDate: '#505a62',
			backgroundSystem: '#e5effa',
			colorSystem: '#505a62',
			backgroundMedia: 'rgba(0, 0, 0, 0.15)',
			backgroundReply: 'rgba(0, 0, 0, 0.08)',
			colorReplyUsername: '#0a0a0a',
			colorReply: '#6e6e6e',
			colorTag: '#0d579c',
			backgroundImage: '#ddd',
			colorNewMessages: '#1976d2',
			backgroundScrollCounter: '#0696c7',
			colorScrollCounter: '#fff',
			backgroundReaction: '#eee',
			borderStyleReaction: '1px solid #eee',
			backgroundReactionHover: '#fff',
			borderStyleReactionHover: '1px solid #ddd',
			colorReactionCounter: '#0a0a0a',
			backgroundReactionMe: '#cfecf5',
			borderStyleReactionMe: '1px solid #3b98b8',
			backgroundReactionHoverMe: '#cfecf5',
			borderStyleReactionHoverMe: '1px solid #3b98b8',
			colorReactionCounterMe: '#0b59b3',
			backgroundAudioRecord: '#eb4034',
			backgroundAudioLine: 'rgba(0, 0, 0, 0.15)',
			backgroundAudioProgress: '#455247',
			backgroundAudioProgressSelector: '#455247',
			colorFileExtension: '#757e85'
		},

        // general: {
        //   color: 'blue'
        // },
        container: { 
          borderRadius: '5px' 
        } 
      
      },
			templatesText: [
				{
					tag: 'hello',
					text: 'Hi there, nice you meet you.'
				},
				{
					tag: 'thanks',
					text: 'Thank you so much.'
				}
			]
			// ,dbRequestCount: 0
		}
	},

	computed: {
    user() {
      return this.$store.state.authUser
    },
		loadedRooms() {
			return this.rooms.slice(0, this.roomsLoadedCount)
		},
	},
	// watch: {
  //   async $route(to, from) {
  //     if (to.name === 'chat') {
	// 			await this.fetchRooms()
	// 		}
	// 	}
	// },
	async mounted() {
    const db = this.$fire.firestore
    const storageRef = this.$fire.storage.ref()
    this.usersRef = db.collection('chatUsers')
    this.roomsRef = db.collection('chatRooms')
    this.messagesRef = roomId => this.roomsRef.doc(roomId).collection('chatMessages')
    this.filesRef = storageRef.child('chatFiles')

    this.dbTimestamp = this.$fireModule.firestore.FieldValue.serverTimestamp()
    this.deleteDbField = this.$fireModule.firestore.FieldValue.delete()
		await this.fetchRooms()
    this.pageLoaded = true
    
		// this.updateUserOnlineStatus()
	},

	methods: {
		resetRooms() {
			this.loadingRooms = true
			this.loadingLastMessageByRoom = 0
			this.roomsLoadedCount = 0
			this.rooms = []
			this.roomsLoaded = true
			this.startRooms = null
			this.endRooms = null
			this.roomsListeners.forEach(listener => listener())
			this.roomsListeners = []
			this.resetMessages()
		},

		resetMessages() {
			this.messages = []
			this.messagesLoaded = false
			this.startMessages = null
			this.endMessages = null
			this.listeners.forEach(listener => listener())
			this.listeners = []
		},

		async fetchRooms() {
			this.resetRooms()
			await this.fetchMoreRooms()
		},

		async fetchMoreRooms() {
			if (this.endRooms && !this.startRooms) return (this.roomsLoaded = true)

			let query = this.roomsRef
				.where('users', 'array-contains', this.currentUserId)
				.orderBy('lastUpdated', 'desc')
				.limit(this.roomsPerPage)

			if (this.startRooms) query = query.startAfter(this.startRooms)

			const rooms = await query.get()
			// this.incrementDbCounter('Fetch Rooms', rooms.size)

			this.roomsLoaded = rooms.empty || rooms.size < this.roomsPerPage

			if (this.startRooms) this.endRooms = this.startRooms
			this.startRooms = rooms.docs[rooms.docs.length - 1]

			const roomUserIds = []
			rooms.forEach(room => {
				room.data().users.forEach(userId => {
					const foundUser = this.allUsers.find(user => user?._id === userId)
					if (!foundUser && roomUserIds.indexOf(userId) === -1) {
						roomUserIds.push(userId)
					}
				})
			})

			// this.incrementDbCounter('Fetch Room Users', roomUserIds.length)
			const rawUsers = []
			roomUserIds.forEach(userId => {
				const promise = this.usersRef
					.doc(userId)
					.get()
					.then(user => user.data())

				rawUsers.push(promise)
			})

			this.allUsers = [...this.allUsers, ...(await Promise.all(rawUsers))]

			const roomList = {}
			rooms.forEach(room => {
				roomList[room.id] = { ...room.data(), users: [] }

				room.data().users.forEach(userId => {
					const foundUser = this.allUsers.find(user => user?._id === userId)
					if (foundUser) roomList[room.id].users.push(foundUser)
				})
			})

			const formattedRooms = []

			Object.keys(roomList).forEach(key => {
				const room = roomList[key]

				const roomContacts = room.users.filter(
					user => user._id !== this.currentUserId
				)

				room.roomName = room.roomName || roomContacts.map(user => user.username).join(', ') || 'Myself'
					// roomContacts.map(user => user.username).join(', ') || 'Myself'

				const roomAvatar =
					room.roomAvatarUrl
						? room.roomAvatarUrl
						: require('@/assets/images/default_profile.png')

				formattedRooms.push({
					...room,
					roomId: key,
					avatar: roomAvatar,
					index: room.lastUpdated.seconds,
					lastMessage: {
						content: 'Room created',
						timestamp: this.formatTimestamp(
							new Date(room.lastUpdated.seconds),
							room.lastUpdated
						)
					}
				})
			})

			this.rooms = this.rooms.concat(formattedRooms)
			formattedRooms.map(room => this.listenLastMessage(room))

			if (!this.rooms.length) {
				this.loadingRooms = false
				this.roomsLoadedCount = 0
			}

			// this.listenUsersOnlineStatus(formattedRooms)
			this.listenRooms(query)
			// setTimeout(() => console.log('TOTAL', this.dbRequestCount), 2000)
		},

		listenLastMessage(room) {
			const listener = this.messagesRef(room.roomId)
				.orderBy('timestamp', 'desc')
				.limit(1)
				.onSnapshot(messages => {
					// this.incrementDbCounter('Listen Last Room Message', messages.size)
					messages.forEach(message => {
						const lastMessage = this.formatLastMessage(message.data())
						const roomIndex = this.rooms.findIndex(
							r => room.roomId === r.roomId
						)
						this.rooms[roomIndex].lastMessage = lastMessage
						this.rooms = [...this.rooms]
					})
					if (this.loadingLastMessageByRoom < this.rooms.length) {
						this.loadingLastMessageByRoom++

						if (this.loadingLastMessageByRoom === this.rooms.length) {
							this.loadingRooms = false
							this.roomsLoadedCount = this.rooms.length
						}
					}
				})

			this.roomsListeners.push(listener)
		},

		formatLastMessage(message) {
			if (!message.timestamp) return

			let content = message.content
			if (message.files?.length) {
				const file = message.files[0]
				content = `${file.name}.${file.extension || file.type}`
			}

			return {
				...message,
				...{
					content,
					timestamp: this.formatTimestamp(
						new Date(message.timestamp.seconds * 1000),
						message.timestamp
					),
					distributed: true,
					seen: message.sender_id === this.currentUserId ? message.seen : null,
					new:
						message.sender_id !== this.currentUserId &&
						(!message.seen || !message.seen[this.currentUserId])
				}
			}
		},

		formatTimestamp(date, timestamp) {
			const timestampFormat = isSameDay(date, new Date()) ? 'HH:mm' : 'DD/MM/YY'
			const result = parseTimestamp(timestamp, timestampFormat)
			return timestampFormat === 'HH:mm' ? `Today, ${result}` : result
		},

		fetchMessages({ room, options = {} }) {
			this.$emit('show-demo-options', false)

			if (options.reset) {
				this.resetMessages()
				this.roomId = room.roomId
			}

			if (this.endMessages && !this.startMessages) {
				return (this.messagesLoaded = true)
			}

			let ref = this.messagesRef(room.roomId)

			let query = ref.orderBy('timestamp', 'desc').limit(this.messagesPerPage)

			if (this.startMessages) query = query.startAfter(this.startMessages)

			this.selectedRoom = room.roomId

			query.get().then(messages => {
				// this.incrementDbCounter('Fetch Room Messages', messages.size)
				if (this.selectedRoom !== room.roomId) return

				if (messages.empty || messages.docs.length < this.messagesPerPage) {
					setTimeout(() => (this.messagesLoaded = true), 0)
				}

				if (this.startMessages) this.endMessages = this.startMessages
				this.startMessages = messages.docs[messages.docs.length - 1]

				let listenerQuery = ref.orderBy('timestamp')

				if (this.startMessages) {
					listenerQuery = listenerQuery.startAt(this.startMessages)
				}
				if (this.endMessages) {
					listenerQuery = listenerQuery.endAt(this.endMessages)
				}

				if (options.reset) this.messages = []

				messages.forEach(message => {
					const formattedMessage = this.formatMessage(room, message)
					this.messages.unshift(formattedMessage)
				})

				const listener = listenerQuery.onSnapshot(snapshots => {
					// this.incrementDbCounter('Listen Room Messages', snapshots.size)
					this.listenMessages(snapshots, room)
				})
				this.listeners.push(listener)
			})
		},

		listenMessages(messages, room) {
			messages.forEach(message => {
				const formattedMessage = this.formatMessage(room, message)
				const messageIndex = this.messages.findIndex(m => m._id === message.id)

				if (messageIndex === -1) {
					this.messages = this.messages.concat([formattedMessage])
				} else {
					this.messages[messageIndex] = formattedMessage
					this.messages = [...this.messages]
				}

				this.markMessagesSeen(room, message)
			})
		},

		markMessagesSeen(room, message) {
			if (
				message.data().sender_id !== this.currentUserId &&
				(!message.data().seen || !message.data().seen[this.currentUserId])
			) {
				this.messagesRef(room.roomId)
					.doc(message.id)
					.update({
						[`seen.${this.currentUserId}`]: new Date()
					})
			}
		},

		formatMessage(room, message) {
			const senderUser = room.users.find(
				user => message.data().sender_id === user._id
			)

			const { timestamp } = message.data()

			const formattedMessage = {
				...message.data(),
				...{
					senderId: message.data().sender_id,
					_id: message.id,
					seconds: timestamp.seconds,
					timestamp: parseTimestamp(timestamp, 'HH:mm'),
					date: parseTimestamp(timestamp, 'DD MMMM YYYY'),
					username: senderUser ? senderUser.username : null,
					// avatar: senderUser ? senderUser.avatar : null,
					distributed: true
				}
			}

			if (message.data().replyMessage) {
				formattedMessage.replyMessage = {
					...message.data().replyMessage,
					...{
						senderId: message.data().replyMessage.sender_id
					}
				}
			}

			return formattedMessage
		},

		async sendMessage({ content, roomId, files, replyMessage }) {
			const message = {
				sender_id: this.currentUserId,
				content,
				timestamp: new Date()
			}

			if (files) {
				message.files = this.formattedFiles(files)
			}

			if (replyMessage) {
				message.replyMessage = {
					_id: replyMessage._id,
					content: replyMessage.content,
					sender_id: replyMessage.senderId
				}

				if (replyMessage.files) {
					message.replyMessage.files = replyMessage.files
				}
			}

			const { id } = await this.messagesRef(roomId).add(message)

			if (files) {
				for (let index = 0; index < files.length; index++) {
					await this.uploadFile({ file: files[index], messageId: id, roomId })
				}
			}

			this.roomsRef.doc(roomId).update({ lastUpdated: new Date() })
		},

		async editMessage({ messageId, newContent, roomId, files }) {
			const newMessage = { edited: new Date() }
			newMessage.content = newContent

			if (files) {
				newMessage.files = this.formattedFiles(files)
			} else {
				newMessage.files = this.deleteDbField
			}

			await this.messagesRef(roomId)
				.doc(messageId)
				.update(newMessage)

			if (files) {
				for (let index = 0; index < files.length; index++) {
					if (files[index]?.blob) {
						await this.uploadFile({ file: files[index], messageId, roomId })
					}
				}
			}
		},

		async deleteMessage({ message, roomId }) {
			const confirmation = window.confirm('Are you sure?');
        // console.log(confirmation);

        if (!confirmation) return;
			await this.messagesRef(roomId)
				.doc(message._id)
				.update({ deleted: new Date() })

			const { files } = message

			if (files) {
				files.forEach(file => {
					const deleteFileRef = this.filesRef
						.child(this.currentUserId)
						.child(message._id)
						.child(`${file.name}.${file.extension || file.type}`)

					deleteFileRef.delete()
				})
			}
		},

		async uploadFile({ file, messageId, roomId }) {
			let type = file.extension || file.type
			if (type === 'svg' || type === 'pdf') {
				type = file.type
			}

			const uploadFileRef = this.filesRef
				.child(this.currentUserId)
				.child(messageId)
				.child(`${file.name}.${type}`)

			const uploadTask = uploadFileRef.put(file.blob, {
				contentType: type
			})

			uploadTask.on(
				'state_changed',
				snap => {
					const progress = Math.round(
						(snap.bytesTransferred / snap.totalBytes) * 100
					)
					this.updateFileProgress(messageId, file.localUrl, progress)
				},
				_error => {},
				async () => {
					const url = await uploadTask.snapshot.ref.getDownloadURL()

					const messageDoc = await this.messagesRef(roomId)
						.doc(messageId)
						.get()

					const files = messageDoc.data().files

					files.forEach(f => {
						if (f.url === file.localUrl) {
							f.url = url
						}
					})

					await this.messagesRef(roomId)
						.doc(messageId)
						.update({ files })
				}
			)
		},

		updateFileProgress(messageId, fileUrl, progress) {
			const message = this.messages.find(message => message._id === messageId)

			if (!message || !message.files) return

			message.files.find(file => file.url === fileUrl).progress = progress
			this.messages = [...this.messages]
		},

		formattedFiles(files) {
			const formattedFiles = []

			files.forEach(file => {
				const messageFile = {
					name: file.name,
					size: file.size,
					type: file.type,
					extension: file.extension || file.type,
					url: file.url || file.localUrl
				}

				if (file.audio) {
					messageFile.audio = true
					messageFile.duration = file.duration
				}

				formattedFiles.push(messageFile)
			})

			return formattedFiles
		},

		openFile({ file }) {
			window.open(file.file.url, '_blank')
		},

		async openUserTag({ user }) {
			if (user._id === this.currentUserId) return
			let roomId

			this.rooms.forEach(room => {
				if (room.users.length === 2) {
					const userId1 = room.users[0]._id
					const userId2 = room.users[1]._id
					if (
						(userId1 === user._id || userId1 === this.currentUserId) &&
						(userId2 === user._id || userId2 === this.currentUserId)
					) {
						roomId = room.roomId
					}
				}
			})

			if (roomId) return (this.roomId = roomId)

			const query1 = await this.roomsRef
				.where('users', '==', [this.currentUserId, user._id])
				.get()

			if (!query1.empty) {
				return this.loadRoom(query1)
			}

			let query2 = await this.roomsRef
				.where('users', '==', [user._id, this.currentUserId])
				.get()

			if (!query2.empty) {
				return this.loadRoom(query2)
			}

			const room = await this.roomsRef.add({
				users: [user._id, this.currentUserId],
				lastUpdated: new Date()
			})

			this.roomId = room.id
			this.fetchRooms()
		},

		async loadRoom(query) {
			query.forEach(async room => {
				if (this.loadingRooms) return
				await this.roomsRef.doc(room.id).update({ lastUpdated: new Date() })
				this.roomId = room.id
				this.fetchRooms()
			})
		},


		async sendMessageReaction({ reaction, remove, messageId, roomId }) {
			const dbAction = remove
				? this.$fireModule.firestore.FieldValue.arrayRemove(this.currentUserId)
				: this.$fireModule.firestore.FieldValue.arrayUnion(this.currentUserId)

			await this.messagesRef(roomId)
				.doc(messageId)
				.update({
					[`reactions.${reaction.unicode}`]: dbAction
				})
		},

		typingMessage({ message, roomId }) {
			if (!roomId) return

			if (message?.length > 1) {
				return (this.typingMessageCache = message)
			}

			if (message?.length === 1 && this.typingMessageCache) {
				return (this.typingMessageCache = message)
			}

			this.typingMessageCache = message

			const dbAction = message
				? this.$fireModule.firestore.FieldValue.arrayUnion(this.currentUserId)
				: this.$fireModule.firestore.FieldValue.arrayRemove(this.currentUserId)

			this.roomsRef.doc(roomId).update({
				typingUsers: dbAction
			})
		},

		async listenRooms(query) {
			const listener = query.onSnapshot(rooms => {
				// this.incrementDbCounter('Listen Rooms Typing Users', rooms.size)
				rooms.forEach(room => {
					const foundRoom = this.rooms.find(r => r.roomId === room.id)
					if (foundRoom) {
						foundRoom.typingUsers = room.data().typingUsers
						foundRoom.index = room.data().lastUpdated.seconds
					}
				})
			})
			this.roomsListeners.push(listener)
		},

		// updateUserOnlineStatus() {
		// 	const userStatusRef = firebase
		// 		.database()
		// 		.ref('/status/' + this.currentUserId)

		// 	const isOfflineData = {
		// 		state: 'offline',
		// 		lastChanged: firebase.database.ServerValue.TIMESTAMP
		// 	}

		// 	const isOnlineData = {
		// 		state: 'online',
		// 		lastChanged: firebase.database.ServerValue.TIMESTAMP
		// 	}

		// 	firebase
		// 		.database()
		// 		.ref('.info/connected')
		// 		.on('value', snapshot => {
		// 			if (snapshot.val() === false) return

		// 			userStatusRef
		// 				.onDisconnect()
		// 				.set(isOfflineData)
		// 				.then(() => {
		// 					userStatusRef.set(isOnlineData)
		// 				})
		// 		})
		// },

		// listenUsersOnlineStatus(rooms) {
		// 	rooms.map(room => {
		// 		room.users.map(user => {
		// 			const listener = firebase
		// 				.database()
		// 				.ref('/status/' + user._id)
		// 				.on('value', snapshot => {
		// 					if (!snapshot || !snapshot.val()) return

		// 					const lastChanged = this.formatTimestamp(
		// 						new Date(snapshot.val().lastChanged),
		// 						new Date(snapshot.val().lastChanged)
		// 					)

		// 					user.status = { ...snapshot.val(), lastChanged }

		// 					const roomIndex = this.rooms.findIndex(
		// 						r => room.roomId === r.roomId
		// 					)

		// 					this.rooms[roomIndex] = room
		// 					this.rooms = [...this.rooms]
		// 				})
		// 			this.roomsListeners.push(listener)
		// 		})
		// 	})
		// },


		// ,incrementDbCounter(type, size) {
		// 	size = size || 1
		// 	this.dbRequestCount += size
		// 	console.log(type, size)
		// }
	}
}
</script>
<style>
@media screen and (max-width: 500px) {
  #room-footer {
    position: fixed;
    width: 100%;
    bottom: 0
  }
	
	.vac-input {
		font-size: 16px !important;
	}

  #messages-list {
    padding-bottom: 50px;
  }
}

</style>
<style lang="scss" scoped>
.window-container {
	width: 100%;
}

.window-mobile {
	form {
		padding: 0 10px 10px;
	}
}

form {
	padding-bottom: 20px;
}

input {
	padding: 5px;
	width: 140px;
	height: 21px;
	border-radius: 4px;
	border: 1px solid #d2d6da;
	outline: none;
	font-size: 14px;
	vertical-align: middle;

	&::placeholder {
		color: #9ca6af;
	}
}

button {
	background: #1976d2;
	color: #fff;
	outline: none;
	cursor: pointer;
	border-radius: 4px;
	padding: 8px 12px;
	margin-left: 10px;
	border: none;
	font-size: 14px;
	transition: 0.3s;
	vertical-align: middle;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}

	&:disabled {
		cursor: initial;
		background: #c6c9cc;
		opacity: 0.6;
	}
}

.button-cancel {
	color: #a8aeb3;
	background: none;
	margin-left: 5px;
}

select {
	vertical-align: middle;
	height: 33px;
	width: 152px;
	font-size: 13px;
	margin: 0 !important;
}
</style>
