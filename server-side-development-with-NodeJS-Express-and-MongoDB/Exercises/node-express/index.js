const express = require('express');
const http = require('http');
const morgan = require('morgan'); //log middleware
const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser'); //middleware, 对 POST 的请求进行解析
const dishRouter = require('./routes/dishRouter');//file base node
const promoRouter = require('./routes/promoRouter');//file base node
const leaderRouter = require('./routes/leaderRouter');//file base node
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);// mount the router at an endpoint
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);


//any of the /dishes will be handled by dishRouter

// app.get('/dishes/:dishId',(req,res,next)=>{
//     res.end('Will send the dish '+req.params.dishId+' to you!');
// });
// app.post('/dishes/:dishId',(req,res,next)=>{ //I can't create any new dishes from the client  side?
//   res.statusCode = 403;
//   res.end('POST Operation not supported on /dishes/ '+ req.params.dishId);
// });
// app.put('/dishes/:dishId',(req,res,next)=>{
//     res.write('Updating the dish:'+ req.params.dishId + '\n');
//     res.end('Will update the dish: ' + req.body.name +' with the details '+ req.body.description);
// });
// app.delete('/dishes/:dishId',(req,res,next)=>{ //this is dangerous, supposed only operated by authorized people
//     res.end('Delete the dish '+ req.params.dishId );
// });
app.use(express.static(__dirname+'/public'));//??
app.use((req,res,next)=>{
    //console.log(req.headers); //morgan will log sufficient info.
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></h1>');
});

const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});
