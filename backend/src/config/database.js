const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(() => {
  console.log("MongoDB: Conectado!");
}).catch(() => {
  console.log("MongoDB: Houve um erro ao se conectar!");
});

module.exports = mongoose;