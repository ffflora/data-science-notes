### 5.1 Neuron Model 

MP Neuron Model: Neuron receives input signal from *n* other neurons, and these input signals pass on the information by the **weighted connection**, the total input value that the neuron received would need to compare to the **threshold** of the neuron, then dealt by **activation function** to get output. *Sgn(x)* function is an ideal activation function, but since it is discontinuous and not smooth, so ***Sigmoid*** function is usually a good choice of activation function.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Signum_function.svg/1200px-Signum_function.svg.png)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Logistic-curve.svg/1200px-Logistic-curve.svg.png)

If we connect many neurons like these, we have a neuron network.

### 5.2 Perceptron

The geometric meaning of perceptron:

![](https://raw.githubusercontent.com/ffflora/data-science-notes/master/archived-pics/open-course/perceptron.png)

(The separating hyperplane separates the data to two sets: positive and negative.)

The learning strategy:

Assume that the dataset is **linearly separable**, the learning object of perception is to get a hyperplane that could separate the positive data and negative data from the dataset. In order to get such a hyperplane S, which w and b as the params for the perception, we need a learning strategy, that is, **to define a loss function and minimize the loss function**. The natural selection of a loss function is the total sum of misclassified points.  But the loss function b is not a continuous differentiable function about w and b, therefore it is not easy to optimize it. Thus, the perception use the **distance that misclassified point to the hyperplane** as the  loss function .

（假设训练数据集是线性可分的，感知机学习的目标是求得一个能够将训练集正实例点和负实例点完全正确分开的超平面。为了找出这样的超平面S，即感知机模型参数 *w* 和 *b*, 需要确定一个学习策略，即定义损失函数并损失函数极小化。损失函数的一个自然选择是误分类点的总数。但是，这样的损失函数b不是参数 *w* 和 *b* 的连续可导函数，不易优化，所以感知机采用的损失函数为**误分类点到超平面的总距离**。）

### Local minimum and global minimum

局部极小，全局最小

通常用以下策略跳出局部极小，进而接近全局最小：

- 以多组不同参数初始化NN，训练后选出最小 loss 的解作为最终参数。
- 模拟退火
- 随机梯度下降
- 遗传算法

爬山算法：兔子朝着比现在高的地方跳去。它找到了不远处的最高山峰。但是这座山不一定是珠穆朗玛峰。这就是爬山算法，它不能保证局部最优值就是全局最优值。

**模拟退火**：兔子喝醉了。它随机地跳了很长时间。这期间，它可能走向高处，也可能踏入平地。但是它渐渐清醒了并朝最高方向跳去。



[试述卷积神经网络的基本原理★](https://tkhajwjy.github.io/2018/11/24/CNN/)
