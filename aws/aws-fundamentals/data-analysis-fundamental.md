# Intro to DA



## Volume - Data Storage

- **Structured**(10%) data is organized and stored in the form of values that are grouped into rows and columns of a table.
- **Semistructured(10%)** data is often stored in a series of key-value pairs that are grouped into elements within a file.
- **Unstructured**(80%) data is not structured in a consistent way. Some data may have structure similar to semi-structured data but others may only contain metadata.



## Data Processing

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