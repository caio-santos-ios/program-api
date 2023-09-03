import { Post } from "../entities/post.entity";
import { postRepository } from "../repositories";

const create = async (payload: Post): Promise<Post> => {
    const post = postRepository.create(payload)

    await postRepository.save(post)

    return post
}

const read = async (): Promise<Post[]> => {
    const posts = await postRepository.find({
        relations: {
            user: true
        }
    })

    return posts
}

const update = async (payload: any, updataPayload: any): Promise<Post> => {
    const post = await postRepository.save({...payload, ...updataPayload})

    return post
}

const destroy = async (payload: any): Promise<any> => {
    const post = await postRepository.delete(payload)

    return post
}

export default { create, read, update, destroy }