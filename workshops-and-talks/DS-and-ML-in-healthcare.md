# 数据科学和人工智能在Healthcare领域应用

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\notes.png)

##### Remarks:

EHR 从 President Obama 开始 trendy.

Pervasive health: 大众健康 

CAD systems, 在医疗系统也会有辅助功能。

### Data source & Basic Analysis

IN **EHR**, the first thing to figure out is the <u>coding system</u>, 每一个特殊的缩写字符都有特殊的含义。

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\EHR.png)



**Biomedical Image Analysis,** 都是 non-sql kind of data, 是非结构性的，需要用到 deep learning 相关的知识

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\biomedical image analysis.png)



**Mining the sensor Data in HealthCare:**

可穿戴设备/传感器的数据，比如心脏科检查的 holter.

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\Sensor Data.png)



**Biomedical Signal Analysis:（生物医疗信号）**

信号的数据需要去噪（有点类似信号处理的技术）

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\BSA.png)



**Personalized Medicine (Genomic Data analysis):** 

是医疗系统内新兴的方向，更加偏向个体化的方案，在这个领域需要有很多统计方向的应用。

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\PM.png)



**Clinical Text:（NLP）**

voice to text, text to voice, text mining.

医生可以用一只录音笔录下诊断，然后有团队可以运用 NLP 整合信息；或者有 app 可以直接和患者对话并给出方案。有些可以跟 image processing 结合，因为会有 scanned old records, 需要图像处理。

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\dm.png)



**Mining the Biomedical Literature**

对医疗文献的考察

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\bl.png)



**Social Media Analytics in HealthCare**

Google 用搜索引擎预测流感，Boston 用 social media data 去监视疫情/infections 

Detection, 测试，跟踪 疫情感染/爆发

或者成为 research topics' data sources.

![](C:\Users\Flora\Documents\python\Data_Science_Notes\Archived_Pics\healthcare\sma.png)



### Advanced Data Analytics:

**Data integration** 数据整合 在数据分析里也是非常重要，因为在研究领域里，或者在面对 healthcare 的新的领域/新的问题时，对数据进行整合变成解决问题的关键。比如在 pharmacy 领域，把研究实验的数据和过往药物临床使用的数据进行整合，那么结果可能会 impressive. 



### Healthcare Jobs

在数据科学领域发展比较落后，所以空间很大。

传统的 healthcare 的工作岗位还在，比如biostats, 但是现在增加了数据处理和管理的岗位。在医疗领域不光有 structured data, 大量的是 non-structure data, image/scanned docs/literatur, 处理这些数据会创造很多岗位。还有就是数据分析的岗位，统计模型，deep learning 的实例，对 skills 的要求比较宽泛，在 research company 比较多。还有 consultancy company, 因为有数据，有商业问题，需要有人提供解决方案。最多的还是 data processing/ preprocessing 的岗位。

**Readmission** is a classic topic in the healthcare area, 中间会遇到一些比较不太好处理的问题，比如 imbalanced data, 不均衡数据。

healthcare 领域的公司举例：

- Kaiser 医院+保险

- IBM，四大

- 保险公司

  