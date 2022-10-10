<script>
  import Post from "./Post.svelte"

  export let posts
</script>

<div class="postList">
  {#each posts as post}
    <Post PostData={post} />
  {/each}
</div>

<style>
  .postList {
    border: 2px dotted firebrick;
  }
</style>
