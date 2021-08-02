const mongoose = require('mongoose');
//buguserreg is name of collections
mongoose.connect('mongodb://localhost:27017/bugusereg',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=>{
    console.log('mongoose connected');
}).catch((e)=>{
    console.log(e);
})