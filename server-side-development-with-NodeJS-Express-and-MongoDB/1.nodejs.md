### <u>Node Modules</u>

##### 3 kinds of Node

- file-based Module
- core Modules
  - part of core Node
  - path, fs, os, util...
- external Node modules
  - 3th party modules,
  - installed using NPM
  - node_modules folder in your Node application

#### Using Node Modules

By using **require** function

File-based: require('./module_name')

core/External: require('module_name')

#### Useful command line:

- in the dir, `npm start`  
- `atom .` open the current `json` file. 

#### Networking Essentials 

**HTTP verbs:**

HEAD, GET, POST, PUT, DELETE, TRACE, OPTION, CONNECT

Browser <==========> Web Server ( communicate with each other)

#### Node HTTP Module

Using the module: 

​	`const http = require('http');`

Creating a server: 

​	`const server = http.createServer(function(req,res){...});`

**<u>req v.s. res</u>**

req 是包含有关引发事件的 HTTP 请求的信息的对象。相应 req, 使用 res 发送回所需的 HTTP 相应。req 请求对象，res 相应对象。



Starting the server:

​	`server.listen(port,...);`

Incoming request message info available thru  the first parameter **req**

​	`req.headers`, `req.body`, ...

 Response msg is constructed on the second param **res**

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

