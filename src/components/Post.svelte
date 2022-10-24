<script>
  export let PostDTO
</script>

<div class="post">
  <div class="content-box">
    <span class="nickname">u/{PostDTO.nickname}</span>
    <span class="date">@{PostDTO.date.toLocaleString()}</span>
    <div class="content">
      {PostDTO.content}
    </div>
  </div>
  <div class="loader" class:displayed={!PostDTO.sent}>
    <img
      src="https://bestanimations.com/media/gears/513504963black-moving-gears-animation.gif"
      alt="Sending..."
      height="35px"
    />
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

  .content-box {
    display: inline-block;
    width: 95%;
  }

  .nickname {
    font-weight: bold;
  }

  .date {
    color: #aaa;
    font-size: small;
  }

  .loader {
    display: none;
  }

  .content {
    overflow-wrap: break-word;
  }

  .displayed {
    display: inline;
  }
</style>
