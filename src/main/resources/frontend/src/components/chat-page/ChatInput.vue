<template>
  <form class="chat-input-wrapper input-group fixed-bottom container">
    <input
      type="text"
      class="form-control"
      id="input-field"
      aria-label="Inputfield for user"
      aria-describedby="basic-addon2"
      required
    />
    <div class="input-group-append">
      <button
        type="submit"
        class="btn btn-primary material-icons"
        id="sendMessage"
      >
        send
      </button>
    </div>
  </form>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component()
export default class ChatInput extends Vue {}
</script>

<style lang="scss" scoped>
.chat-input-wrapper {
  display: flex;
  background-color: white;
  .input-group-append {
    margin-bottom: 1%;
  }
}
</style>
