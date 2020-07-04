const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('ok')
})



let userSchema = new mongoose.Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  age: Number,
  sex: { type: Number, default: 0 }

});

var User = mongoose.model('user', userSchema);//(集合名,schema对象)
//增
User.insertMany({ us: 'mjt', ps: '123', age: 16 })
  .then((data) => {
    console.log(`${data}插入成功`)
  })
  .catch((err) => {
    console.log(err)
  })
//查
// User.find({age:18})
//   .then((data) => {
//     console.log(`${data}查询成功`)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//删
// User.remove()
//   .then((data) => {
//     console.log(`${data}删除`)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   //改
//   User.update({age:18})
//   .then((data) => {
//     console.log(`${data}查询成功`)
//   })
//   .catch((err) => {
//     console.log(err)
//   })