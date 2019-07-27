### Raw Data to Features

Raw data must be mapped into numerical feature vectors

### Good vs Bad Features

1. related to the objective
2. be known at prediction-time
3. be numeric with meaningful magnitude
4. have enough examples
5. bring human insights to the problem.

![](https://www.geckoboard.com/assets/data-fallacy-data-dredging.png)

Don't do data dredging.

some data could be known immediately, some is not **in real time**. **timely manner is important.**

NN are weighing and adding machines, so data better have some numeric meaning.

have at least 5 examples.( way to see if have enough examples: histogram)



### Representing Features

Feature_column: estimator API in tensorflow 

categorical variables should be **one-hot encoded** (sparse columns)

options for **encoding categorical data**:

- if you know the keys beforehand:

  ```python
  tf.feature_column.categorical_column_with_vocabulary_list(...)
  ```

- if your data is already indexed:

  ```python
  tf.feature_column.categorical_column_with_identity(...)
  ```

- if you don't have a vocabulary of **all** possible values:

  ```python
  tf.feature_column.categorical_column_with_hash_bucket(...)
  ```


#### ML vs. Stats

ML: lots of data, keep the outliers and build models for them.

Stats: throw away the outliers.

**Crazy outliers hurts trainability**

Ideally, features should have a similar range, typically [-1,1] or [0,1]

(to predict the **house price**, one of the important feature is the **average of income** in that area)



### Preprocessing and Feature Creation

Preprocess with:

1. BigQuery
2. Apache Beam
3. TensorFlow

#### Things that are commonly done in preprocessing:

In BigQuery or Beam:

​	Remove examples that you don't want to train on

​	Compute vocabularies for catagorical columns

​	Compute aggregate stats for numeric columns

In Beam only:

​	Compute time-windowed stats (eg. number od products sold in previous hour) for use as input features.

In TensoeFlow or Beam:

​	Scaling, discretization, etc, of numeric features

​	Spiiting, lower-casing, etc, of textual features

​	Resizing of input images

​	Normalizing volume level of input audio

There are two places for feature creation in TensorFlow:

 1. features are preprocessed in `input_FN(train,eval,serving)`

    `tf.clip_by_value(...)`

2. feature columns are passed into the esimator during construction

   `tf.feature_column.bucketized_column(...)`



### Beam and DataFlow

Beam is a way to write elastic data preprocess pipelines.

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\beam-dataflow.png)

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\beam-dataflow2.png)

#### Dataflow terms and concepts:

source; series of steps to transform; sink (out) 

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\beam-dataflow3.png)

#### A pipeline is a DAG of steps.

Read in data, transfrom it, write out.

Can branch, merge, use if-then statement etc 

`p.run()` runs the pipeline 

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\beam-dataflow4.png)





### Preprocessing with Cloud Dataprep

Explore and **Visualize** common values

have some domain knowledge 

when get a new dataset, do EDA, find outliers, see the frequent of the variables, analyze key stats (avg, min,max,...), explore the distributions of the values. 

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\preprocessing.png)

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\dataPrep.png)



### Feature Crosses (★POWERFUL★)

traditionally, it only works on large datasets.

using non-linear inputs in a linear learner

`x3 = x1x2`

#### discretization:

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\discretization.png)

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\discretization2.png)

#### Memorization vs. Generalization

seperate prediction per grid cell

if you one-hot encode one set of value x1, then one-hot encode the second set of value x2, and then feature cross them, you're essentially left with one node that fires for points that fall into that bucket.(eg. `x3 = 1 iff x1 =1 and x2 =1`)

the weight of a cell is essentially the prediction for that cell.

Discretization: you discretize the input space, and **memorize** the training data set. 

**Feature crosses memorize, goal of ML is generalization.** 

memorization works when you have lots of data.

