### Regularization

Factor in model complexity when calculating error:

Minimize: loss(DataModel)+complexity(Model)

first part aims for low training error

optimal model complexity is data-dependent, so requires hyperparameter tuning.

#### Regularization

- Early stopping
- Parameter norm penalties
  - L1
  - L2
  - max-norm regularization
- Dataset augmentation
- Noise Robustness
- Sparse representations
- ...

How to measure model complexity?

![](http://latex.codecogs.com/gif.latex?%5Cinline%20%5Cleft%20%5C%7C%20w%20%5Cright%20%5C%7C_2%20%3D%20%28w_0%5E2%20&plus;w_1%5E2%20&plus;%20...%20&plus;w_n%5E2%29%5E%5Cfrac%7B1%7D%7B2%7D)

![](http://latex.codecogs.com/gif.latex?%5Cinline%20%5Cleft%20%5C%7C%20w%20%5Cright%20%5C%7C_1%20%3D%20%28%5Cleft%20%7C%20w_0%20%5Cright%20%7C&plus;%5Cleft%20%7C%20w_1%20%5Cright%20%7C&plus;...&plus;%5Cleft%20%7C%20w_n%20%5Cright%20%7C%29)

