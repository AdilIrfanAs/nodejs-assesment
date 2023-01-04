import mongoose from 'mongoose';
// const { mongo, env } = require('./vars');
import configs from "./vars";
const {mongoUri, env} = configs;

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
export const mongoConnect = () => {
    mongoUri ? mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        keepAlive: true,
      }) :
      process.exit(1);
  ;
  return mongoose.connection;
};