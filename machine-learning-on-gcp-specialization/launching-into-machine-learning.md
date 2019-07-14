#### Supervised Learning

Supervised learning implies the data is already **labeled**.

We are learning from past examples to predict future values.

Two problems: Regression and classification.

If the data is not labeled, have to **cluster** the data to find some interesting features first. (can't apply supervised learning here.)



#### Regression and Classification

Regression: 

​	For predicting continuous label values.

Classification:  

​	For predicting categorical label values. To create **decision boundaries**. 

​	Minimize the error between  predicted class and labels class. Usually done by **cross entropy**.

​	([简单的交叉熵损失函数，你真的懂了吗？](https://zhuanlan.zhihu.com/p/38241764))

​	Can be embedded into regression problem.

### Brief Points of most used models

#### Linear Regression

Linear regression does have a closed form solution, but it is not practical for **large datasets**.

![](http://latex.codecogs.com/gif.latex?%5Cunderset%7Bweight%5C%3Avector%7D%7Bw%7D%20%3D%20%5Cunderset%7BGram%5C%3Amatrix%7D%7B%28X%5ETX%29%7D%5E%7B-1%7D%5Cunderset%7BMoment%5C%3Amatrix%7D%7BX%5ETy%7D)

Q: What is a hyperparameter that helps determine gradient descent's step size along the hypersurface to hopefully speed up convergence?

A: Learning rate. 

#### Perceptron

[感知机 Perceptron](https://blog.csdn.net/Dream_angel_Z/article/details/48915561)

[怎么理解感知机 - 知乎](https://www.zhihu.com/question/21636295)

The perceptron was a computational model of a neuron.

#### Neural Networks: 

a multi-layer perceptron. 

In the Neuron system: 3 steps:

​	weighted sum, sigmoid function, hidden inputs.

Common activation functions: 

​	linear =*f(x)=x*

​	Sigmoid = ![](http://latex.codecogs.com/gif.latex?%5Csigma%28x%29%20%3D%20%5Cfrac%7B1%7D%7B1&plus;e%5E%7B-x%7D%7D)

​	![](http://latex.codecogs.com/gif.latex?tanh%28x%29%20%3D%20%5Cfrac%7B2%7D%7B1&plus;e%5E%7B-2x%7D%7D-1)

​	Above functions are diff'ble everyhere, monotone, smooth.

​	![](http://latex.codecogs.com/gif.latex?ReLU%20%3D%20f%28x%29%20%3D%20%5Cbegin%7BBmatrix%7D%200%20%26%20for%5C%3Ax%3C0%5C%5C%20x%26%20for%20%5C%3A%20x%5Cgeq%200%20%5Cend%7BBmatrix%7D)

#### Decision Trees:

use both for regression and classification.

each node is consist of linear classifier of one feature

#### SVM/ Kernel Margin

use **hinge** loss function (for dataset is linearly separable)

otherwise use kernel method, to transform the input space into a more usable (higher dim) feature space. (more neurons per layer in NN also can map a higher dim vector space.)

#### Random Forest

Ensemble learning: strong learner from many weak learners.

---

### Optimization

ML models are math functions consist of parameters and hyperparameter.

Linear models have 2 types of params: bias and weight.

MSE: mean square Error, it tells us how close regression line is to the set of points to it.

RMSE: root mean square error. Good for regression. It doesn't work as well for classification. It is a better measure for the goodness of fit

Cross Entropy Loss(Log loss): commonly used for classification: bad classification are penalized appropriately. 

#### Gradient Descent

learning rate = step size

calculate slope to set direction for the learning rate.

#### Troubleshooting a Loss Curve

A typical loss curve

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\loss-ideal.png)

Bad loss curve (step size too big)

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\bad-loss.png)

Hyperparameter tuning



#### ML Model Pitfalls

loss surface may have more than one minima

things to check/change when model training slow: 

	1. calculate derivative on fewer data points
 	2. take a step
 	3. check loss
 	4. #of data points
 	5. #of parameters
 	6. frequency when we check the loss 

training on the full dataset every step is expensive. **Mini-batching(usually 10 - 1000 examples)** reduces costs while preserving quality.

simplest NN is linear regression model.

#### Performance Metrics

'Inappropriate minimum. '

performance metrics allow us to measure what matters:

| Loss Functions                         | Performance Metrics                  |
| :------------------------------------- | ------------------------------------ |
| During training                        | After training                       |
| Harder to understand                   | Easier to understand                 |
| Indirectly connected to business goals | Directly connected to business goals |

Confusion matrix: assess classification model's performance.

![](https://www.researchgate.net/profile/Andreas_Fallgatter/publication/230830197/figure/fig1/AS:267609178374146@1440814408186/Confusion-matrix-summarizing-the-errors-made-by-the-classifier-on-the-test-set.png)



### Generalization

if you have a large dataset, use a held-out test dataset;

small dataset, use cross-validation 



##  Using ==HASH== of date to ==split the data== 

```sql
compute_alpha = """
#standardSQL
SELECT 
   SAFE_DIVIDE(SUM(arrival_delay * departure_delay), SUM(departure_delay * departure_delay)) AS alpha
FROM
  `bigquery-samples.airline_ontime_data.flights`
WHERE
  departure_airport = 'DEN' AND arrival_airport = 'LAX'
  AND MOD(ABS(FARM_FINGERPRINT(date)), 10) < 8
"""
results = bigquery.Client().query(compute_alpha).to_dataframe()
alpha = results['alpha'][0]
print(alpha)
```



```
0.9758039143620403
```

We  can now use the alpha to compute RMSE. Because the alpha value is  repeatable, we don't need to worry that the alpha in the compute_rmse  will be different from the alpha computed in the compute_alpha.



```
compute_rmse = """
#standardSQL
SELECT
  IF(MOD(ABS(FARM_FINGERPRINT(date)), 10) < 8, 'train', 'eval') AS dataset,
  SQRT(AVG((arrival_delay - ALPHA * departure_delay)*(arrival_delay - ALPHA * departure_delay))) AS rmse,
  COUNT(arrival_delay) AS num_flights
FROM
    `bigquery-samples.airline_ontime_data.flights`
WHERE
    departure_airport = 'DEN'
    AND arrival_airport = 'LAX'
GROUP BY
  dataset
"""
print(bigquery.Client().query(compute_rmse.replace('ALPHA', str(alpha))).to_dataframe().head())
```



```
  dataset       rmse  num_flights
0    eval  12.764691        15671
1   train  13.160713        64018
```

Note also that the RMSE on the evaluation dataset more from the RMSE on the  training dataset when we do the split correctly.  This should be  expected; in the RAND() case, there was leakage between training and  evaluation datasets, because there is high correlation between flights  on the same day.

 This is one of the biggest dangers with doing machine learning splits the wrong way --  **you will develop a false sense of confidence in how good your model is!** 

---

#### Benchmark

Benchmark are important to know what error metric is reasonable and/or great for the problem.

The benchmark helps to set a goal for a good value for the error metric.

Often a simple heuristic rule can function as a good benchmark.















GCP services I've tried so far:

cloud service, datalab, C2, pre-trained API, BigQuery, 

```
%bash
git clone https://github.com/GoogleCloudPlatform/training-data-analyst
rm -rf training-data-analyst/.git
```