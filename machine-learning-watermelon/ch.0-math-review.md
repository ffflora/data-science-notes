## Linear Algebra

1. 为什么向量化会更快？

   Take linear regression as an example, y=wx+b, in reality the dimension of x could be thousands, If we use the traditional way to compute, It will be a disaster in terms of computation. In the flip side, if use matrix to represent the data points, **we map the algebra to the vector space ，and use matrix to represent the dataset**, which makes the computation faster.

2. rank 

   一个矩阵的秩（rank）越大，说明该矩阵包含的信息越多。矩阵的秩越大，说明构成矩阵的列向量组中的线性无关向量越多。从机器学习的角度来说，矩阵中的每个列向量通常代表了一个特征，无关的列向量越多，列向量所张成的空间维度越高，对构建模型产生影响的特征数就会越多，所含的信息就会越丰富，模型的复杂度也会随之上升。

3. norm 

   By definition, a vector norm is a measure for the size of a vector. 