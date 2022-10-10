<script>
  export let PostData
</script>

<div class="post">
  <span class="nickname">u/{PostData.nickname}</span>
  <span class="date">@{PostData.date.toLocaleString()}</span>
  <div class="content">{PostData.content}</div>
</div>

<style>
  .post {
    border: 1px solid black;
    border-top: black solid 0px;
  }
  .post:first-child {
    border-top: black solid 1px;
  }

  .nickname {
    font-weight: bold;
  }

  .date {
    color: #aaa;
    font-size: small;
  }
</style>
