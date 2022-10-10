<script>
  import { PostDTO } from "./models.js"
  import PostSimple from "./PostSimple.svelte"
  import Post from "./Post.svelte"

  export let posts
</script>

<div>
  {#each posts as post}
    <Post postData={post} />
    <!-- <PostSimple {...post} /> -->
  {/each}
</div>

<!-- <PostSimple {...posts[0]} /> -->
<style>
</style>
