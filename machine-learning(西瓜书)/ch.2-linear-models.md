### Multiclass SVM Loss Function Implementation:

```python
def L_i_vectorized(x,y,W):
    scores = W.dot(x)
    margins = np.maximum(0,scores-scores[y]+1)
    margins[y]=0
    loss_i = np.sum(margins)
    return loss_i
```

---

### [8. Loss Functions for Regression and Classification](https://www.youtube.com/watch?v=1oi_Mwozj5w&t=119s)

### Robustness:  

Refers to how affected a learning algorithm is by outliers.

### The Score Function:

Def: The value $f(x)$ is called score for the input x. Real-valued prediction function $ f: X \rightarrow R $

### Margin:

the margin for predicted score $\hat{y}$ and true class $y \in {-1,1} $ is $y\hat{y}$ 

Margin is a measure of how **correct** we are.

Most Regression loss functions are **distance-based** loss; and most classification losses depend only on margin, thus called **margin-based** loss.

---

### 3.3 Logistic Regression

#### 广义线性模型：Generalized Linear Model

- exponential family distribution

  - 常见的这种分布有 Bernoulli Distribution, Normal distribution 
  - $p(y; \eta ) =b(y)exp(\eta^TT(y)-a(\eta))$

- Generalized linear model 的三条假设

  1. 在给定 $x$ 的条件下，假设随机变量 $y$ follows exponential Family distribution;
  2. 在给定 $x$ 的条件下，我们的目标是得到一个模型 $h(x)$  that could predict the value of $T(y)$;

  3. Assume that the $\eta$ and $x$ are linearly related, that is,

     ​	$\eta = w^Tx$

  用这三条假设对 logistic regression 进行建模。

#### 极大似然估计法 MLM

假设总体的概率密度函数为 $f(y,w_1,w_2,...w_k)$, $y_1,y_2,...,y_m$ 为总体中抽出的样本。因为$y_i$ are independent and in the same distribution, therefore 

​		$$L(y_1,...,y_m;w_1,...w_k) =\prod_{i=1}^m f(y_i,w_1,...w_k) = L(w)$$ 

其中 $w_1,...w_k$ 是固定但未知的参数。当我们观测到一组样本观测值 $y_1,...y_m$ 时，要去估计未知参数，一种直观的想法就是哪一组参数值是现在的样本观测值出现的概率最大**（就是等号的中间部分**），哪一组就是真正的参数，我们就用它作为参数的估计值。 

$L(w)$ 称为似然函数，这里就相当于求 $L(w)$ 的最大值。有遇对数函数是单调递增函数，所以等号分别取对数 $ln$, 结果也与 $L(w) $ 有相同的最大值点。在许多情况下，$lnL(w)$ 的最大值的计算比较简单（从累乘变成累加），所以就进而转换为求 $lnL(w)$ 的最大值点，叫做对数近似函数。

具体过程在手算 notes.

---

### LDA

LDA is like PCA, but it focuses on **maximizing the seperatibility** among known categories.

Similarities of PCA and LDA

Both rank the new axes in order of importance.

- PC1(the first new axes that PCA creates) accounts for the most variation **in the data**
  - PC2 does the second best job...
- LD1 accounts for the most variation **between the categories.**
  - LD2 does the second best job...
- Both can let you dig and see which genes are driving the new axes.

参考: [StatQuest: Linear Discriminant Analysis (LDA) clearly explained.](https://www.youtube.com/watch?v=azXCzI57Yfc)

---

### Class-imbalanced

Why is this bad?

- more costly of missing minority class than missing a majority class
- the performance of ml algorithms is typically evaluated using predictive accuracy



**Data-level approach** 

- process: feature extraction/engineering -> imputation -> **resampling** -> cross-validation -> grid search -> feature selection
- Models: ~~GaussianNB~~, RandomForestClassifier,LogisticRegression,SVM
- Keep calm and clean your data.
- **SMOTE**: Synthetic Minority Over-sampling Techniques
- **class_weight** is your friend

**Algorithm-level approach**

- process: feature extraction/engineering -> imputation -> **cost-sensitive learning** -> cross-validation -> grid search -> feature selection

- the goal is to minimize the cost of misclassification

- **class_weight** is still your friend.

- **AdaBoost**: Adaptive Boosting 

  

----

### To Read List

Some mathematics notes from Stanford's machine learning course. 	

-  [Probability](http://cs229.stanford.edu/section/cs229-prob.pdf) 	  		

-  [Linear algebra](http://cs229.stanford.edu/section/cs229-linalg.pdf)  	

-  [Optimization1](http://cs229.stanford.edu/section/cs229-cvxopt.pdf)  	  
-  [Optimization2](http://cs229.stanford.edu/section/cs229-cvxopt2.pdf)  	
- [CS229 Machine Learning Notes Andrew Ng](http://cs229.stanford.edu/notes/cs229-notes-all/)

---

##### Remark: Greek letters in Latex

![Greek Letters in Latex](http://web.ift.uib.no/Teori/KURS/WRK/TeX/t1.gif)