<script>
  import MessageInput from "./MessageInput.svelte"
  import { PostDTO } from "../models.js"
  import PostList from "./PostList.svelte"

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  let preparePosts = (n) => {
    let list = []
    const d = new Date()

    for (let index = 0; index < n; index++) {
      list.push(
        new PostDTO("Gr00t", new Date(d - 60 * 60000 * index), "I am Gr00t")
      )
    }

    return list
  }

  let posts = sleep(1000).then(() => preparePosts(10))
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
</svelte:head>

{#await posts}
  <img
    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
    alt="broken loading"
  />
{:then postdtos}
  <div class="flexbox-container">
    <PostList posts={postdtos} />
    <MessageInput />
  </div>
{:catch error}
  <p>{error.message}</p>
{/await}

<style>
  .flexbox-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
