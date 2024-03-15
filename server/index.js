const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/users.js');

dotenv.config();
//database coonection
connectDB();
const app=express(); 

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors({
    origin:  'http://localhost:3000',
})); 

app.use('/user',userRoutes);
// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

const port=process.env.PORT||5000
//lisen port
app.listen(port,()=>{
    console.log(`Server Running on  port ${process.env.PORT}`.bgCyan.white)
})