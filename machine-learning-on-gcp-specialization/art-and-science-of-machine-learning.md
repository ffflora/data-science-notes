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

#### Learning Rate and Batch Size (2 important hyperparameters)

**learning rate** controls the size of step in the weight space.

if too small, training takes long time.

if too large, training bounces around.

default lr is 0.2 or 1/sqrt(num_features): this assumes num of feature is small

**batch size** controls the number of samples that gradient is calculated on.

if bs too small, training will bounce around

if bs too large, training will take a long time

40-100 tends to be a good size of batch size

shuffling the sample.

#### Optimization

- GradientDescent: traditional approach, typically implemented stochastically i.e., with batches
- Momentum: reduces learning rate when gradient is small
- AdaGrad: give frequently occuring features low learning rate
- AdaDelta: improves AdaGrad by avoiding reducing LR to zero
- Adam: AdaGrad with a bunch of fixes
- Ftrl: follow the regularized learder: works well on wide models, which is a good defaults for DNN and linear models
- ...



### Hyperparameter Tuning 

how to use could ML enginee  for hyperparamter tuning:

1. make the hyperparameters a command-line argument. 

2. ensure the outputs don't clobber each other. 

3. supply those hyperparameters to the training job.



### Neural Networks

