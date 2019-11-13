const articlesRoutes = require('./articles_routes');
module.exports = function(app, db) {
  articlesRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};