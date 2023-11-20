import mongoose from "mongoose";
//Создаем схему(модель)данных которая будет записана в бд
const Post = new mongoose.Schema({
    author:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true},
    picture:{type:String}
})
//Эта строка создает модель Mongoose на основе схемы Post и экспортирует ее как модуль по умолчанию.
//Модель Post теперь можно использовать для создания, чтения, обновления и удаления документов в коллекции Post в MongoDB.
export default mongoose.model('Post',Post)