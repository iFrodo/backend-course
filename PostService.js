import Post from "./Post.js";


class PostService {
    async create(post) {
        const createdPost = await Post.create(post)
        return createdPost
    }

    async getAll(posts) {
        try {
            const createdPosts = await Post.find(posts);
            return createdPosts

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(id) {
        try {
            if (!id) {
                res.status(400).json({ message: 'не указан id' })
            }
            const post = await Post.findById(id)
            return post
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(post_id, post, query) {
        try {
            const updatedPost = await Post.findByIdAndUpdate(post_id, post, query);
            return updatedPost
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(id) {
        try {
            if (!id) {
                res.status(400).json({ message: 'не указан id' })
            }
            const post = await Post.findByIdAndDelete(id)
            return post
        } catch (error) {
            res.status(500).json(error)
        }
    }

}






export default new PostService()