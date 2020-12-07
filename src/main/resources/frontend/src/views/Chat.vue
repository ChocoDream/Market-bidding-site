<template>
  <div class="container">
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

    <!--CHAT STUFF-->
    <div
      class="chat-message-wrapper"
      v-for="(content, i) in chatContent"
      :style="!content.sender ? 'justify-content: flex-end' : ''"
      :key="content.message + '' + i"
    >
      <div
        class="chat-container"
        :class="content.sender ? 'sender-chat' : 'reciever-chat'"
      >
        <p>{{ content.message }}</p>
      </div>
    </div>
    <!--CHAT INPUT-->
    <form class="chat-input-wrapper input-group fixed-bottom">
      <input
        type="text"
        class="form-control"
        id="input-field"
        aria-label="Inputfield for user"
        aria-describedby="basic-addon2"
        required
      />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary material-icons" id="sendMessage">
          send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component()
export default class Chat extends Vue {
  goBack() {
    this.$router.go(-1);
  }

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
}

.chat-input-wrapper {
  display: flex;
  background-color: white;
  .input-group-append{
    margin-bottom: 1%;
  }
}

.container {
  margin-bottom: 20vh;
}
</style>
