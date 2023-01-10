import config  from './config';
const { MongoClient } = require('mongodb');

const connectMongoDB: () => Promise<any> = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      config.mongodb.uri,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
      (err: Error, client: object) => {
        if(err) {
          reject(err);
          return;
        }
    
        resolve(client);
      }
    );
  });
};

export default connectMongoDB;