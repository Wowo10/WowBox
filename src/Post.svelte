<script>
  export let PostData
</script>

<div class="post">
  <span class="nickname">{PostData.nickname}</span>
  <span class="date">{PostData.date}</span>
  <div class="content">{PostData.content}</div>
</div>

<style>
  .post {
    border: 1px solid black;
  }
</style>
