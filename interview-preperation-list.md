# 数据科学界的《五年高考三年模拟》

## **Python Related**

1. What modules/libraries are you most familiar with? What do you like or dislike about them?

2. What are the supported data types in Python?

   [What are the supported data types in Python?](https://www.quora.com/What-are-the-supported-data-types-in-Python)

3. What is the difference between a tuple and a list in Python?

   The main difference between **lists** and a **tuples** is the fact that **lists** are **mutable** whereas **tuples** are immutable. A mutable data type means that a python object of this type can be modified. 

4. [Python selenium —— 一定要会用selenium的等待，三种等待方式解读](https://blog.csdn.net/huilan_same/article/details/52544521) (crawler)

5. How can you build a simple logistic regression model in Python?

6. How can you train and interpret a linear regression model in SciKit learn?

7.  Which library would you prefer for plotting in Python language: Seaborn or Matplotlib?

   Matplotlib is the python library used for  plotting but it needs lot of fine-tuning to ensure that the plots look shiny. Seaborn helps data scientists create statistically and  aesthetically appealing meaningful plots. The answer to this question varies based on the requirements for plotting data.

8. What is the main difference between a Pandas series and a single-column DataFrame in Python?

   > pandas.**DataFrame**(*data=None, index=None, columns=None, dtype=None, copy=False*)
   >
   > **Two-dimensional size-mutable**, potentially heterogeneous tabular data structure with labeled axes (rows and columns). Arithmetic operations align on both row and column labels.    **Can be thought of as a dict-like container for Series objects.** 

   So the **Series is the datastructure for a single column of a DataFrame**, not only conceptually, but literally

   i.e. the data in a `DataFrame` is actually stored in memory as a collection of `Series`. 

6) Write code to sort a DataFrame in Python in descending order.

7) How can you handle duplicate values in a dataset for a variable in Python?

















5. [40 Questions to test your skill in Python for Data Science](https://www.analyticsvidhya.com/blog/2017/05/questions-python-for-data-science/)

6. [**Data Science Python Interview Questions and Answers**](https://www.dezyre.com/article/100-data-science-in-python-interview-questions-and-answers-for-2018/188)

7. review your python learning notes from time to time, you'll always find useful points! 

   mynote

 







## **Statistics** Related

没有统计学的先进知识，很难成为一个数据科学家。但是如何把统计解释给一个没有统计学背景的人比你想象中困难。建议大家<u>记一些简单的例子</u>，用浅显易懂的方式介绍给周围人听。





1. What is the Central Limit Theorem and why is it important?



2. What is sampling? How many sampling methods do you know?



3 

What is the difference between Type I vs Type II error?



4 

What is linear regression? What do  the terms P-value, coefficient, R-Squared value mean? What is the  significance of each of these components?



5 

What are the assumptions required for linear regression?



​    There are four major assumptions:



\1. There is a linear relationship between the dependent variables and  the regressors, meaning the model you are creating actually fits the  data,

\2. The errors or residuals of the data are normally distributed and independent from each other,

\3. There is minimal multicollinearity between explanatory variables, and

\4. Homoscedasticity. This means the variance around the regression line is the same for all values of the predictor variable.

6 

What is a statistical interaction?



7 

What is selection bias?



8 

What is an example of a dataset with a non-Gaussian distribution?



9 

What is the Binomial Probability Formula?





###  **Programming** 







为了测试你的编程技巧，面试官会问两个问题：在理论上如何解决编程问题而不写出代码，然后他们还会要求现场编程进行白板练习。





General



1. With which programming languages and environments are you most comfortable working?

   √

2. What are some pros and cons about your favorite statistical software?

   √

3. Tell me about an original algorithm you’ve created.

   

4. Describe a data science project in which you worked with a substantial programming component. What did  you learn from that experience?

   √

5. Do you contribute to any open source projects?

   √

6. How would you clean a dataset in (insert language here)?

   

7. Tell me about the coding you did during your last project?



### **Big Data**

1. What are the two main components of the Hadoop Framework?



2. Explain how MapReduce works as simply as possible.



3. How would you sort a large list of numbers?



4. Here is a big dataset. What is your plan for dealing with outliers? How about missing values? How about transformations?







### **R **

1. What are the different types of sorting algorithms available in R language?



There are insertion, bubble, and selection sorting algorithms.



2. What are the different data objects in R?



3. What packages are you most familiar with? What do you like or dislike about them?



4. How do you access the element in the 2nd column and 4th row of a matrix named M?



5. What is the command used to store R objects in a file?



6. What is the best way to use Hadoop and R together for analysis?



7. How do you split a continuous variable into different groups/ranks in R?



8. Write a function in R language to replace the missing value in a vector with the mean of that vector.



## **SQL** Related

1. What is the purpose of the group functions in SQL? Give some examples of group functions.



2. Group functions are necessary to  get summary statistics of a dataset. COUNT, MAX, MIN, AVG, SUM, and  DISTINCT are all group functions.



3. Tell me the difference between an inner join, left join/right join, and union.



4. What does UNION do? What is the difference between UNION and UNION ALL?



5. What is the difference between SQL and MySQL or SQL Server?



6. If a table contains duplicate rows,  does a query result display the duplicate values by default? How can  you eliminate duplicate rows from a query result?

##### SQL Performance 相关问题

Query run 得快慢取决于 database 后面的原理，比如 indexing.

比如有一个 `JOIN`, 如果可以在它之前对数据做一些 downsize (dimension reduction(横向和纵向))。

`JOIN` 其实是计算非常重的指令，因为第一个 table 的每一行都要去第二个 table match.

Hive 用的是 MapReduce 原理，如果两个 table 一大一小，那应该把小的放前面，这样计算起来会快一点。Just to consider if the computation is necessary.  

Pig and Hive 是 Hadoop 里的两个部件，Hive 就是一个分布式的 database，使用 MapReduce 实现的。Pig 是一种脚本语言，Pig 主要是做 ETL, 是用来做 data pipeline 的。HIVE 的语法跟 SQL 类似，但是实现方法是完全不一样的。 SQL 本质上是 Related Database, 但 Hive 是分布式的文件系统。

如果要做大数据，Hive > Spark, SQL > Pig. 现在 industry 都在做 maintenance 的工作，不太写新的。

##### 概念题如何回答？（以下这些就比较 high level 了）

能说清楚 wiki 的概念，

What‘s a SQL view?

What is the difference between `WHERE` and `HAVING`?

​	`WHERE` is a filter function, defines some conditions. It could filter out the data I don't need.

​	`WHERE` could use for all data, yet `HAVING` can only use on top of `GROUP BY`.

What's the difference between `INNER JOIN` and `OUTER JOIN`?

​	`INNER JOIN` is an intersection of two tables.

​	`OUTER JOIN` not only joins the intersection part, but also the no corresponding matched part. 

​	`OUTER JOIN` has `LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN.` 

What's the point of using a foreign key constraint?

![](https://i.stack.imgur.com/VQ5XP.png)

##### Case Study 1:

1. Provide an histogram of item_price:

   ```SQL
   SELECT item_price
   GROUP BY price
   COUNT user_id
   ```

2. Provide an histogram of orders by order price:

   order price needs to be prepared:

   order price  = order item x item price;

   use **subquery** to calculate the total order price, and then group by order price.

   ```SQL
   SELECT 
   	SELECT order_id
   	SUM unit price * quantity
   	GROUP BY order_id)
   GROUP BY order_price
   COUNT user_id
   ```

##### Case Study 2:

Calculate the average time between transactions by a particular user.

You have a table called transactions/session that contains a username and the time of the transaction.

(Transactions and sessions are very important tables in ecommerce and gaming companies.)

- First, find all of user_a's transaction today 

  ```SQL
  with user_a_trans as (
  	SELECT username,time
      FROM transactions
      WHERE day = '2007-09-09'
      AND username = 'user_a'	),
  ```

- Second, join each transaction to all transactions  occurring after it.

  这里其实做了一个 self join, 有两个 instance.

  用了 JOIN...ON condition 

  ```SQL
  joined_trans as (
  	SELECT username.time,future_times
      FROM user_a_trans previous_order 
      INNER JOIN user_a_trans afterward_order
      ON afterward_order.time>previous_order.time),
  ```

- Find the immediate next transaction  using MIN()

  ```SQL
  next_trans as (
  	SELECT username,time,MIN(future_times) as next_time
      from joined_trans
      GROUP BY username,time)
  ```

- Average difference of the time and the nxt transaction's time

  ```SQL
  SELECT AVG(next_time - time) as avg_time_to_next_transaction
  FROM next_trans;
  ```

  

##### Case Study 3:

Find the "Top three salaries" in each department

table:

​	id,

​	name,

​	salary,

​	departmentID

Think about subquery.

method 1:

```SQL
SELECT 
	d.name AS 'Department', e1.Name as 'Employee',e1.Salary
FROM 
	Employee e1
		JOIN
	Department d ON e1.DepartmentID = d.ID
WHERE
	3>(SELECT
      	COUNT(DISTINCT e2.Salary)
      	FROM
       		Employee e2
       	WHERE 
       		e2.Salary > e1.Salary
       			AND e1.DepartmentID = DepartmentID)
```

method 2:

```SQL
PARTITION BY DepartmentID
ORDER BY salary DESCENDING
```

##### SQL 解题思路的总结：

1. 题要问清楚，结果要什么？先在白板写下来需要的东西，再跟考官确认是不是这些就是ta需要的；
2. 思考主要的计算是排序有关的，还是 Aggregation 有关的，还是需要 WHERE filter out 不相关的数据，这些需要在脑子里先过一下。为了得到这些 table, 我是不是需要先准备一个**中间的**数据集（subquery 或者 temp table）？先在纸上把中间的这个数据集写下来。这时候看看我需要的这个数据在哪个 table 里（因为可能会有五六个 tables，但是很多或许用不到），把用得到的 tables 先做一个 data integration, which basically is JOIN. 此时可能需要 JOIN 两三个 tables. 然后把需要的数据从不同的 table 里通过 JOIN 取出来，可能会需要 WHERE, GROUP BY, 取到我中间的数据集里去，然后再反向推到到原始的 table 里。

3. 要不停地跟面试官沟通思路。
4. 面试 JOIN 考得最多。

[[SQL Server Window Function 窗体函数读书笔记一 - SQL Windowing](https://www.cnblogs.com/biwork/p/3241983.html)](https://www.cnblogs.com/biwork/p/3241983.html)

[[SQL Server Window Function 窗体函数读书笔记二 - A Detailed Look at Window Functions](https://www.cnblogs.com/biwork/p/3244527.html)](https://www.cnblogs.com/biwork/p/3244527.html)

[SQLZOO](https://sqlzoo.net/)



###  **Modeling**/Data Science Related







1. Tell me about how you designed the model you created for a past employer or client.



2. What are your favorite data visualization techniques?



3. How would you effectively represent data with 5 dimensions?



4 

How is kNN different from k-means clustering?



kNN, or k-nearest neighbors is a classification  algorithm, where the k is an integer describing the the number of  neighboring data points that influence the classification of a given  observation. K-means is a clustering algorithm, where the k is an  integer describing the number of clusters to be created from the given  data. Both accomplish different tasks.



5 

How would you create a logistic regression model?



6 

Have you used a time series model? Do you understand cross-correlations with time lags?



7 

Explain the 80/20 rule, and tell me about its importance in model validation.



8 

Explain what precision and recall are. How do they relate to the ROC curve?



Recall describes what percentage of true positives are  described as positive by the model. Precision describes what percent of  positive predictions were correct. The ROC curve shows the relationship  between model recall and specificity – specificity being a measure of  the percent of true negatives being described as negative by the model.  Recall, precision, and the ROC are measures used to identify how useful a  given classification model is.



9 

Explain the difference between L1 and L2 regularization methods.



10 

What is root cause analysis?



11 

What are hash table collisions?



12 

What is an exact test?



13 

In your opinion, which is more important when designing a machine learning model: Model performance? Or model accuracy?



14 

What is one way that you would  handle an imbalanced dataset that’s being used for prediction? (i.e.  vastly more negative classes than positive classes.)



15 

How would you validate a model you  created to generate a predictive model of a quantitative outcome  variable using multiple regression?



16 

I have two models of comparable accuracy and computational performance. Which one should I choose for production and why?



17 

How do you deal with sparsity?



18 

Is it better to spend 5 days developing a 90% accurate solution, or 10 days for 100% accuracy?



19 

What are some situations where a general linear model fails?



20 

Do you think 50 small decision trees are better than a large one? Why?



21 

When modifying an algorithm, how do you know that your changes are an improvement over not doing anything?



22 

Is it better to have too many false positives, or too many false negatives?



##### 1. What is data Science Engineer?

> 在大数据时代，数据工程师的角色愈发地重要。也许，数据架构师的称谓更准确。和数据分析师不同，他们不太关注统计、分析技能、建模等。他们的工作重点在于数据架构、计算、数据存储、数据流等。  因此，数据工程师必须具备相当强的编程能力—包括编写数据查询程序的能力。也就是说，他们的能力必须达到开发运营高手的级别。
>
> 数据工程师还负责数据库设计，数据仓储，建立数据湖。 这就意味着，他们必须十分熟悉现有的数据库技术和数据管理系统，比如和大数据有关的Hadoop与HBase 等。
>
> 此外，非功能性的基础设施问题，如数据的可扩展性、可靠性、韧性、有效性，备份等也由数据工程师来负责。

keywords: 

- manage data pipelines for large datasets 
- make sure the data is being  **efficiently collected** and **retrieved** from its source when **needed, cleaned and preprocessed**.

Data Pipeline:

- In order to conquer the challenges, distributed system is a must.
  - Able to handle large pressure
  - Higher chance of failure
- Designing for the whole company 
  - High scalability ready future growth //保证系统有高扩展性 
  - Be genetic enough to support different teams 

[**科技巨头都爱的Data Pipeline，如何自动化你的数据工作？**](http://www.raincent.com/content-10-10786-1.html)

[ETL best practices with Airflow documentation site](http://www.raincent.com/content-10-10786-1.html)

Why Important:

如果你只使用存储在.csv或.txt文件中的相对较小的（<5GB）数据集，可能很难理解为什么会有 Full Time 来构建和维护 Data Pipeline。这有两个原因：1）一个50GB的数据集不适合你的计算机的RAM，所以你通常需要其他方法将其输入到你的模型中；2）许多数据可能需要很长的时间来处理，并且通常需要冗余存储。管理存储需要专门的技术知识。

Requirements:

Apache Spark, Hadoop, Hive & Kafka. SQL 的夯实基础也很重要的。

你要处理的问题大概是这样：

→ “How do I build a pipeline that can handle 10000 requests per minute?”

→ “How can I clean this dataset without loading it all in RAM?”

[How to Work with BIG Datasets on Kaggle Kernels (16G RAM)](https://www.kaggle.com/yuliagm/how-to-work-with-big-datasets-on-16g-ram-dask)



![技能的连续统一性](https://www.dataapplab.com/wp-content/uploads/2019/05/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190523092104.jpg)

[达观数据：Selenium使用技巧与机器人流程自动化实战](https://zhuanlan.zhihu.com/p/64892225)

[RPA流程自动化机器人专栏](https://zhuanlan.zhihu.com/RPA2018)

Server Related:

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

##### 2. Useful Toolkits:

- Libraries and Packages: 
  - Python: Scikit-learn, Pandas, Numpy, TensorFlow, Matplotlib, D3, Ploty
  - R: e1071,  Shiny, ggplot2
- Programming Languages: **R, Python, SQL,** Scala, Julia, Java. Scala is getting important.
- 主要纪事和框架工具： Jupyter, iPython, Knitr (for R), R markdown, blogdown.
- 主要大数据框架/数据库：MySQL, PostgreSQL, Redshift, MongoDB, Redis, Hadoop, and HBase.

##### 3. Main Steps involved in machine learning:

- Gathering data
- Cleaning Data
- Feature Engineering ★
- Define model
- Train and test model and predict the output.

##### 4. What is feature engineering?

Feature engineering is the process of using domain knowledge of the data to **create features** that make ML algorithms work. 

Removing the unwanted feature is also feature engineering.

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



### **Past Behavior** 

从这些问题中，面试官想看看候选人对过去的情况如何反应，你如何表达自己的角色以及从你的经验中学到了什么。在面试之前，写下与这些问题相关的工作经历的例子，以便更新你的记忆。 能够简明扼要地制作一个故事来详细描述你的经历是非常重要的。





1. Tell me about a time when you took initiative.



2. Tell me about a time where you had to overcome a dilemma.



3. Tell me about a time where you resolved a conflict.



4. Tell me about a time you failed, and what you have learned from it.



5. Tell me about (a job on your resume). Why did you choose to do it and what do you like most about it?



6. Tell me about a challenge you have overcome while working on a group project.



7. When you encounter a tedious, boring task, how would you deal with it and motivate yourself to complete it?



8. What have you done in the past to make a client satisfied/happy?



9. What have you done in your previous job that you are really proud of?



10. What do you do when your personal life is running over into your work life?





### **Culture** 

面试官试图了解你是谁，以及你如何配合公司。 他们想知道你对数据科学和招聘公司的兴趣来自哪里。 看看这些例子，想想你最好的答案是什么，但要记住诚实地对待这些问题是很重要的。 这些问题没有正确的答案，但最好的答案是自信和微笑。





1. Which data scientists do you admire most? Which startups?

   [Hadley Wickham](http://hadley.nz/) Chief scientist of Rstudio, developer of many R packages.

   [DataKind](https://www.datakind.org/) DataKind is a global nonprofit that harnesses the power of data science and AI in the service of humanity. Group of volunteers.

2. What do you think makes a good data scientist?

   

3. How did you become interested in data science?

   

4. Give a few examples of “best practices” in data science.



5. What/when is the latest data  science book / article you read? What/when is the latest data  mining conference / webinar / class / workshop / training you attended

   

6. ##### What’s a project you would want to work on at our company?



7. What unique skills do you think you’d bring to the team?



8. 
9. What data would you love to acquire if there were no limitations?



9. 

Have you ever thought about creating a startup? Around which idea / concept?



10. What can your hobbies tell me that your resume can’t?



11. What are your **top 5 predictions** for the next 20 years?



12. What did you do today? Or what did you do this week / last week?



13. 

If you won a million dollars in the lottery, what would you do with the money?



14. 

What is one thing you believe that most people do not?



15. 

What personality traits do you butt heads with?



16. 

What are you passionate about?





###  **Problem Solving** 







面试官在面试过程中希望测试你解决问题的能力。在回答时记得始终表达你的思考过程。因为对面试官来说，过程往往比结果本身更重要。





1. How would you come up with a solution to identify plagiarism?



2. How many “useful” votes will a Yelp review receive?



3. How do you detect individual paid accounts shared by multiple users?



4. You are about to send one million emails. How do you optimize delivery? How do you optimize response?



5. You have a dataset containing 100K  rows and 100 columns, with one of those columns being our dependent  variable for a problem we’d like to solve. How can we quickly identify  which columns will be helpful in predicting the  dependent variable. Identify two techniques and explain them to me as  though I were 5 years old.

   first answer:

   There are many answers. Here are a few:

   - Decision Tree learners (as mentioned below)
   - Correlations (take the strongest correlated features and test further)
   - Linear/Logistic Regression
   - Information Gain / Entropy
   - Chi-Square

   and others.

   This  question was designed for an entry-level data analyst position. Most  often, the answers given are graph them (which you can do, but it's time  intensive), regression techniques, or correlations (depending on the  data set).

   The goal isn't to answer the  question 100% correct (as there is more than one way to do it), but  determine the creativity in the applicant and their approach to problem  solving at scale.

   second answer:

   One idea could be to train some model to the data towards that dependent variable. After training, you can then see the feature coefficients which represent how heavily each column is weighted.  This tells you which columns the model "thinks" are most important.

6. How would you detect bogus reviews, or bogus Facebook accounts used for bad purposes?



7. How would you perform clustering on  one million unique keywords, assuming you have 10 million data points –  each one consisting of two keywords, and a metric measuring how similar  these two keywords are? How would you create this 10 million data  points table in the first place?



8. How would you optimize a web  crawler to run much faster, extract better information, and better  summarize data to produce cleaner databases?

   Putting a time-out threshold to less than 2 seconds, extracting no more than the first 20 KB of each pages, and not revisiting pages already crawled (that is, avoid recurrence in your algorithm) are good starting points.

   



##### Storytelling

故事叙述虽然听起来和详细描述很相似，但需要你**借助过去的具体经验来突出你的技能**。当你在答题时，你可以指出你之前是否解决过类似的问题。强调相关的经验非常重要，详细描述你曾经解决问题的步骤和特定的成果。可以使用以下类似的句式：

**“I did action X during the feature engineering stage of project Y  which resulted in Z increase in model accuracy and AUC scores. ”**

这个策略需要你引出这个公司正在解决的特定问题，并从两个方面来展示你自己的“优秀”：一，你是一个会解决问题的人，二，你在帮助这个公司解决问题。

##### Followup:

面试中通常有反问问题的环节，你需要做的就是，**在面试官让你问问题的时候，询问他们你这个岗位具体要解决的问题，或者这个团队正在试图解决的问题**。在面试结束之后，你要花时间来思考一下这个问题和并列出一个解决问题的计划。这个计划不需要非常技术和详细，但要展示出你对这个问题的个人理解和独立解决这个问题的能力。

在后续联系面试官时，首先回顾一下面试中双方都比较满意的部分，然后轻描淡写地通过以下句式讲述你对问题的看法和解决方案：

“By the way, I thought about the problem you’re currently facing and  came up with three solutions that I could implement within the first  month of starting at your company.”

在你的描述中，你的面试官就已经开始想象你在公司里做这个项目兢兢业业的样子了。



### Data Analysis

1. What is data wrangling munging? 

   > Data wrangling, sometimes referred to as data munging, is the process of transforming and mapping data from one "raw" data form into another format with the intent of making it more appropriate and valuable for a variety of downstream purposes such as analytics.

   就是数据预处理。

2. What A/B Test?

[200万人阅读的AB Testing好文](https://www.dataapplab.com/5-critical-steps-to-predictive-business-analysis/)

[如何在不花一分钱进行A/B Testing？一起来薅资本主义羊毛！](https://www.dataapplab.com/how-to-a-b-test-without-spending-a-dime/)

- Two-sample hypothesis testing
- Randomized experiments with two variants: A and B
- A: control; B: variation
- User-experience design: identify changes to web pages that increase clicks on a banner
- Current website: control; NULL hypothesis
- New version: variation; alternative hypothesis
- 优点：
- - 简单易用，结果可靠
  - 洞察用户行为，把现有 feature 优化到极致
  - 降低上线风险，节省调研时间。
- 缺点：
- - 用户体验差异：（张/王不同组，但体验不同， not fair）
    - 社交产品
    - 价格实验
  - 额外资源，维护两套系统
  - 泄露保密 feature 
- should have a culture of 'always' A/B testing
- How to run A/B  testing?
- - 先 run A/A Testing. 就是在流量分割之后，先在两组都做A/A testing, 目的是
    - 校准 A/B testing 平台，看两组有没有显著差异。
    - 设定转化率的浮动基准 floating standard, 分别是这两组的自然活动范围。
    - 确定样本大小。
- 时间轴：

- A/B testing takes around 7-10 days

- ![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\ab-testing\1.png)

##### How to prepare a DS interview?

[如何准备数据科学家岗位面试？☆★★★☆](https://www.dataapplab.com/5-critical-steps-to-predictive-business-analysis/)

##### 什么是**单元测试和持续集成** (unit testing and Data integration)?  ★★★★★

[★★★★To be a Data Scientist checklist: 超强资源，have to print it out and put on the wall!](https://www.dataapplab.com/if-youre-a-developer-transitioning-into-data-science-here-are-your-best-resources/)

[★★★★Is robotic Process Automation (RPA) Really AI?](https://www.datasciencecentral.com/profiles/blogs/is-robotic-process-automation-rpa-really-ai)

[100 Data Science Interview Questions and Answers (General) for 2018](https://www.dezyre.com/article/100-data-science-interview-questions-and-answers-general-for-2018/184)

**What is regularization? The differences between Lasso vs Ridge?**

 

Regularization: A process of adding a tuning parameter to a model to induce smoothness of the weights (prevent the coefficients to fit so perfectly) in order to prevent overfitting. It is most often done by adding a constant multiple to an existing weight vector, the constant can be any norm (sometimes it will be Lasso or Ridge). Then the model predictions minimize the regularized loss function.

 

L2 (Ridge): the sum of the square of the weights, it has analytical solution, higher computational efficiency.

L1 (Lasso): the sum of the absolute value of the weights, it performs feature selection better in sparse cases

 

Reference:

http://www.chioka.in/differences-between-l1-and-l2-as-loss-function-and-regularization/

 

**Can you derive the ordinary least square regression formula?**

 

**Ordinary least squares (OLS) or linear least squares is a method for estimating the unknown parameters in a linear regression model by minimizing the squared residuals.**

 

**If use a bivariate problem as an example to derive:**

**https://are.berkeley.edu/courses/EEP118/current/derive_ols.pdf**

**If we consider a more general case, please refer to this article:**

**http://cs229.stanford.edu/notes/cs229-notes1.pd**

 

**How to deal with overfitting?**

**Use simpler models**

**Parameter tweak overfitting:** **Choose the parameters properly when using a learning algorithm.**

**Cross-Validation****：****A standard way to find out-of-sample prediction error. This is better representative of the error you would expect when you're trying to predict a future value, rather than just how well you can fit the data at hand.** **Regularization****：****Some sort of regularization can help penalize certain sources of overfitting. A common one you can use in linear models is Ridge Regression or LASSO, where your penalize your model if the sum of the norms of the slopes get too high.**

**If I double every sample observation in a linear regression model, how will the coefficients, r-squared value and t-value change?**



 

The coefficients will be the same (for the analytical solution will not be affected).

R-squared value will be the same (please refer to the definition of R-squared value).

​                                                  

T-value will be roughly sqrt(2) times the previous t value:

​          

 

Reference:

https://stats.stackexchange.com/questions/19698/if-i-repeat-every-sample-observation-in-a-linear-regression-model-and-rerun-the

 

http://reliawiki.org/index.php/Simple_Linear_Regression_Analysis

 

https://en.wikipedia.org/wiki/Coefficient_of_determination

 

https://en.wikipedia.org/wiki/Student%27s_t-test

 

 

**What’s the disadvantages of linear regression?**

·         Linear regressions are sensitive to outliers.

·         Linear regressions are meant to describe linear relationships between variables. (However, this can be compensated by transforming some of the parameters with a log, square root, etc. transformation.)

·         Linear regression assumes that the data are independent.



**Explain what precision and recall are. How do they relate to the ROC curve?**

**In binary classification**:

\1. TN / True Negative: case was negative and predicted negative

\2. TP / True Positive: case was positive and predicted positive

\3. FN / False Negative: case was positive but predicted negative

\4. FP / False Positive: case was negative but predicted positive

 

**The precision**: TP/(TP+FP) the probability that a the true positive among the predicted positive, a measure of how many of the samples predicted by the classifier as positive is indeed positive.

 

**The recall**: TP/(TP+FN) the probability that a the true positive among the conditioned positive, a measure of how many of the positive samples have been identified as being positive.

 

**ROC** curve represents a relation between sensitivity (RECALL) and specificity(NOT PRECISION) and is commonly used to measure the performance of binary classifiers.

 

**Reference**:

https://en.wikipedia.org/wiki/Precision_and_recall

 

**Describe the method to deal with highly skewed binary data classification.**

**i. Choose a proper performance matrix**: (confusion matrix, precision, recall...)

Between ROC Curve and PR (PRECISION vs RECALL) curve, PR works better than ROC.

 

Reference:

http://pages.cs.wisc.edu/~jdavis/davisgoadrichcamera2.pdf

 

**ii. Try to re-sample your datasets**.

·         Over-sampling: add copies of instances from the underrepresented class; use systematic algorithms to generate new instances (Synthetic Minority Over-sampling Technique)...

·         Under-sampling: delete instances from the over-represented class

 

Reference: More method to do

imbalanced-learn package: 

https://github.com/scikit-learn-contrib/imbalanced-learn

 

**iii. Try Penalized Models**:

Penalized classification imposes an additional cost on the model for making classification mistakes on the minority class during training. These penalties can bias the model to pay more attention to the minority class.

 

**iv. Try to see if there is possibility to collect more data to make it balanced**.

 

Reference:

http://machinelearningmastery.com/tactics-to-combat-imbalanced-classes-in-your-machine-learning-dataset/

 

**What is "long" ("tall") and "wide" format data, and the basic ways to deal with the data?**

“Long ” format data: many more records (rows) than features (columns), the main method to deal with this kind of data is sample reduction or feature engineering (such as extract more features).

 

“Wide” format data: a small number of records but a large number of features, the main method to deal with this kind of data is dimensionality reduction (such as feature selection, feature reduction like PCA).

What’s the difference between the novelty detection and outlier detection. Introduce me some methods to do the outlier detection.

**Novelty detection:** the identification of new or unknown data that a machine learning system has not been trained with and was not previously aware of, with the help of either statistical or machine learning based approaches. (i.e. during the model training, all the data are clean data)

 

**Outlier detection:** the identification of items, events or observations which do not conform to an expected pattern or other items in a dataset. (i.e. in the case of outlier detection, the dataset has already been polluted.)

 

Outlier detection is similar to novelty detection in the sense that the goal is to separate a core of regular observations from some polluting ones, called “outliers”. Yet, in the case of outlier detection, we don’t have a clean data set representing the population of regular observations that can be used to train any tool.

 

 

 

**Methods to do the outlier detection:**

To univariate data:

Check the frequency distribution of the data

Box-plot: An outlier is a point of data that lies over 1.5 IQRs below the first quartile (Q1) or above third quartile (Q3) in a given data set.

To multivariate data:

Proximity based methods:1) Cluster based methods 2)Distance based methods 3) Density based methods

Such as One-class SVM, Isolation Forest, …

 

Reference:

 

http://www.datasciencecentral.com/profiles/blogs/introduction-to-outlier-detection-methods

 

http://scikit-learn.org/stable/modules/outlier_detection.html

 

 

**What is the differences between supervised learning and unsupervised learning? Give me examples.**

**Supervised Learning:** if you are training your machine learning task for **every input with corresponding target,** it is called supervised learning, which will be able to provide target for any new input after sufficient training.

An example: You have a dataset including three-cluster data, you want to train a model and predict which class it belongs when there is new input.

 **Unsupervised Learning:** if you are training your machine learning task **only with a set of inputs,** it is called unsupervised learning, which will be able to **find the structure or relationships between different inputs**.

An example: You have a dataset, you want to train a model to divide the data into several clusters..

 

**Reference:**

<https://www.quora.com/What-is-the-difference-between-supervised-and-unsupervised-learning-algorithms>

 

 

 

 

**During analysis, how do you treat missing values?**

·         Should we even treat missing values is another important point to consider? If 80% of the values for a variable are missing then you may drop the variable instead of treating the missing values.

·         Deleting the observations: when your have sufficient data points and your delete will not introduce bias

·         Imputation with mean / median / mode or set default value

·         Imputation with some models: KNN, Mice etc.

·         Use other features to build a model to predict the missing part

 

**What is cross-validation? How to do it right?**

·         Should we even treat missing values is another important point to consider? If 80% of the values for a variable are missing then you may drop the variable instead of treating the missing values.

·         Deleting the observations: when your have sufficient data points and your delete will not introduce bias

·         Imputation with mean / median / mode or set default value

·         Imputation with some models: KNN, Mice etc.

·         Use other features to build a model to predict the missing part

·          

**1.**     **Explain what resampling methods are and why they are useful.**

**2.**     **What is cross-validation? How to do it right?****（前日题，补充答案）**

**1. Resampling methods involve:**

\1.     Repeatedly drawing a sample from the training data;

\2.     Refitting the model of interest with each new sample;

\3.     Examining all the refitted models and then drawing conclusions.

 

There are two major resampling techniques: cross-validation and bootstrapping, both are easy to implement and and broadly applicable. Cross-validation is used for model assessment and model selection, while bootstrapping is most commonly used to measure the accuracy of a parameter estimate of a given learning model.

 

**Resampling methods are useful** because they can address the following drawbacks of traditional validation-test approach:

 

·         data are often scarce and we cannot afford to set aside a validation or test set when training a model;

·         the model performance on the validation data is highly dependent on how we split the data, and validation error tends to overestimate the test error rate.

 

**2. Cross Validation is generally used to assess the error of given models and select the most appropriate model.**

Steps:

\1.     Divide the sample data into training set and test set;

\2.     Partition the training data into k equal-sized folds;

\3.     For k = 1,2,...,K, fit the model to the other K-1 folds and calculate the prediction error on the k-th component.

\4.     Take the average of the prediction errors as an estimate of model performance; select the model that results in the lowest average prediction error;

\5.     Train the selected model on the entire training data and test on the held-out test set.  The prediction error is an estimate of the model’s performance in the real world

 

**What is Principal Component Analysis?**  

**What are its applications and limitations?**

Suppose we want to analyze a dataset with n observations on a set of p features. When p is very large, it is likely that none of the features alone will be informative since each just contain a very small fraction of the total information.  

Each of the n observations lives in p-dimensional space, but these p dimensions are not equally interesting.  

PCA seeks to **find a small number of dimensions** that are as interesting as possible, where the concept of ‘interesting’ is measured by the amount that the observations vary along each dimension.

 

Each of the dimensions found by PCA is a linear combination of  the p features. For instance, the first principal component is:

​          

subject to：

​          

The vector    defines a direction in feature space along which the data vary the most.  

If we project the n data points onto this direction, the projected values are the principal component scores.

 

Applications: we can adapt regression, classification, and clustering methods by using the first K<<p principal component score vectors as features, which will l**ead to much less noisy results.** 

Other applications include **data compression**: for example, we can take the first few principal components of image data to compress image files.

 

Limitations:

​          

**Sometime the variance of the data may not be a good measurement of our interest of the data.** 

For instance, if we want to cluster the following data by color:

PCA will result in the purple line as the projection line while reduced-rank LDA will result in the green line as the projection line.  It is easy to see that if we project our data according to PCA, the data will not be well separated at all, while if we project our data by LDA, clustering is clear.

 

 

**Is orthogonal necessary in PCA?** 

**If yes, Why?** 

What will happen if you don’t rotate the components?

Yes, because in PCA, we aim to select fewer components (than features) which can explain the maximum variance in the data set, and by doing orthogonal it will maximize the difference between variance captured by the component.

 

If we don’t rotate the components, the effect of PCA will diminish and we’ll have to select more number of components to explain variance in the data set.

 

 

 

 

**What is random forest? Why is it good?**

To address the issue of high variance from an ordinary decision tree, we can repeatedly draw samples from the training data (bootstrap) and fit a decision tree with each sample.  When building the decision trees, each time a split in a tree is considered, a random sample of m predictors is chosen as split candidates from the full set of p predictors (typically m = sqrt(p)).  Finally, we take the average result from multiple trained decision trees as the prediction result.

 

The advantage of random forest is that it significantly reduces the high variance of the decision tree model.  Given a set of n independent observations Z1,...,Zn, each with variance 2, the variance of the mean of the observations is 2/n.  In other words, averaging a set of independent observations reduces variance.  By restricting the range of predictors to consider at each split, random forest decorrelates the results from multiple decision trees and by averaging the results, the model now has much less variance.      

 

**What cross validation technique would you use on time series data set?**

I w**ill not use regular cross validation technique** to deal with time series.

 

In time series problem, traditional cross validation can be troublesome because there might be some pattern in year 4 or 5 which is not in year 3. Resampling the data set will separate these trends, and we might end up validation on past years, which is incorrect.

 

Instead, Here is one way I will use forward chaining strategy with 5 fold as shown below:
 fold 1 : training [1], test [2]
 fold 2 : training [1 2], test [3]
 fold 3 : training [1 2 3], test [4]
 fold 4 : training [1 2 3 4], test [5]
 fold 5 : training [1 2 3 4 5], test [6]
 where 1,2,3,4,5,6 represents “year”.

 

 

 

 

 

**What do you understand by Bias Variance trade off?**

The error emerging from any model can be broken down into three components mathematically. Following are these component :

​          

Bias error is useful to quantify how much on an average are the predicted values different from the actual value. A high bias error means we have a under-performing model which keeps on missing important trends.

 

Variance on the other side quantifies how are the prediction made on same observation different from each other. A high variance model will over-fit on your training population and perform badly on any observation beyond training.

​          

Reference:

http://scott.fortmann-roe.com/docs/BiasVariance.html

 

 

 

**What is latent semantic indexing?** 

**What is it used for?** 

**What are the specific limitations of the method?**

**Latent semantic indexing:**

·         Latent Semantic Indexing is Principal Component Analysis (PCA) in document analysis, it is simply applying PCA to (the variance-covariance matrix) of X and the principal directions (eigenvectors) now define topics.

·         It uses a term-document matrix X that describes the occurrences of terms in documents.  Rows correspond to terms(vocabulary) and columns correspond to documents.  Elements of X are typically weights that are proportional to the number of times a term appears in a document, with rare terms upweighted to reflect the relative importance.  The matrix X is usually large and sparse.

·         LSA finds a low-rank approximation of the original term-document matrix, which merges the dimensions of terms that have similar meanings.  

 

**What is it used for:**

·         LSA can be applied to compare documents in the low-dimensional space (document classification), find relations between terms (synonym identification), find matching documents by translating a query of terms to low-dimensional space (information retrieval), and etc.

 

**Limitations include:**

·         The resulting dimensions can be difficult to interpret

·         LSA cannot capture multiple meanings of a word

·         The terms of a document are represented unordered

·         Eigenvectors can have negative components

 

Reference: https://en.wikipedia.org/wiki/Latent_semantic_analysis



front-end 是要拿著 backend 已經做好的 API 來做 integration 的
frond-end 負責 make http request to backend
backend 負責 give response
response 里有對應格式的 data
front-end 要拿著這些 data 展示到 tables、charts 或者其他的 visualization tool 上

[The Big List of DS/ML Interview Resources](https://towardsdatascience.com/the-big-list-of-ds-ml-interview-resources-2db4f651bd63)

[面试题](https://mp.weixin.qq.com/s/E2ziE8wKt4OL9eaKsBmQdg?utm_source=newsletter+subscribers&utm_campaign=07c88b39a4-EMAIL_CAMPAIGN_2019_07_18_09_17&utm_medium=email&utm_term=0_730061d896-07c88b39a4-163092697)

