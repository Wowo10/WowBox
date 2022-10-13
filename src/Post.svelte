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

  /* https://stackoverflow.com/questions/36130760/use-justify-content-flex-end-and-to-have-vertical-scrollbar */
  .post:first-child {
    border-top: black solid 1px;
    margin-top: auto !important;
  }

  .nickname {
    font-weight: bold;
  }

  .date {
    color: #aaa;
    font-size: small;
  }
</style>
