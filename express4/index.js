const express=require('express');
const app=express();

const middle=require('./middleware')

const route=express.Router()

route.use(middle)

// const middle=(req,res,next)=>{
//     // console.log('im a middleware')
//     if(!req.query.age){
//         res.send('please provide age')
//     }
//     else if(req.query.age<18 ){
//         res.end(' u cannot access  this page')
//     }
//     else{
//         next()
//     }

// }

// app.use(middle);

app.get('/',(req,res)=>{
    res.send('home page')
})

route.get('/about',(req,res)=>{
    res.send('about page')
})

route.get('/contact',(req,res)=>{
    res.send('about page')
})

app.use('/',route)


app.listen(3000,(req,res)=>{
    console.log('server started')
})