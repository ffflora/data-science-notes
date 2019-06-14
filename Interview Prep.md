##### 1. What is data Science Engineer?

> 在大数据时代，数据工程师的角色愈发地重要。也许，数据架构师的称谓更准确。和数据分析师不同，他们不太关注统计、分析技能、建模等。他们的工作重点在于数据架构、计算、数据存储、数据流等。  因此，数据工程师必须具备相当强的编程能力—包括编写数据查询程序的能力。也就是说，他们的能力必须达到开发运营高手的级别。
>
> 数据工程师还负责数据库设计，数据仓储，建立数据湖。 这就意味着，他们必须十分熟悉现有的数据库技术和数据管理系统，比如和大数据有关的Hadoop与HBase 等。
>
> 此外，非功能性的基础设施问题，如数据的可扩展性、可靠性、韧性、有效性，备份等也由数据工程师来负责。

keywords: 

- manage data pipelines for large datasets 
- make sure the data is being  **efficiently collected** and **retrieved** from its source when **needed, cleaned and preprocessed**.

Why Important:

如果你只使用存储在.csv或.txt文件中的相对较小的（<5GB）数据集，可能很难理解为什么会有 Full Time 来构建和维护 Data Pipeline。这有两个原因：1）一个50GB的数据集不适合你的计算机的RAM，所以你通常需要其他方法将其输入到你的模型中；2）许多数据可能需要很长的时间来处理，并且通常需要冗余存储。管理存储需要专门的技术知识。

Requirements:

Apache Spark, Hadoop, Hive & Kafka. SQL 的夯实基础也很重要的。

你要处理的问题大概是这样：

→ “How do I build a pipeline that can handle 10000 requests per minute?”

→ “How can I clean this dataset without loading it all in RAM?”

[How to Work with BIG Datasets on Kaggle Kernels (16G RAM)](https://www.kaggle.com/yuliagm/how-to-work-with-big-datasets-on-16g-ram-dask)



![技能的连续统一性](https://www.dataapplab.com/wp-content/uploads/2019/05/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190523092104.jpg)

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







Terms:

7) 可行性洞见（actionable insights）（例：通过控制界面、报告、可视化图像呈现。）

### **Statistics** 







没有统计学的先进知识，很难成为一个数据科学家。但是如何把统计解释给一个没有统计学背景的人比你想象中困难。建议大家记一些简单的例子，用浅显易懂的方式介绍给周围人听。





1 

What is the Central Limit Theorem and why is it important?



2 

What is sampling? How many sampling methods do you know?



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



2. What are some pros and cons about your favorite statistical software?



3. Tell me about an original algorithm you’ve created.



4. Describe a data science project in which you worked with a substantial programming component. What did  you learn from that experience?



5. Do you contribute to any open source projects?



6. How would you clean a dataset in (insert language here)?



7. Tell me about the coding you did during your last project?



### **Big Data**

1. What are the two main components of the Hadoop Framework?



2. Explain how MapReduce works as simply as possible.



3. How would you sort a large list of numbers?



4. Here is a big dataset. What is your plan for dealing with outliers? How about missing values? How about transformations?



### **Python**

1 

What modules/libraries are you most familiar with? What do you like or dislike about them?



2 

What are the supported data types in Python?



3 

What is the difference between a tuple and a list in Python?



### **R**

1. What are the different types of sorting algorithms available in R language?



There are insertion, bubble, and selection sorting algorithms.



2. What are the different data objects in R?



3. What packages are you most familiar with? What do you like or dislike about them?



4. How do you access the element in the 2nd column and 4th row of a matrix named M?



5. What is the command used to store R objects in a file?



6. What is the best way to use Hadoop and R together for analysis?



7. How do you split a continuous variable into different groups/ranks in R?



8. Write a function in R language to replace the missing value in a vector with the mean of that vector.



### **SQL**

1 

What is the purpose of the group functions in SQL? Give some examples of group functions.



2 

Group functions are necessary to  get summary statistics of a dataset. COUNT, MAX, MIN, AVG, SUM, and  DISTINCT are all group functions.



3 

Tell me the difference between an inner join, left join/right join, and union.



4 

What does UNION do? What is the difference between UNION and UNION ALL?



4 

What is the difference between SQL and MySQL or SQL Server?



5 

If a table contains duplicate rows,  does a query result display the duplicate values by default? How can  you eliminate duplicate rows from a query result?





###  **Modeling** 







1 

Tell me about how you designed the model you created for a past employer or client.



2 

What are your favorite data visualization techniques?



3 

How would you effectively represent data with 5 dimensions?



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



2. What do you think makes a good data scientist?



3. How did you become interested in data science?



4. 

Give a few examples of “best practices” in data science.



5. 

What/when is the latest data  science book / article you read? What/when is the latest data  mining conference / webinar / class / workshop / training you attended



6. 

What’s a project you would want to work on at our company?



7. 

What unique skills do you think you’d bring to the team?



8. 

What data would you love to acquire if there were no limitations?



9. 

Have you ever thought about creating a startup? Around which idea / concept?



10. 

What can your hobbies tell me that your resume can’t?



11. 

What are your top 5 predictions for the next 20 years?



12. 

What did you do today? Or what did you do this week / last week?



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



6. How would you detect bogus reviews, or bogus Facebook accounts used for bad purposes?



7. How would you perform clustering on  one million unique keywords, assuming you have 10 million data points –  each one consisting of two keywords, and a metric measuring how similar  these two keywords are? How would you create this 10 million data  points table in the first place?



8. How would you optimize a web  crawler to run much faster, extract better information, and better  summarize data to produce cleaner databases?

##### Storytelling

故事叙述虽然听起来和详细描述很相似，但需要你**借助过去的具体经验来突出你的技能**。当你在答题时，你可以指出你之前是否解决过类似的问题。强调相关的经验非常重要，详细描述你曾经解决问题的步骤和特定的成果。可以使用以下类似的句式：

**“I did action X during the feature engineering stage of project Y  which resulted in Z increase in model accuracy and AUC scores. ”**

这个策略需要你引出这个公司正在解决的特定问题，并从两个方面来展示你自己的“优秀”：一，你是一个会解决问题的人，二，你在帮助这个公司解决问题。

##### Followup:

面试中通常有反问问题的环节，你需要做的就是，**在面试官让你问问题的时候，询问他们你这个岗位具体要解决的问题，或者这个团队正在试图解决的问题**。在面试结束之后，你要花时间来思考一下这个问题和并列出一个解决问题的计划。这个计划不需要非常技术和详细，但要展示出你对这个问题的个人理解和独立解决这个问题的能力。

在后续联系面试官时，首先回顾一下面试中双方都比较满意的部分，然后轻描淡写地通过以下句式讲述你对问题的看法和解决方案：

“By the way, I thought about the problem you’re currently facing and  came up with three solutions that I could implement within the first  month of starting at your company.”

在你的描述中，你的面试官就已经开始想象你在公司里做这个项目兢兢业业的样子了。

##### What is data wrangling munging? 

> Data wrangling, sometimes referred to as data munging, is the process of transforming and mapping data from one "raw" data form into another format with the intent of making it more appropriate and valuable for a variety of downstream purposes such as analytics.

就是数据预处理。

##### What A/B Test?

[200万人阅读的AB Testing好文](https://www.dataapplab.com/5-critical-steps-to-predictive-business-analysis/)

[如何在不花一分钱进行A/B Testing？一起来薅资本主义羊毛！](https://www.dataapplab.com/how-to-a-b-test-without-spending-a-dime/)

##### How to prepare a DS interview?

[如何准备数据科学家岗位面试？☆★★★☆](https://www.dataapplab.com/5-critical-steps-to-predictive-business-analysis/)

##### 什么是**单元测试和持续集成** (unit testing and Data integration)?  ★★★★★

[★★★★To be a Data Scientist checklist: 超强资源，have to print it out and put on the wall!](https://www.dataapplab.com/if-youre-a-developer-transitioning-into-data-science-here-are-your-best-resources/)

[★★★★Is robotic Process Automation (RPA) Really AI?](https://www.datasciencecentral.com/profiles/blogs/is-robotic-process-automation-rpa-really-ai)

