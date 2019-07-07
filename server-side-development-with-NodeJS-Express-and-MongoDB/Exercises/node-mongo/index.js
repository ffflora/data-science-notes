const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url,(err,client) =>{
    assert.equal(err,null); //check if err is null
    console.log('Connected corrected to the server.');

    const db = client.db(dbname);
    dboper.insertDocument(db,{name:'ffflora',description:'test123'},'dishes',(result)=>{ // the funcs are mested inside this.
        console.log('Insert document:\n', result.ops);
        dboper.findDocuments(db,'dishes',(docs)=>{
          console.log('Found Documents:\n ',docs);
            dboper.updateDocument(db,{name:'ffflora'},{description:'Updated Test'},'dishes',(result)=>{
                console.log('Updated document: \n',result.result);
                dboper.findDocuments(db,'dishes',(docs)=>{
                  console.log('Found Documents:\n',docs);
                  db.dropCollection('dishes',(result)=>{
                    console.log('Dropped:',result);
                    client.close()
                  });
              });
          });
        });

    });
});
