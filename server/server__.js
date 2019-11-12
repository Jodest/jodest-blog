const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const mongoose = require('mongoose');
// const articlesRoutes = require('./app/routes/articles_routes');
const Article = require('./models/article');
const articlesRoutes = express.Router();
const axios = require('axios').default;

const PORT = process.env.PORT | 3000;

// console.log(path.join(__dirname, '../client/src'));

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.use('/api/articles', articlesRoutes);

//mongodb+srv://dmitry:hHRZNSA8QneflQeo@cluster0-fq59z.mongodb.net/test?retryWrites=true&w=majority

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/articles', { useNewUrlParser: true });
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
  Article.find(function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.json(articles);
    }
  });
});

articlesRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Article.findById(id, function(err, articles) {
    res.json(articles);
  });
});

articlesRoutes.route('/add').post(function(req, res) {
  let article = new Article(req.body);
  console.log(req.body, article);
  article.save()
      .then(article => {
        res.status(200).json({'article': 'article added successfully'});
      })
      .catch(err => {
        console.log(err);
        res.status(400).send('adding new article failed');
      });
});

articlesRoutes.route('/update/:id').post(function(req, res) {
  Article.findById(req.params.id, function(err, article) {
      if (!article) {
        res.status(404).send("data is not found");
      } else {
        article.text = req.body.text;
        article.title = req.body.title;
        article.image = req.body.image;
        article.date = req.body.date;
        article.author = req.body.author;

        article.save().then(article => {
            res.json('Article updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
      }
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