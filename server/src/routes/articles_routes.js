async function response() {
  // content-type будет автоматически генерироваться в зависимости оттого какой тип данных  в ответе
  return {
    result: 'ok',
    message: 'Hello World!'
  };
}

module.exports = {
  method: 'GET', // Метод
  path: '/articles', // Путь
  options: {
    handler: response // Функция, обработчик запроса, для hapi > 17 должна возвращать промис
  }
};