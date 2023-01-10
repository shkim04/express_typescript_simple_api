const dotenv = require('dotenv');
// console.log("Environment:", process.env.NODE_ENV);
let envFound = dotenv.config({ path: `${process.env.NODE_ENV}.env` });

if(!envFound) throw new Error('Could not find any .env file.');

let config = {
  port: parseInt(process.env.PORT!, 10),
  mongodb: {
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB,
    collection: process.env.MONGO_COLLECTION,
  }
};

export default config;