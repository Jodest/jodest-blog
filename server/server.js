const path = require('path');
const express = require('express');
const db = require('./config/db');
const app = express();
const articlesRoutes = require('./app/routes/articles_routes');

const mongoose = require('mongoose');

const PORT = process.env.PORT | 3000;

console.log(path.join(__dirname, '../client/src'));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/articles', articlesRoutes);



app.use((req, res, next) => {
  res.sendFile('/index.html');
});

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});

// async function start() {
//   try {
//     await mongoose.connect(db.url, { useNewUrlParser: true })
//     app.listen(PORT, () => {
//       console.log('We are live on ' + PORT);
//     });
//   } catch(err) {
//     console.log(err);
//   }
// };

// start();