### 拉格朗日乘子法 Lagrange Method:

把有约束优化问题转变为等价的无约束优化问题。

### SMO

重点

1. 每次迭代过程仅优化两个参数，有封闭解

  		2. 启发式寻找每次优化的两个参数，有效减少迭代次数。

思路：

1.  设置α列表，并设初始值为0（每个数据点对应一个αi）
2.  选取两个待优化变量（α1, α2）
3.  **解释地求解**  两个变量的最优解 α1* , α2*, 并更新至 α 的列表中
4. 检查更新后的 α 列表是否在某个精度范围内满足 KKT 条件(make sure the algorithm will stop properly)，若不满足，返回（2）

不管 dataset 多大，这个方法都可以用。











知识点：

1. Lagrange multiplier

   lm 和 svm 的关系/应用

2. **karush-kuhn-Tucker KKT**

   [L1.6 - Inequality-constrained optimization - first-order conditions (KKT conditions)](https://www.youtube.com/watch?v=Nbnd8KxRHGU)

3. 二次规划 quadratic programming

4. semi0definite programming 半正定规划

5. gradient descent 梯度下降法

6. dual problem 对偶问题

[Lecture 12.1 —  Support Vector Machines | Optimization Objective — [ Machine Learning | Andrew Ng]](https://www.youtube.com/watch?v=hCOIMkcsm_g)

​	

