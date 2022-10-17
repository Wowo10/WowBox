import { PostModel, PostDTO } from "../models.js"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let mockPosts = (n) => {
    let list = []
    const d = new Date()

    for (let index = 0; index < n; index++) {
        list.push(
            new PostDTO(new PostModel("Gr00t", new Date(d - 60 * 60000 * index), "I am Gr00t"), true)
        )
    }

    return list
}

function getPosts() { return sleep(1000).then(() => mockPosts(10)) }
function sendPost(postModel) { console.log(postModel); return sleep(3000) }

export { getPosts, sendPost }