import Post from "./Post.js";
import FileService from "./FileService.js";

//Класс сервиса который занимаеться обработкой данных постов полученых с бд по запросам от круд класса
class PostService {
    //Метод create принимает объект post и создает новый пост в базе данных, используя метод create модели Post. Затем он возвращает созданный пост.
    //Аналогичным образом работают и другие методы (getAll, getOne, update, delete),
    //каждый из которых выполняет свою функцию (получение всех постов, получение одного поста, обновление поста, удаление поста).

    async create(post,picture) {
        const fileName = FileService.saveFile(picture)

        const createdPost = await Post.create({...post,picture:fileName})
        return createdPost
    }
    async getAll(posts) {
        const createdPosts = await Post.find(posts);
        return createdPosts
    }
    async getOne(id) {
        const post = await Post.findById(id)
        return post
    }
    async update(post) {
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost
    }
    async delete(id) {
        const post = await Post.findByIdAndDelete(id)
        return post
    }

}

export default new PostService()