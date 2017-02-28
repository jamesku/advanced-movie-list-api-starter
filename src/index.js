import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import MyMoviesRouter from './routes/MyMoviesRouter';


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/movie-list', (err) => {
  if (err) {
    console.log('database connection error ' + err + ' ' + mongoose.connection.readyState);
  }
});

app.use(bodyParser.json());

app.use(MyMoviesRouter);

app.use('/mymovies/*', (request, response, next) => {
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((err, request, response, next) => {
  next();
  return response.status(500).send('Uh oh something went wrong! ' + err);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return (console.log('Error', err));
  }
  return console.log('Listening on: http://localhost:' + PORT);
});



// Scrap code to see the list of databases available
// const Admin = mongoose.mongo.Admin;
//
// // create a connection to the DB
// const connection = mongoose.createConnection(
//     'mongodb://127.0.0.1:27017/');
// connection.on('open', function () {
//     // connection established
//   new Admin(connection.db).listDatabases(function (err, result) {
//     console.log('listDatabases succeeded');
//         // database list stored in result.databases
//     const allDatabases = result.databases;
//     console.log(allDatabases);
//   });
// });
