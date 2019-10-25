const mongoose=require('mongoose');
const {urlMongo}=require('.password');


const URI = 'mongodb://localhost:27017/apiTienda';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));


    module.exports = mongoose;