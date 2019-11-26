Here are the questions I have collected for the data engineer interview preparation.

![技能的连续统一性](https://www.dataapplab.com/wp-content/uploads/2019/05/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190523092104.jpg)

### General Questions

#### 1. What is data engineer?

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

2. #### How do I build a pipeline that can handle 10000 requests per minute?

3. #### How can I clean this dataset without loading it all in RAM?

   - TIP 1 - Deleting unused variables and `gc.collect() `
   - TIP 2 - Presetting the datatypes
   - TIP 3 - Importing selected rows of the a file (including generating your own subsamples)
   - TIP 4 - Importing in batches and processing each individually
   - TIP 5 - Importing just selected columns
   - TIP 6 - Creative data processing
   - TIP 7 - Using Dask 

[How to Work with BIG Datasets on Kaggle Kernels (16G RAM)](https://www.kaggle.com/yuliagm/how-to-work-with-big-datasets-on-16g-ram-dask)

4. Server Related:

How to scale web service(with AWS)?

Techniques to make distributed system highly available?

Analytics Related:

SQL

Optimize Hive query

Distribution System related:

Data replication strategies

Message delivery guarantees

Cloud computing related:

How to sync data across S3 buckets in different AWS account?

[到底什么是流计算（Stream Computing）](https://blog.csdn.net/historyasamirror/article/details/3719710)



[Feature Engineering 特徵工程中常見的方法](https://vinta.ws/code/feature-engineering.html)

##### 5. What is selection bias?

##### 6. What is imbalanced class?



##### 7. The goal of data science and what are the deliverables?

1) 根据投入预测回报: ROI forecast

2) 分类（例：是否为垃圾信息？）Classification

3) 推荐（例：亚马逊（Amazon）和奈飞（Netflix）的服务模式）Recommendation System

4) 模式鉴别的分类: Classification of pattern identification

5) 异常检测（例：欺诈侦测）fraud detectation

6) 面部,图像,文字,声音，录像识别 face/image/voice recognation

7) 可行性洞见（actionable insights）（例：通过控制界面、报告、可视化图像呈现。）

8) 自动化流程和决策（例：信用卡审批）Automated process 

9) 打分和排列（例：费寇分数(FICO score)的核算）Rating and ordering

10) 分割方案（例：基于人口统计学特征的市场营销）

11) 优化方案（例：风险管理）

12) 预测（例：营业额和销售额）prediction

##### 8. MapRuduce 的工作原理

本质就是 divide and conquer. 

六大过程：

Input -> split -> map -> shuffle -> reduce -> finalize 执行过程是高度并行的

架构:

有 map worker, reduce worker, master, 其中 master 可以代理 user program 去协调/assign 很多事情，每个 map worker 在本地把数据切分开存在本地的缓存或硬盘上，reduce worker 就在本地取数据，完成 reduce 之后就 finalize. 

hive是基于Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张数据库表，并提供简单的sql查询功能，将sql语句转换为MapReduce任务进行运行。

Terms:

7) 可行性洞见（actionable insights）（例：通过控制界面、报告、可视化图像呈现。）

### 

