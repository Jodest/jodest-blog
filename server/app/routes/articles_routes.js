const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;

// module.exports = function(app, db) {
//   app.post('/articles', (req, res) => {
//     const note = { text: req.body.text, title: req.body.title };
//     console.log(db);
//     db.collection('articles').insert(note, (err, result) => {
//       if (err) {
//         res.send({ 'error': 'An error has occurred' });
//       } else {
//         res.send(result.ops[0]);
//       }
//     });
//   });
// };