##### ML两大基本问题：

回归问题 Regression

分类问题 Classification

##### What is ML?

根据已知的数据，学习出一个数学函数 
$$
f(x_1,x_2,...x_n) =y
$$
使其有更强的预测能力。

**理论分类/知识领域，三大类包括**：传统的监督学习supervised learning; 深度学习 deep learning; 强化学习 reinforcement learning.

不要做调包侠。

**Inductive bias: 归纳偏好**，是一个算法的在学习过程中对某种类型假设的偏好，与 **特征选择 feature selection** 相似但不同，后者是基于对 training set 的分析进行的。任何一个有效的算法一定会有一个 inductive bias, otherwise might have overfitting. Bias 确立的原则是 **Occam's Razor**: 假如多个假设与观察一致，则选择最简单的那个，“简单” in terms of 更简单的公式表达，更简单的图 ，etc. In real world, 算法的归纳偏好是否与问题本身匹配，大多数时候决定了算法能否取得更好的性能。

**No Free Lunch Theorem:**  No algorithm is the best.

手推之后发现，任意两个模型之间的期望值是相等的，无论A有多聪明，B有多笨拙。

这个定理有一个重要前提： 所有“问题”出现的机会相同、或所有问题同等重要。





---

To Read List:

[达观杯_比赛简介](https://blog.csdn.net/Datawhale/article/details/82634235)

["达观杯" 文本智能处理挑战赛——简介篇 ](https://mp.weixin.qq.com/s?__biz=MzU3Nzg4Mjg3Nw==&mid=2247483677&idx=1&sn=88db4a9728dbbd05a97ea63fc8834720&chksm=fd7c9e8fca0b17999e726930f29688b701b726e6990c8afafd094c2a2ded0ab2dd67d56b7aee&mpshare=1&scene=1&srcid=&key=a275743a4180eb54f611990a25ccced948d1a81934f14688438e3f4582ac4807f29f896e6420db339639d37ce08e5e8beb9063ea5004112d132e77a474af863bc2493319c131b20a8cbacc9fbccf58b2&ascene=1&uin=NTI0ODE4NDgw&devicetype=Windows+10&version=62060833&lang=en&pass_ticket=TWp%2FeQyEeJyvSd63MTZPd%2FTOtlgf1QkiCJTD27ZQ7zl3kRDl9zwcApLSGN583LSV)

[《数学之美》发布会吴军精彩演讲"怎样才能不山寨"](https://www.youtube.com/watch?v=x0zTN8aSeYs)