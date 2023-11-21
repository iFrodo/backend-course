import Post from "./Post.js";
class PostController {

    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({ author, title, content, picture })
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
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
            const post = await Post.findById(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
                const post = req.body
                if(!post._id){
                    res.status(400).json({ message: 'не указан id' })
                }
                const updatedPost = Post.findOneAndUpdate(post._id,post,{new:true});
                return res.json(updatedPost)
        } catch (error) {
            res.status(500).json(error)
        } res
    }

    async delete(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }
}





export default new PostController();