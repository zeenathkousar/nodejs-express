const express =require('express');
const app=express();
// console.log(__dirname);\
const path=require('path')

const publicPath=path.join(__dirname,'public');
console.log(publicPath)

// app.use(express.static(publicPath))


app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})



app.listen(3000,()=>{
    console.log('server running')
})