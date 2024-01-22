module.exports= middle=(req,res,next)=>{
    if(!req.query.age){
        res.send('please provide your age')
    }
    else if( req.query.age < 18){
        res.send('u are under  aged')
    }
    else{
        next();
    }
}