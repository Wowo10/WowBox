<script>
  export let PostDTO
</script>

<div class="post">
  <span class="nickname">u/{PostDTO.nickname}</span>
  <span class="date">@{PostDTO.date.toLocaleString()}</span>
  <span class="loader" class:displayed={!PostDTO.sent}>
    <img
      src="https://bestanimations.com/media/gears/513504963black-moving-gears-animation.gif"
      alt="Sending..."
      width="40px"
    />
  </span>
  <div class="content">
    {PostDTO.content}
  </div>
</div>

<style>
  .post {
    border: 1px solid black;
    border-top: black solid 0px;
  }

  .post:nth-child(2n + 1) {
    background-color: #fff;
  }
  .post:nth-child(2n) {
    background-color: #ddd;
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

  .loader {
    margin-left: 200px;
    display: none;
  }

  .displayed {
    display: inline;
  }
</style>
