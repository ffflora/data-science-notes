const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')//could chain a lot methods down there, and remove the '/leaders' thing, becaues it is already represented by the '/' in the route() method

.all((req,res,next)=>{ //middleware
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will display all the leaders to you!');
})
.post((req,res,next)=>{
    res.end('Will add the leader: '+req.body.name + ' with details: '+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Operation not supported on /leaders');
})
.delete((req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
    res.end('Delete all the leaders.');
});

//这个/ suppostly 是前面的那个 slide
leaderRouter.route('/:leaderID')

.all((req,res,next)=>{ //middleware
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the leader '+ req.params.leaderID + ' to you');
})
.post((req,res,next)=>{
    res.end('The operation is not valid.');
})
.put((req,res,next)=>{
    res.end('Updating the leader' + req.body.name+ ' with the description '+ req.body.description);
})
.delete((req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
    res.end('Delete the leader '+ req.params.leaderID);
});


//the leaderRouter is defined inside this file, and we need to export it.
module.exports = leaderRouter;
