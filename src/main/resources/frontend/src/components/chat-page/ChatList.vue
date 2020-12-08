<template>
  <div>
    <div v-for="(conversation, i) in conversations" :key="i">
      <router-link :to="`/chat/${conversation.recipient_id}`">I am a conversation!</router-link>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component()
export default class ChatWindow extends Vue {
  get conversations() {
    return this.$store.state.conversations;
  }

  async mounted() {
    const data = await fetch(
      `/api/v1/users/${this.$store.state.loggedInUser.user_id}/conversations`
    );
    const conversations = await data.json();
    this.$store.commit("setConversations", conversations.messages);
  }
}
</script>

<style lang="scss" scoped></style>
