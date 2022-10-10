<script>
  import { PostDTO } from "./models.js"
  import PostList from "./PostList.svelte"

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  let posts = sleep(1000).then(() => [
    new PostDTO("Gr00t", new Date(new Date() - 60 * 60000), "I am Gr00t"),
    new PostDTO("Gr00t", new Date(new Date() - 30 * 60000), "I am Gr00t"),
    new PostDTO("Gr00t", new Date(), "I am Gr00t"),
  ])
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
</svelte:head>

<main>
  {#await posts}
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
      alt="broken loading"
    />
  {:then postdtos}
    <PostList posts={postdtos} />
  {:catch error}
    <p>{error.message}</p>
  {/await}
</main>

<style>
</style>
