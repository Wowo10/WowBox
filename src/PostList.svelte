<script>
  import Post from "./Post.svelte"

  export let posts
</script>

<div>
  {#each posts as post}
    <Post PostData={post} />
  {/each}
</div>

<style>
</style>
