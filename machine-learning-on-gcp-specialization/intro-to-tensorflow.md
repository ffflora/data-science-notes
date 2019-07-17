Lazy evaluation: work with graphs, sessions and variables. 

A Tensor is an N-dim array of data.

Directed Graph (DAG)

TensorFlow Lite provides on-device inference of ML models 

TensorFlow supports federated learning.

TensorFlow toolkit hierarchy 

![](https://i.pinimg.com/originals/2b/a8/bf/2ba8bfd9ba021bdc1c083146db6350e0.png)



### Lazy Evaluation 



The python API lets you build and run Directed Graph(DAG).

```python
...
c = tf.add(a,b) 								# build - create DAG

session = tf.Session()							# run the graph
numpy_c = session.run(c,feed_dict = ...)		
```

TensorFlow does Lazy Evaluation:  you need to run the **graph** to get the results.

`tf.eager` allows you to execute operations imperatively.

Almost all the code write with TensorFlow are with DAG.

### Graph and Session

Graphs can be processed, compiled, remotely executed, and assigned to devices.

