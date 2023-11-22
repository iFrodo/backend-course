//Эта строка импортирует модуль express, который предоставляет функции для создания и управления веб-сервером.
import express from "express";
//Эта строка импортирует модуль mongoose, который предоставляет функции для работы с MongoDB из вашего приложения Node.js.
import mongoose from "mongoose";
import router from "./Router.js";
import fileUpload from "express-fileupload";
//Эта строка импортирует модель Post, которую вы создали в файле Post.js.
import Post from "./Post.js";
//Эта строка определяет URL-адрес вашей базы данных MongoDB. Этот URL-адрес будет использоваться для подключения к базе данных.
const DB_URL = "mongodb+srv://cbojio432:root@cluster0.isatcgf.mongodb.net/?retryWrites=true&w=majority";
//Эта строка определяет порт, на котором будет работать ваш сервер.
const PORT = 5000;
//Эта строка создает новый экземпляр приложения Express.
const app = express()

//Эта функция асинхронно подключается к базе данных MongoDB и запускает сервер Express.
async function startApp() {
    try {
        //асинхронное подключение к бд(к бд всегда асинхронное,так как требуется время для подключения к базе, что бы не останавливать загрузку приложения)
        await mongoose.connect(DB_URL)
        //слушай порт
        app.listen(PORT, () => { console.log('server working on ' + PORT + ' port') })
    } catch (error) {
        console.log(error)
    }
}
//Эта строка говорит Express использовать встроенный middleware для анализа JSON. Это необходимо для обработки тел запросов в формате JSON.
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api',router)

//Эта строка определяет обработчик маршрута для POST-запросов на корневой маршрут (‘/’).
//Этот обработчик создает новый документ Post в базе данных с данными из тела запроса и отправляет этот документ обратно клиенту в ответе.

//Эта строка вызывает функцию startApp, которая запускает приложение.
startApp()