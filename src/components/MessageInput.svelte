<script>
  export let createPostCallback
  export let nickname = ""
  export let content = ""
  let nicknameElementFocused = false
  let contentElement

  let nicknameInvalid = false
  let contentInvalid = false

  let handleSendClick = () => {
    nicknameInvalid = false
    contentInvalid = false

    if (!!nickname && !!content) {
      createPostCallback(nickname, content)
      content = ""
    } else {
      if (!nickname) {
        nicknameInvalid = true
      }
      if (!content) {
        contentInvalid = true
      }
    }
  }

  let focus = (node) => {
    node.focus()
  }

  let onKeyDown = (e) => {
    const input = String.fromCharCode(e.keyCode)
    if (e.key == "Enter") {
      handleSendClick()
    } else if (/[a-zA-Z0-9-_ ]/.test(input)) {
      if (!nicknameElementFocused) {
        focus(contentElement)
      }
    }
  }
</script>

<div class="input_post">
  <span class="nickname">
    <span>u/</span>
    <input
      type="text"
      bind:value={nickname}
      on:focusin={() => {
        nicknameElementFocused = true
      }}
      on:focusout={() => {
        nicknameElementFocused = false
      }}
      class:invalid={nicknameInvalid}
    />
  </span>
  <span class="content">
    <input
      class="content_input"
      type="text"
      bind:value={content}
      bind:this={contentElement}
      use:focus
      class:invalid={contentInvalid}
    />
  </span>
  <span><button on:click={handleSendClick}>Send</button></span>
</div>

<svelte:window on:keydown={onKeyDown} />

<style>
  .input_post {
    overflow: scroll;
    flex: 0 0 auto;
    display: flex;
    padding: 5px;
  }
  .input_post > * {
    margin-left: 5px;
    margin-right: 5px;
  }

  .content {
    flex-grow: 1;
  }
  .content > input {
    width: 100%;
  }

  button {
    border: black double 1px;
  }

  .invalid {
    border: 1px red solid;
  }
</style>
