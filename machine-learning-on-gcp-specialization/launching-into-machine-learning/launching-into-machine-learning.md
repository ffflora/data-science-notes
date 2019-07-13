#### Supervised Learning

Supervised learning implies the data is already **labeled**.

We are learning from past examples to predict future values.

Two problems: Regression and classification.

If the data is not labeled, have to **cluster** the data to find some interesting features first. (can't apply supervised learning here.)



#### Regression and Classification

Regression: 

​	For predicting continuous label values.

Classification:  

​	For predicting categorical label values. To create **decision boundaries**. 

​	Minimize the error between  predicted class and labels class. Usually done by **cross entropy**.

​	([简单的交叉熵损失函数，你真的懂了吗？](https://zhuanlan.zhihu.com/p/38241764))

​	Can be embedded into regression problem.

### Brief Points of most used models

#### Linear Regression

Linear regression does have a closed form solution, but it is not practical for **large datasets**.

![](http://latex.codecogs.com/gif.latex?%5Cunderset%7Bweight%5C%3Avector%7D%7Bw%7D%20%3D%20%5Cunderset%7BGram%5C%3Amatrix%7D%7B%28X%5ETX%29%7D%5E%7B-1%7D%5Cunderset%7BMoment%5C%3Amatrix%7D%7BX%5ETy%7D)

Q: What is a hyperparameter that helps determine gradient descent's step size along the hypersurface to hopefully speed up convergence?

A: Learning rate. 

#### Perceptron

[感知机 Perceptron](https://blog.csdn.net/Dream_angel_Z/article/details/48915561)

[怎么理解感知机 - 知乎](https://www.zhihu.com/question/21636295)

The perceptron was a computational model of a neuron.

#### Neural Networks: 

a multi-layer perceptron. 

In the Neuron system: 3 steps:

​	weighted sum, sigmoid function, hidden inputs.

Common activation functions: 

​	linear =*f(x)=x*

​	Sigmoid = ![](http://latex.codecogs.com/gif.latex?%5Csigma%28x%29%20%3D%20%5Cfrac%7B1%7D%7B1&plus;e%5E%7B-x%7D%7D)

​	![](http://latex.codecogs.com/gif.latex?tanh%28x%29%20%3D%20%5Cfrac%7B2%7D%7B1&plus;e%5E%7B-2x%7D%7D-1)

​	Above functions are diff'ble everyhere, monotone, smooth.

​	![](http://latex.codecogs.com/gif.latex?ReLU%20%3D%20f%28x%29%20%3D%20%5Cbegin%7BBmatrix%7D%200%20%26%20for%5C%3Ax%3C0%5C%5C%20x%26%20for%20%5C%3A%20x%5Cgeq%200%20%5Cend%7BBmatrix%7D)

#### Decision Trees:

use both for regression and classification.

each node is consist of linear classifier of one feature

#### SVM/ Kernel Margin

use **hinge** loss function (for dataset is linearly separable)

otherwise use kernel method, to transform the input space into a more usable (higher dim) feature space. (more neurons per layer in NN also can map a higher dim vector space.)

#### Random Forest

Ensemble learning: strong learner from many weak learners.















