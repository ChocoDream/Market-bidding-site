<template>
  <div
    class="chat-container"
    :class="userIsSender ? 'sender-chat' : 'reciever-chat'"
  >
    <p>{{ message.content }}</p>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component()
export default class ChatMessage extends Vue {
  @Prop({
    required: true,
  })
  message;

  @Prop({
    required: true
  })
  userIsSender;
}
</script>

<style lang="scss" scoped>
.chat-container {
  max-width: 75%;
  border-radius: 15px;
  p {
    text-align: start;
    margin-left: 2%;
  }
}
.sender-chat {
  background-color: #288781;
}
.reciever-chat {
  background-color: lightgrey;
}
</style>
