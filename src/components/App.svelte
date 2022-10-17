<script>
  import MessageInput from "./MessageInput.svelte"
  import PostList from "./PostList.svelte"
  import { getPosts, sendPost } from "../lib/apiService"
  import { PostDTO, PostModel } from "../models"

  let postdtos = []
  let postsPromise = getPosts().then((posts) => {
    postdtos = posts
  })

  let createPost = (nickname, content) => {
    console.log(nickname, content)
    console.log(postdtos)

    const model = new PostModel(nickname, new Date(), content)
    const index = postdtos.length

    postdtos = [...postdtos, new PostDTO(model, false)]
    sendPost(model).then(() => {
      console.log(`${nickname} said ${content}`)
      postdtos[index].sent = true
    })
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
</svelte:head>

{#await postsPromise}
  <img
    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
    alt="broken loading"
  />
{:then}
  <div class="flexbox-container">
    <PostList posts={postdtos} />
    <MessageInput CreatePostCallback={createPost} />
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
