//Для хранинения routов

//авторизация 
import express from 'express';
import { homeRouter } from 'controller.js'
import { authMiddleware } from 'middleware.js'
import dotenv  from 'dotenv';

dotenv.cofig();
const app = express();
async function main(){
  app.use(authMiddleware);
  app.use('/api', homeRouter)
  app.all('*', (req, res) => {
    res.status(404).json({message: 'Not found'})
  });

  app.listen(process.env.PORT || 4200, () => {
    console.log(`Сервер запущен на ${process.env.PORT} порту`)
  }) 
}
main();