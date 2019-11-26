Here are the questions I have collected for the data engineer interview preparation.

![技能的连续统一性](https://www.dataapplab.com/wp-content/uploads/2019/05/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190523092104.jpg)

## General Questions

##### 1. What is data engineer?

keywords: 

- Advanced data structures, distributed computing, concurrent programming, data storage, data stream; design and maintain database, set up data pool. 

- Build and manage data **pipelines** for large datasets 
- **ETL**: make sure the data is being  **efficiently collected** and **retrieved** from its source when **needed, cleaned and preprocessed**.
- toolkits: Hadoop, Spark, Kafka, Hive, ...
- Lambda Architecture ![](https://image.slidesharecdn.com/lambdaarchitecturewithapachespark-160515125817/95/lambda-architecture-with-apache-spark-12-638.jpg?cb=1478117055)
- ![](https://softwareengineeringdaily.com/wp-content/uploads/2016/03/airbnb-data.png)

Data Pipeline:

- Distributed system is a must.
  - Able to handle large pressure
  - Higher chance of failure
- Designing for the whole company 
  - High scalability ready future growth  
  - Be genetic enough to support different teams 

[**科技巨头都爱的Data Pipeline，如何自动化你的数据工作？**](http://www.raincent.com/content-10-10786-1.html)

[ETL best practices with Airflow documentation site](http://www.raincent.com/content-10-10786-1.html)

##### 2. How can I clean this dataset without loading it all in RAM?

- TIP 1 - Deleting unused variables and `gc.collect() `
- TIP 2 - Presetting the datatypes
- TIP 3 - Importing selected rows of the a file (including generating your own subsamples)
- TIP 4 - Importing in batches and processing each individually
- TIP 5 - Importing just selected columns
- TIP 6 - Creative data processing
- TIP 7 - Using Dask 

[How to Work with BIG Datasets on Kaggle Kernels (16G RAM)](https://www.kaggle.com/yuliagm/how-to-work-with-big-datasets-on-16g-ram-dask)





## Server Related:

1. ##### How do I build a pipeline that can handle 10000 requests per minute?

2. ##### How to scale web service(with AWS)?

3. ##### Techniques to make distributed system highly available?

## Analytics Related:

## SQL Related:

1. #### Optimize Hive query

2. ####  Window Function

   A window function is an SQL function where the input values are taken from a "window" of one or more rows in the results set of a SELECT statement.  

## Distribution System related:

1. #### How Does MapRuduce Work?

   The idea is **divide and conquer**.

   The main process is highly paralleled:

   **Input -> split -> map -> shuffle -> reduce -> finalize** 

   There are map worker, reduce worker, master,  which **master** are as user programs to assign 	tasks, and each map worker split the data locally in RAM, and reduce worker load the data locally, after **reduce** then **finalize** the results. 

   **Hive** is a **Hadoop** based data warehouse tool, which could map the structured data into a database table,  and provide functions like SQL query, also could use SQL command to assign  MapReduce tasks.

2. #### Data replication strategies

3. #### Message delivery guarantees

## Cloud computing related:

1. #### How to sync data across S3 buckets in different AWS account?

[到底什么是流计算（Stream Computing）](https://blog.csdn.net/historyasamirror/article/details/3719710)





