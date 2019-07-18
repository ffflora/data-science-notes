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

TF in **eager mode** makes it easier to try out things, but not recommended for production code.



``` python 
import tensorflow as tf
from tensorflow.contrib.eager.python import tfe					# import tf.eager

tfe.enable_eager_execution()									# call exactly once

x = tf.constant([3,5,7])
y = tf.constanr([1,2,3])
print(x-y)										# if not in eager, will get error 
```



#### Visualize a graph

by `tf.summary.FileWriter`

``` python
import tensorflow as tf

x = tf.constant([3,5,7],name = "x")			# name the tensor and operations
y = tf.constanr([1,2,3],name = "y")
z1 = tf.add(x,y,name='z1')
z2 = x*y
z3 = z2 - z1

with tf.Session() as sess:
    with tf.summary.FileWriter('summaries', sess.graph) as writer:
        a1, a3 = sess.run([z1,z3])		# write the session graph to a summary directory
 
```

to visualize, use **TensorBoard**

```python
from google.datalab.ml import TensorBoard
TensorBoard().start('./summaries')
```

#### Variables

A variable is a tensor whose value is **initialized** and then typically changed as the program runs.

```python
def forward_pass(w,x):
    return tf.matmul(w,x)
def train_loop(x,niter=5):			# create variable, specifying how to init and whether it can be tuned
    with tf.variable_scope('model',reuse=tf.AUTO_REUSE):
        w = tf.get_variable('weights',shape=(1,2), 		# use get_variable
                           initializer = tf.truncated_normal_initializer(),
                           trainable = true)
    preds=[]
    for k in xrange(niter):		# training loop of 5 updates to weights
        preds.append(forward_pass(w,x))
        w = w + 0.1					# gradient update
        return preds
  
with tf.Session() as sess:
    preds = train_loop(tf.constant([[1,2,3],[3,4,5]])) 	#2x3 matrix  #multiply [1,2] x[2,3] yields a [1,3] matrix
    tf.global_variables_initializer().run()		# in session, initialize all variables
    for i in xrange(len(preds)):
        print({}:{}.format(i,preds[i].eval()))
```

placeholder allow you to feed in values, such as by reading from a text file



### Launch AI platform Notebooks

1. login console

2. Navigation Menu -> AI  platforms -> notebooks

3. new instance -> tensorflow 1.0x

4. open jupyter Lab

5. terminal: 

   `git clone https://github.com/GoogleCloudPlatform/training-data-analyst `



### Debugging TensorFlow programs

**shape problems** also happen because of batch size or because you have a scaler when a vector is needed(or vice versa). Can often be fixed using:

1. tf.reshape()
2. tf.expand_dims() // add one dim
3. tf.slice()
4. tf.squeeze() // remove one dim

**Data type problems**

1. can't add float to int: `tf.cast`

#### Debug full programs

1. tf.Print()
2. tfdbg  // `python xyz.py --debug` terminal
3. TensorBoard

**change logging level from WARN**



### Estimator API

tf.estimator.Estimator()

tf.estimator.LinearRegressor

pre-made Estimators

