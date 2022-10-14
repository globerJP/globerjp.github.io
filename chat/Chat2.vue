<template>
  <div>
    <client-only>
      <vue-advanced-chat
      :current-user-id="currentUserId"
      :show-add-room="false"
      :show-audio="false"
      :messages-loaded="true"
      :rooms-loaded="true"
      :rooms="rooms"
      :messages="messages"
    />
  </client-only>
  </div>
</template>
<script>
export default {

  data() {
      return {
        currentUserId: '1234',
        rooms: [],
        messages: [],
        roomActions: [
          { name: 'inviteUser', title: 'Invite User' },
          { name: 'removeUser', title: 'Remove User' },
          { name: 'deleteRoom', title: 'Delete Room' }
        ]
      }
    }
}
</script>