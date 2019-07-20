### EM Expectation-Maximization EM 算法



为什么需要EM算法？

概率模型有时既含有观测变量，又含有隐变量或者潜在变量。如果概率模型的变量都是观测变量，那么给定数据，可以直接用 MLE 或者 Bayes 估计法估计模型参数。但是，当模型含有隐变量时，就不能简单地使用这些估计方法。 EM 算法就是含有隐变量的概率模型参数的极大似然估计法。

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\open-course\EM-problem.png)

