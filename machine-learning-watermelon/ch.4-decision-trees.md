## 决策树 Decision Tree

#### Definitions:

**信息熵** information entropy

熵是度量样本级和纯度最常用的一种指标，代表一个系统中蕴含多少信息量，信息量越大代表一个系统**不确定性**就越大，就存在越多的可能性，即**信息熵越大**。

decision tree 会选择最大的信息增益 Information gain 对 node 进行划分（ID3），容易 overfitting.

---

[Machine learning - Decision trees](https://www.youtube.com/watch?v=-dCtJjlEEgM) √



Need to understand a tree first before trying to understand a forest.

决策树适合分析离散数据，如果是连续数据要先转成离散数据再分析。

三种算法：

1. ID3 倾向于首先选择因子数较多的变量（就是分叉较多的变量）。ID3 有许多需要改进的地方：

- C4.5 是 ID3 的改进：多加了一个增益率。它解决了 ID3 算法的几个主要问题，但仍有优化的空间：
- 采用了信息增益大的特征优先建立 node. 但是后期被人发现，在相同条件下，取值比较多的特征比取值少的特征信息增益大。比如有一个变量有2个值，各为1/2， 另一个变量为3个值，各为1/3，它们都是完全不确定的变量，但是取三个值的比取两个值的IG大。（C4.5会解决这个问题）
- ID3 没有考虑缺失值的情况。
- 没有考虑 overfitting 的问题。

C4.5 是 ID3 的改进：多加了一个增益率。它解决了 ID3 算法的几个主要问题，但仍有优化的空间：

- Decision Tree very easily get overfitting, thus the learned tree 需要进行剪枝。C4.5 的剪枝思路主要有两种：预剪枝（生成决策树的时候就决定是否剪枝）和后剪枝（先生成树，再通过 cross validation 进行剪枝。
- C4.5 生成的是多叉树，that is, one parent could have multiple nodes. But most of time **binary tree** is more **efficient** than 多叉树。
- C4.5 could only use for **classification**.
- C4.5 使用了熵模型，有大量的 log computation. 如果是连续值的话还有大量的 sorting. 如果能把模型简化并且减少运算强度，但又不牺牲准确率，会更优化此算法。

**CART** 目前用的最多。

### 避免 overfitting:（剪枝，prune）

- Stop splitting when not statistically significant
- Grow, then post-prune
  - based on validation set. (post-prune 是自下而上的，需要在完全生成决策树之后进行，very time consuming.)
- Sub-tree replacement pruning : pre-pruning.
  - Start with the node with the biggest info gain
  - check the accuracy rate  on the testing set.
  - if the performance is not better then remove the node.

---

## Random Forests

[Random Forest](https://www.youtube.com/watch?v=3kYujfDgmNk&list=PLE6Wd9FR--EdyJ5lbFl8UuGjecvVw66F6&index=12) √ 

### Build a random tree

Randomness is a good thing. Two sources of randomness: data and features(split).

RT take trees and sum them and divide by the number of trees.  (**bagging trees** )

it is actually ensemble learning method for classification.

All trees are trained independently (and possibly in parallel). During testing, each test point *v* is simultaneously pushed through all trees (starting at the root) until it reaches the corresponding leaves. 

output is all the trees.

