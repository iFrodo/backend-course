import PostService from "./PostService.js";



//это круд класс
class PostController {

    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll(req.body);
            return res.json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'не указан id' })
            }
            const post = await PostService.getOne(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({ message: 'не указан id' })
            }
            const updatedPost = await PostService.update(post._id, post, { new: true });
            return res.json(updatedPost)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: 'не указан id' })
            }
            const post = await PostService.delete(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}





export default new PostController();