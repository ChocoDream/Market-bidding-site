<template>
  <div class="container chat-page">
    <div class="chat-header row">
      <div class="back-arrow col-2">
        <button @click="goBack">
          <svg
            height="25px"
            viewBox="0 0 16 16"
            class="bi bi-arrow-left"
            fill="#288781"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
      </div>
      <h2 class="chat-title col-10">
        Chats
      </h2>
      <div class="divider"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component()
export default class Chat extends Vue {
  get recipientId() {
    return this.$route.params.id;
  }

  get senderId() {
    return this.$store.state.loggedInUser.user_id;
  }

  get chatContent() {
    return this.$store.state.chatContent.filter((message) => {
      (message.senderId === this.senderId &&
        message.recipientId === this.recipientId) ||
        (message.senderId === this.recipientId &&
          message.recipientId === this.senderId);
    });
  }

  goBack() {
    this.$router.go(-1);
  }

  userIsSender(message) {
    const user = this.senderId;
    const sender = message.sender_id;
    return sender === user;
  }
}
</script>

<style lang="scss" scoped>
.chat-page {
  margin-bottom: 20vh;
}

.divider {
  width: calc(100% - 30px);
  margin: 0 15px;
  border-bottom: 1px solid black;
}

.row {
  margin-bottom: 20px;
}

.chat-header {
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
  background-color: white;
  .back-arrow {
    display: flex;
    justify-content: flex-start;
    button {
      border: none;
      background: none;
      &:focus {
        outline: none;
        svg {
          border: 1px solid #288781;
        }
      }
    }
  }

  .chat-title {
    font-size: 22px;
    text-align: end;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.chat-message-wrapper {
  display: flex;
  margin-top: 2%;
}
</style>
