<template>
  <div>
    <div
      class="chat-message-wrapper"
      v-for="message of chatContent"
      :style="userIsSender ? 'justify-content: flex-end' : ''"
      :key="message.id"
    >
      <ChatMessage :userIsSender="userIsSender" :message="message" />
    </div>
    <ChatInput />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

@Component({
  components: {
    ChatMessage,
    ChatInput,
  },
})
export default class ChatWindow extends Vue {
  chatContent = [];
  userIsSender = true;
  async created() {
    const participantId = this.$route.params.id;
    const data = await fetch(
      `/api/v1/users/${this.$store.state.loggedInUser.user_id}/conversations/${participantId}`
    );
    const messages = await data.json();
    this.chatContent = messages.messages;
  }
}
</script>

<style lang="scss" scoped></style>
