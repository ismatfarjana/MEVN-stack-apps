// Below part is coppied from mongo atlas
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.DB_CONNECTION_STRING;
// const client = new MongoClient(uri,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1
//   });
// client.connect(err => {
//   const collection = client.db("tasks").collection("todos");
//   // perform actions on the collection object
//   client.close();
// });

// Below part is from medium tutorial: https://medium.com/bb-tutorials-and-thoughts/how-to-build-nodejs-rest-api-with-express-and-mongodb-fa6e1610ee1b
const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

const connect = () => {
  const uri = process.env.DB_CONNECTION_STRING;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
    useFindAndModify: true,
    useCreateIndex: true,
  });

  mongoose.connection.once('open', async () => {
    logger.info("Connected to MONGO DB!!")
  });

  mongoose.connection.on("error", (err) => {
    logger.error("Error connecting to database  ", err);
  });
}

const disconnect = () => {
  if (!mongoose.connection) return;
  mongoose.disconnect();
  mongoose.once("close", async () => {
    logger.info("Disconnected to MONGO DB!!")
  })
}

module.exports = {
  connect, disconnect
}







