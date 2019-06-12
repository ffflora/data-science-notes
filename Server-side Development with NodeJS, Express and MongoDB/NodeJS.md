#### Node Modules

##### 3 kinds of Node

- file-based Module
- core Modules
  - part of core Node
  - path, fs, os, util...
- external Node modules
  - 3th party modules,
  - installed using NPM
  - node_modules folder in your Node application

##### Using Node Modules

By using require function

File-based: require('./module_name')

core/External: require('module_name')

###### Useful command line:

- in the dir, `npm start`  
- `atom .` open the current `json` file. 

##### Networking Essentials 

HTTP verbs:

HEAD, GET, POST, PUT, DELETE, TRACE, OPTION, CONNECT

​				communicate

Browser <==========> Web Server 

##### Node HTTP Module

Using the module: 

​	`const http = require('http');`

Creating a server: 

​	`const server = http.createServer(function(req,res){...});`

Starting the server:

​	`server.listen(port,...);`

Incoming request message info. available thru  the first parameter "req"

​	`req.headers`, `req.body`, ...

 Response msg is constructed on the second param "res"

​	`res.setHeader...`

​	`res.statusCode = 200;` 

​	`res.write('Hello World!');` 

​	...

##### Node Path Module

​	`const  path = require('path');`

​	`path.resolve('./public'+fileURL);`

​	`path.extname(filePath);`

##### Node fs Module (file system)

​	`const fs = require('fs');`

##### Using Postman

