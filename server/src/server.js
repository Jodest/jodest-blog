const path = require('path');
const Hapi = require('@hapi/hapi');
const filepaths = require('filepaths');
const hapiBoomDecorators = require('hapi-boom-decorators');
const mongoose = require('mongoose');

const config = require('../config/server');

async function createServer() {
  // Инициализируем сервер
  const server = await new Hapi.Server(config.server);

  mongoose.connect('mongodb://127.0.0.1:27017/articles', { useNewUrlParser: true });
  const connection = mongoose.connection;

  // Регистрируем расширение
  await server.register([
    hapiBoomDecorators
  ]);

  // Загружаем все руты из папки ./src/routes/
  let routes = filepaths.getSync(path.join(__dirname, '/routes/'));
  for(let route of routes) {
    server.route(require(path.normalize(route)));
  }

  // Запускаем сервер
  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch(err) { // если не смогли стартовать, выводим ошибку
    console.log(JSON.stringify(err));
  }

  // Функция должна возвращать созданый сервер
  return server;
}

module.exports = createServer;