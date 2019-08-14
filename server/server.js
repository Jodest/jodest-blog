const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const mongoose = require('mongoose');
// const articlesRoutes = require('./app/routes/articles_routes');
const Articles = require('./models/article');
const articlesRoutes = express.Router();

const PORT = process.env.PORT | 3000;

// console.log(path.join(__dirname, '../client/src'));

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.use('/api/articles', articlesRoutes);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dmitry:hHRZNSA8QneflQeo@cluster0-fq59z.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})


// app.use((req, res, next) => {
//   res.sendFile('/index.html');
// });

//mongodb+srv://dmitry:<password>@cluster0-fq59z.mongodb.net/test?retryWrites=true&w=majority

//dmitry
//hHRZNSA8QneflQeo

articlesRoutes.route('/').get(function(req, res) {
  Articles.find(function(err, articles) {
      if (err) {
          console.log(err);
      } else {
          res.json(articles);
      }
  });
});

articlesRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Articles.findById(id, function(err, articles) {
      res.json(articles);
  });
});

app.use('/articles', articlesRoutes);

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});

// async function start() {
//   try {
//     await mongoose.connect('mongodb+srv://dmitry:hHRZNSA8QneflQeo@cluster0-fq59z.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
//     app.listen(PORT, () => {
//       console.log('We are live on ' + PORT);
//     });
//   } catch(err) {
//     console.log(err);
//   }
// };

// start();