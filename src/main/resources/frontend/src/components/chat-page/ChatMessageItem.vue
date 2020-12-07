<template>
  <div
    class="chat-container"
    :class="content.sender ? 'sender-chat' : 'reciever-chat'"
  >
    <p>{{ content.message }}</p>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component()
export default class ChatMessage extends Vue {
  @Prop({
    required: true,
  })
  content;
}
</script>

<style lang="scss" scoped>
.chat-container {
  width: 75%;
  border-radius: 15px;
  p {
    text-align: center;
  }
}
.sender-chat {
  background-color: #288781;
}
.reciever-chat {
  background-color: lightgrey;
}
</style>
