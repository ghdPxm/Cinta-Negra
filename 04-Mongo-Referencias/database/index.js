const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://gera:TempMon123g0@cintanegra-shard-00-00-qxhj9.mongodb.net:27017,cintanegra-shard-00-01-qxhj9.mongodb.net:27017,cintanegra-shard-00-02-qxhj9.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected'))
  .catch(() => console.log('Error connecting to database...'));
  