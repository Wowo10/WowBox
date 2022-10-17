<script>
  export let CreatePostCallback
  export let nickname = ""
  export let content = ""

  let handleSendClick = () => {
    console.log("clickedsend!")

    CreatePostCallback(nickname, content)
  }
</script>

<div class="input_post">
  <span class="nickname">u/<input type="text" bind:value={nickname} /></span>
  <span class="content"><input type="text" bind:value={content} /></span>
  <span><button on:click={handleSendClick}>Send</button></span>
</div>

<style>
  .input_post {
    overflow: scroll;
    flex: 0 0 auto;
  }

  button {
    border: black double 1px;
  }
</style>
