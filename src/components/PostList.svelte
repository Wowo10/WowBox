<script>
  import Post from "./Post.svelte"

  export let posts
</script>

<div class="postList">
  {#each posts as post}
    <Post PostDTO={post} />
  {/each}
</div>

<style>
  .postList {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
</style>
