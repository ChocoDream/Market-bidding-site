<template>
  <div class="container chat-page">
    <div class="chat-header row sticky-top">
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
        Stalin
      </h2>
      <div class="divider"></div>
    </div>

    <div
      class="chat-message-wrapper"
      v-for="(content, i) in chatContent"
      :style="!content.sender ? 'justify-content: flex-end' : ''"
      :key="content.message + '' + i"
    >
      <ChatMessage :content="content" />
    </div>
    <ChatInput />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ChatInput from "../components/chat-page/ChatInput";
import ChatMessage from "../components/chat-page//ChatMessage";
@Component({
  components: {
    ChatInput,
    ChatMessage,
  },
})
export default class Chat extends Vue {
  goBack() {
    this.$router.go(-1);
  }

//JUST TEST DATA TO HAVE SOMETHING TO USE WHEN STYLING COMPONENTS
  chatContent = [
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: false,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: false,
    },
    {
      message: "HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: true,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: true,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: false,
    },
    {
      message: "HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: true,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: false,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: false,
    },
    {
      message: "HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: true,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: true,
    },
    {
      message:
        "HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: false,
    },
    {
      message: "HELLO WORLD HELLO WORLD HELLO WORLD",
      sender: true,
    },
  ];
}
</script>

<style lang="scss" scoped>
.chat-page{
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
