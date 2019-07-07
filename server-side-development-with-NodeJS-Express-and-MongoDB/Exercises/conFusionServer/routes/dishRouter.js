const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')//could chain a lot methods down there, and remove the '/dishes' thing, becaues it is already represented by the '/' in the route() method

.all((req,res,next)=>{ //middleware
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!');
})
.post((req,res,next)=>{
    res.end('Will add the dish: '+req.body.name + ' with details: '+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Operation not supported on /dishes');
})
.delete((req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
    res.end('Delete all the dishes.');
});

//这个/ suppostly 是前面的那个 slide
dishRouter.route('/:dishId')

.all((req,res,next)=>{ //middleware
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the dish '+ req.params.dishId + ' to you');
})
.post((req,res,next)=>{
    res.end('The operation is not valid.');
})
.put((req,res,next)=>{
    res.end('Updating the dish' + req.body.name+ ' with the description '+ req.body.description);
})
.delete((req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
    res.end('Delete the dish '+ req.params.dishId);
});


//the dishRouter is defined inside this file, and we need to export it.
module.exports = dishRouter;
