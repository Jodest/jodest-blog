module.exports = function(app, db) {
  app.post('/articles', (req, res) => {
    // Здесь будем создавать заметку.
    console.log(req.body);
    res.send('Hello')
  });
};