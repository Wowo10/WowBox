export class PostDTO {
  constructor(postModel, sent) {
    this.nickname = postModel.nickname
    this.date = postModel.date
    this.content = postModel.content
    this.sent = sent
  }
}

export class PostModel {
  constructor(nickname, date, content) {
    this.nickname = nickname
    this.date = date
    this.content = content
  }
}