const express=require('express');
const path=require('path');

const app=express();

app.set('view engine','ejs')

// app.get('/home',(req,res)=>{
//     const name='zee';
//     res.render('home',{name: name})
// })

app.get('/home',(req,res)=>{
    const user={
        name:'myname',
        class:'123',
        area:'hyd',
        skills:['php','js','jhdjs']
    }
    res.render('home',{user:user})
})

app.listen(3000,()=>{
    console.log('server is started')
})