# Intro to DA

The challenges identified in many data analysis solutions can be summarized by five key challenges: **volume**, **velocity**, **variety**, **veracity**, and **value**.

## Volume - Data Storage

- **Structured**(10%) data is organized and stored in the form of values that are grouped into rows and columns of a table.
- **Semistructured(10%)** data is often stored in a series of key-value pairs that are grouped into elements within a file.
- **Unstructured**(80%) data is not structured in a consistent way. Some data may have structure similar to semi-structured data but others may only contain metadata.

When businesses have **more data** than they are able to **process and analyze**, they have a **volume problem**.

### Amazon S3

Advantages of using S3:

- Decoupling storage from processing 
- Parallelization, running process in parallel 
- Centralized location (reduce latency)

#### AWS S3 concepts

First, Amazon S3 stores data as **objects** within **buckets**.

An **object** is composed of a file and any metadata that describes that file. To store an object in Amazon S3, you upload the file you want to store into a bucket. When you upload a file, you can set permissions on the object and add any metadata.

**Buckets** are logical containers for objects. You can have one or more buckets in your account and can control access for each bucket individually. You control who can create, delete, and list objects in the bucket. You can also view access logs for the bucket and its objects and choose the geographical region where Amazon S3 will store the bucket and its contents.

#### **Accessing your content**

Once objects have been stored in an Amazon S3 bucket, they are given an **object key**. Use this, along with the bucket name, to access the object.

![image-20201028180458759](/Users/flora/Library/Application Support/typora-user-images/image-20201028180458759.png)

An **object key** is the unique identifier for an object in a bucket. Because the combination of a bucket, key, and version ID uniquely identifies each object, you can think of Amazon S3 as a basic data map between "bucket + key + version" and the object itself. Every object in Amazon S3 can be uniquely addressed through the combination of the web service endpoint, bucket name, key, and (optionally) version.



### AWS Data Lakes

A data lake is a **centralized repository** that allows you to store **structured**, **semistructured**, and **unstructured** data at any scale.

#### Some **cautions** of data lakes:

- Single source of truth:	Be careful not to let your data lake become a swamp. Enforce proper organization and structure for all data entering the lake.
- Store any type of data, regardless of structure: Be careful to ensure that data within the data lake is relevant and does not go unused. Train users on how to access the data, and set retention policies to ensure the data stays refreshed.
- Can be analyzed using AI and machine learning: Be careful to learn how to use data in new ways. Don't limit analytics to typical data warehouse-style analytics. AI and machine learning offer significant insights.

#### Benefits of a data lake on AWS

- Are a **cost-effective data storage** solution. You can durably store a nearly unlimited amount of data using Amazon S3.
- Implement industry-leading **security and compliance**. AWS uses stringent data security, compliance, privacy, and protection mechanisms.
- Allow you to take advantage of **many different data collection and ingestion tools** to ingest data into your data lake. These services include Amazon Kinesis for streaming data and AWS Snowball appliances for large volumes of on-premises data.
- Help you to **categorize and manage your data** simply and efficiently. Use AWS Glue to understand the data within your data lake, prepare it, and load it reliably into data stores. Once AWS Glue catalogs your data, it is immediately searchable, can be queried, and is available for ETL processing.
- Help you turn data into **meaningful insights**. Harness the power of purpose-built analytic services for a wide range of use cases, such as interactive analysis, data processing using Apache Spark and Apache Hadoop, data warehousing, real-time analytics, operational analytics, dashboards, and visualizations.

#### AWS Lake Formation 

AWS Lake Formation makes it easy to set up a secure data lake in days. A data lake is a centralized, curated, and secured repository that stores all your data, both in its original form and when prepared for analysis. A data lake enables you to break down data silos and combine different types of analytics to gain insights and guide better business decisions. AWS Lake Formation is in preview only.

AWS Lake Formation is a service that organizes and curates data within Amazon S3 data lakes. This service ensures the security and compliance of items within the lake as well as orchestrates transformation jobs utilizing the data lake and other AWS services.



### Data Warehouse

structured data.

Fast, centralized data retrieval. 

### Amazon Redshift Spectrum

## Velocity - Data Processing

1. Batch processing
   1. scheduled batch processing
   2. Periodic batch processing
2. Streaming Processing
   1. Near-real-time 
   2. Real-time 

### **Characteristics of data processing velocity**

**Velocities on collecting data**

| Data Processing     | Velocities on Collecting Data                                |
| ------------------- | ------------------------------------------------------------ |
| **Batch**:          | Velocity is very predictable with batch processing. It amounts to large bursts of data transfer at scheduled intervals. |
| **Periodic**:       | Velocity is less predictable with periodic processing. The loss of scheduled events can put a strain on systems and must be considered. |
| **Near real-time**: | Velocity is a huge concern with near real-time processing. These systems require data to be processed within minutes of the initial collection of the data. This can put tremendous strain on the processing and analytics systems involved. |
| **Real-time:**      | Velocity is the paramount concern for real-time processing systems. Information cannot take minutes to process. It must be processed in **seconds** to be valid and maintain its usefulness. |



**Velocities on processing data**

| Data Processing                   | Velocities on Processing Data                                |
| --------------------------------- | ------------------------------------------------------------ |
| **Batch and periodic**:           | Once the data has been collected, processing can be done in a controlled environment. There is time to plan for the appropriate resources. |
| **Near real-time and real-time**: | Collection of the data leads to an immediate need for processing. Depending on the complexity of the processing (cleansing, scrubbing, curation), this can slow down the velocity of the solution significantly. Plan accordingly. |

### ***\*Attributes of batch and stream processing\****

The table below highlights the difference between batch and stream processing: 

![image-20201015002429812](/Users/flora/Library/Application Support/typora-user-images/image-20201015002429812.png)

### Business Challenge 

The slower collection of data followed by a rapid processing requirement is a common challenge.

The rapid collection of data followed by the rapid processing of data is a common signature of streaming analytics.

