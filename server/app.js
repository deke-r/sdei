const express=require('express');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();

const cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/test',(req,res)=>{
    res.send(`Server is running on PORT ${process.env.PORT}`)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);    
})