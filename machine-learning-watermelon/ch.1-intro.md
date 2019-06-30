#### ML两大基本问题：

回归问题 Regression

分类问题 Classification

#### What is ML?

根据已知的数据，学习出一个数学函数 

![](http://latex.codecogs.com/gif.latex?f%28x_1%2Cx_2%2C...x_n%29%20%3Dy)

使其有更强的预测能力。

**理论分类/知识领域，三大类包括**：传统的监督学习supervised learning; 深度学习 deep learning; 强化学习 reinforcement learning.

不要做调包侠。

**Inductive bias: 归纳偏好**，是一个算法的在学习过程中对某种类型假设的偏好，与 **特征选择 feature selection** 相似但不同，后者是基于对 training set 的分析进行的。任何一个有效的算法一定会有一个 inductive bias, otherwise might have overfitting. Bias 确立的原则是 **Occam's Razor**: 假如多个假设与观察一致，则选择最简单的那个，“简单” in terms of 更简单的公式表达，更简单的图 ，etc. In real world, 算法的归纳偏好是否与问题本身匹配，大多数时候决定了算法能否取得更好的性能。

**No Free Lunch Theorem:**  No algorithm is the best.

手推之后发现，任意两个模型之间的期望值是相等的，无论A有多聪明，B有多笨拙。

这个定理有一个重要前提： 所有“问题”出现的机会相同、或所有问题同等重要。



---

### Talks:

[《数学之美》发布会吴军精彩演讲"怎样才能不山寨"](https://www.youtube.com/watch?v=x0zTN8aSeYs)