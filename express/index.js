// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     console.log(req.query)
//     res.send('hello home ' +req.query.name)
// })

// app.get('/:name',(req,res)=>{
//     res.send('hello '+ req.params.name)
// })

// app.get('/about',(req,res)=>{
//     res.send('hello about ')
// })


// app.listen(3000,()=>{
//     console.log('server running')
// })


//REnder html and json content:
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="username" value="${req.query.name}" />
    <button >Click me</button>
    `)
})

app.get('/json',(req,res)=>{
    res.send({
        name:'zeenath',
        class:'123'
    })

})

app.get('/json2',(req,res)=>{
    res.send([{
        name:'zeenath',
        class:'123'
    },
    {
        name:'helko',
        class:859

    }])

})

//linking page
app.get('/link',(req,res)=>{
    res.send(`
    <h1>Welcome , to link page </h1>
    <a href='/' >Go to home page </a>`
    )

})



app.listen(3000,()=>{
    console.log('server started')
})