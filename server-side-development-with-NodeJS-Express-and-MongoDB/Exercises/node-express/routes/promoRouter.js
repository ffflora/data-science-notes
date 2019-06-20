const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')//could chain a lot methods down there, and remove the '/promotions' thing, becaues it is already represented by the '/' in the route() method

.all((req,res,next)=>{ //middleware
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the promotions to you!');
})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+req.body.name + ' with details: '+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Operation not supported on /promotions');
})
.delete((req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
    res.end('Delete all the promotions.');
});

//这个/ suppostly 是前面的那个 slide
promoRouter.route('/:promoID')

.all((req,res,next)=>{ //middleware
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the promotion '+ req.params.promoID + ' to you');
})
.post((req,res,next)=>{
    res.end('The operation is not valid.');
})
.put((req,res,next)=>{
    res.end('Updating the promotion' + req.body.name+ ' with the description '+ req.body.description);
})
.delete((req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
    res.end('Delete the promotion '+ req.params.promoID);
});


//the promoRouter is defined inside this file, and we need to export it.
module.exports = promoRouter;
