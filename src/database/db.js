const mongoose = require("mongoose");
const connectTodb = () => {
  mongoose.connect(
    "mongodb+srv://root:admin@todolist.fgy5kvo.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(()=>{
        console.log('Mongo Conectado!')
  }).catch((err)=> console.log(err))
};
module.exports = connectTodb;
