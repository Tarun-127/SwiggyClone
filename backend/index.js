const express = require ('express');
const DotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require ('./routes/vendorRoutes');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const path = require('path');
const cors = require('cors');
const bodyParser =  require('body-parser');

DotEnv.config();
app.use(cors());


const app = express()
const PORT = process.env.PORT || 4001;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected Successfully!"))
.catch((error)=>console.log(error))

app.use(bodyParser.json())
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

//const PORT = 4001;

app.listen (PORT,()=>{
            console.log(`server started and run in ${PORT}`)
})
app.use('/',(req,res)=>{
    res.send("<h1>welcome to swiggy");
})