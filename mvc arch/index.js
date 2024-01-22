const express=require('express');
const app=express();

const rest = require('./models/restaurant.json');


const userRoute=require('./routes/user');
app.use('/user',userRoute)
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

app.get('/',(req,res)=>{
    res.json(rest)
})

app.listen(3000,()=>{
    console.log('server started')
})