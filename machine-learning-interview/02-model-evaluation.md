1. ### The limitation of Accuracy 

   - Accuracy = total correct / total amount 
   - 比如，当负样本占99%时，分类器把所有样本都预测为负样本也可以获得99%的准确率。所以，当不同类别的样本比例非常不均衡时，占比大的类别往往成为影响准确率的最主要因素。
   - 为了解决这个问题，可以使用更为有效的平均准确率 mean average precision （每个类别下的样本准确率的算术平均）作为模型评估的指标。

2. ### Precision vs Recall Rate

   ![](https://miro.medium.com/max/1354/1*6NkN_LINs2erxgVJ9rkpUA.png)

   Precision值和Recall值是既矛盾又统一的两个指标，为了提高Precision值，分类器需要尽量在“更有把握”时才把样本预测为正样本，但此时往往会因为过于保守而漏掉很多“没有把握”的正样本，导致Recall值降低。

   为了综合评估一个排序模型的好坏，不仅要看模型在不同Top N下的Precision@N和Recall@N，而且最好绘制出模型的**P-R（Precision-Recall）**曲线。

   The x-axis of a P-R curve is recall rate, and the y-axis is precision.对于一个排序模型来说，其P-R曲线上的一个点代表着，在某一阈值下，模型将大于该阈值的结果判定为正样本，小于该阈值的结果判定为负样本，此时返回结果对应的召回率和精确率。整条P-R曲线是通过将阈值从高到低移动而生成的。

   下图是例图，其中实线代表模型insts模型的P-R曲线，虚线代表insts2模型的P-R曲线。横轴接近0的点代表着正样本阈值最大时模型的精确率和召回率。如图b可见，在召回率接近0时，insts模型的精确率是0.9，而insts2模型的精确率是1。说明insts2模型得分前几位的样本全部是真正的正样本，而insts模型即使是得分最高的几个样本也存在预测错误的情况。而随着召回率的增加，精确率整体上有所下降，在召回率为1时，insts模型的精确率反而超过了insts2模型，这充分说明了我们只用一个点的精确率和召回率结果是不能全面衡量模型性能的，只有通过P-R曲线的整体表现，才能够对模型进行更为全面的评估。

   ![](https://pic1.zhimg.com/80/v2-d9bad68230fdb4bfd65c057b4ebbca90_hd.jpg)

   Other than precision and recall, F1 and ROC curve also could show the performance of a model. F1 score is a Harmonic mean of recall and precision:

   ![](https://pic4.zhimg.com/80/v2-18bf039cfc271e7726c73fd8d2720db3_hd.jpg)

   

3. ### RMSE (root mean squared error)

   - RMSE 经常被用来衡量回归模型的好坏.
   - ![](https://pic2.zhimg.com/80/v2-d384f901206a518ffb4feca60c050061_hd.jpg)
   - Q: 我们希望构建一个回归模型来预测某部美剧的流量趋势，但无论采用哪种回归模型，得到的RMSE指标都非常高。然而事实是，模型在95%的时间区间内的预测误差都小于1%，取得了相当不错的预测结果。那么，造成RMSE指标居高不下的最可能的原因是什么？
     - 一般情况下，RMSE能够很好地反映回归模型预测值与真实值的偏离程度。但在实际问题中，如果存在个别偏离程度非常大的离群点（Outlier）时，即使离群点数量非常少，也会让RMSE指标变得很差。
     - 模型在95%的时间区间内的预测误差都小于1%，这说明，在大部分时间区间内，模型的预测效果都是非常优秀的。然而，RMSE却一直很差，这很可能是由于在其他的5%时间区间内存在非常严重的离群点。事实上，在流量预估这个问题中，噪声点确实是很容易产生的，比如流量特别小的美剧、刚上映的美剧或者刚获奖的美剧，甚至一些相关社交媒体突发事件带来的流量，都可能会造成离群点。
     - 解决方案：
       - 第一，如果我们认定这些离群点是噪声点的话，就需要在数据预处理的阶段把这些噪声点过滤掉。
       - 第二，如果不认为这些离群点是“噪声点”的话，就需要进一步提高模型的预测能力，将离群点产生的机制建模进去（这是一个宏大的话题，这里就不展开讨论了）。
       - 第三，可以找一个更合适的指标来评估该模型。关于评估指标，其实是存在比RMSE的鲁棒性更好的指标，比如平均绝对百分比误差（Mean  Absolute Percent Error，MAPE），它定义为![](https://pic2.zhimg.com/80/v2-62f0d63955d06f05f1ab0d0bc55a6d6d_hd.jpg)
       - Compared with RMSE，we could say that MAPE does the standardization on the error of each of the data point, and thus it removes the effect that outlier brings to the dataset.

4. ### ROC

   - Binary Classifier 是机器学习领域中最常见也是应用最广泛的分类器。评价二值分类器的指标很多，比如precision、recall、F1 score、P-R曲线等。上一小节已对这些指标做了一定的介绍，但也发现这些指标或多或少只能反映模型在某一方面的性能。相比而言，ROC曲线则有很多优点，经常作为评估二值分类器最重要的指标之一。

   - The x-axis of ROC curve is False  Positive  Rate, y-axis is True Positive Rate, 

     ```
     FPR = FP/N
     TPR = TP/N
     ```

   - ROC曲线是通过不断移动分类器的“截断点”来生成曲线上的一组关键点的，通过下面的例子进一步来解释“截断点”的概念。

     在二值分类问题中，模型的输出一般都是预测样本为正例的概率。样本按照预测概率从高到低排序。在输出最终的正例、负例之前，我们需要指定一个阈值，预测概率大于该阈值的样本会被判为正例，小于该阈值的样本则会被判为负例。比如，指定阈值为0.9，那么只有第一个样本会被预测为正例，其他全部都是负例。上面所说的“截断点”指的就是区分正负预测结果的**阈值**。通过动态地调整截断点，从最高的得分开始（实际上是从正无穷开始，对应着ROC曲线的零点），逐渐调整到最低得分，每一个截断点都会对应一个FPR和TPR，在ROC图上绘制出每个截断点对应的位置，再连接所有点就得到最终的ROC曲线。

     ![](https://pic1.zhimg.com/80/v2-6e522af698cc3e0f94feda2ed611a5bc_hd.jpg)

     就本例来说，当截断点选择为**正无穷**时，模型把全部样本预测为负例，那么FP和TP必然都为0，FPR和TPR也都为0，因此曲线的第一个点的坐标就是（0,0）。当把截断点调整为0.9时，模型预测1号样本为正样本，并且该样本确实是正样本，因此，TP=1，20个样本中，所有正例数量为P=10，故TPR=TP/P=1/10；这里没有预测错的正样本，即FP=0，负样本总数N=10，故FPR=FP/N=0/10=0，对应ROC曲线上的点（0,0.1）。依次调整截断点，直到画出全部的关键点，再连接关键点即得到最终的ROC曲线，就本例来说，当截断点选择为正无穷时，模型把全部样本预测为负例，那么FP和TP必然都为0，FPR和TPR也都为0，因此曲线的第一个点的坐标就是（0,0）。当把截断点调整为0.9时，模型预测1号样本为正样本，并且该样本确实是正样本，因此，TP=1，20个样本中，所有正例数量为P=10，故TPR=TP/P=1/10；这里没有预测错的正样本，即FP=0，负样本总数N=10，故FPR=FP/N=0/10=0，对应ROC曲线上的点（0,0.1）。依次调整截断点，直到画出全部的关键点，再连接关键点即得到最终的ROC曲线

     ![](https://pic1.zhimg.com/80/v2-892c77390a24765af07ad03516218180_hd.jpg)

   -  **AUC**

     -  Area under the ROC Curve, 该值能够量化地反映基于ROC曲线衡量出的模型性能。
     - Larger the AUC, better the performance of the classifier, means it classified the true positive sample on the top. 

5. ### ROC vs P-R curve?

   - ROC curve 有一个特点，当正负样本的分布发生变化时，ROC曲线的形状能够基本保持不变，而P-R曲线的形状一般会发生较剧烈的变化。

   - 下图是ROC曲线和P-R曲线的对比图，其中 a, c  are ROC curve， b and d are P-R curve,  c and d 则是将测试集中的负样本数量增加10倍后的曲线图。

     ![](https://pic4.zhimg.com/80/v2-4e39c1048bc4b7f6979548cadabfa3c3_hd.jpg)

     这个特点**让ROC曲线能够尽量降低不同测试集带来的干扰，更加客观地衡量模型本身的性能**。这有什么实际意义呢？在很多实际问题中，正负样本数量往往**很不均衡**。比如，计算广告领域经常涉及**转化率**模型，正样本的数量往往是负样本数量的1/1000甚至1/10000。若选择不同的测试集，**P-R曲线的变化就会非常大，而ROC曲线则能够更加稳定地反映模型本身的好坏**。所以，**ROC曲线的适用场景更多，被广泛用于排序、推荐、广告**等领域。但需要注意的是，选择P-R曲线还是ROC曲线是因实际问题而异的，如果研究者希望更多地**看到模型在特定数据集上的表现，P-R曲线则能够更直观地反映其性能**。
     
   - Why P-R curve 更加不稳定？由公式推导得出。

6. ### Cosine Distance

   - 评估样本之间的距离，也是定义优化目标和训练方法的基础。

   - ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1d94e5903f7936d3c131e040ef2c51b473dd071d)

   - #### 为什么在一些场景中要使用余弦相似度而不是欧氏距离？

     - 在机器学习问题中，通常将特征表示为**向量**的形式，所以在分析两个特征向量之间的相似性时，常使用余弦相似度来表示。余弦相似度的取值范围是[−1,1]，the similarity of two same vectors is 1。`1-similarity` 即为余弦距离。因此，余弦**距离**的取值范围为[0,2]，相同的两个向量余弦距离为0。

     - Euclidean distance: 用坐标系中两个**点**，来计算两点之间的**距离**；因为是点，所以一般指**位置上**的差别

       Cosine similarity: 坐标系中两个**向量**，来计算两向量之间的**夹角**; 因为是向量，所以一般指方向上的差别

     - 当一对文本相似度的长度差距很大、但内容相近时，如果使用**词频或词向量作为特征**，**它们在特征空间中的的欧氏距离通常很大**；而如果使用余弦相似度的话，**它们之间的夹角可能很小，因而相似度高**。此外，<u>在文本、图像、视频等领域，研究的对象的特征维度往往很高，余弦相似度在高维情况下依然保持“相同时为1，正交时为0，相反时为−1”的性质，而欧氏距离的数值则受维度的影响，范围不固定，并且含义也比较模糊</u>。在一些场景，例如Word2Vec中，the norm of the vectors 是经过归一化的，此时欧氏距离与余弦距离有着单调的关系，即![](https://www.zhihu.com/equation?tex=%7C%7C+A%E2%88%92B+%7C%7C_2+%3D+%5Csqrt+%7B2%281-cos%28A%2CB%29%7D+%5C%5C)

       其中|| A−B ||2表示欧氏距离，cos(A,B)表示余弦相似度，(1−cos(A,B))表示余弦距离。在此场景下，如果选择距离最小（相似度最大）的近邻，那么使用余弦相似度和欧氏距离的结果是相同的。

     - 总体来说，欧氏距离**体现数值上的绝对差异，而余弦距离体现方向上的相对差异**。例如，统计两部剧的用户观看行为，用户A的观看向量为(0,1)，用户B为(1,0)；此时二者的余弦距离很大，而欧氏距离很小；我们分析两个用户对于不同视频的偏好，更关注**相对差异**，显然应当使用余弦距离。而当我们分析用户活跃度，以登陆次数(单位：次)和平均观看时长(单位：分钟)作为特征时，余弦距离会认为(1,10)、(10,100)两个用户距离很近；但显然这两个用户活跃度是有着极大差异的，此时我们更关注数值**绝对差异**，应当使用欧氏距离。**特定的度量方法适用于什么样的问题，需要在学习和研究中多总结和思考，**这样不仅仅对面试有帮助，在遇到新的问题时也可以活学活用。

   - #### 余弦距离是否是一个严格定义的距离?

     - 首先看距离的定义：在一个集合中，如果每一对元素均可唯一确定一个实数，使得三条距离公理（**正定性 positive definite，对称性 symetric ，三角不等式 triangle inequality**）成立，则该实数可称为这对元素之间的距离。余弦距离满足正定性和对称性，但是不满足三角不等式，因此它并不是严格定义的距离。具体来说，对于向量A和B，三条距离公理的证明过程如下。

       ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1d94e5903f7936d3c131e040ef2c51b473dd071d)
       
     - ##### 正定性 positive definite:
     
       - By definition, ![](https://img-blog.csdnimg.cn/20181124203942738.png),  since ![](https://img-blog.csdnimg.cn/20181124204025313.png), thus `dist(A,B)≥0` always holds.
       - Particularly, ![](https://img-blog.csdnimg.cn/20181124204104815.png)
     
     - ##### Symetric
     
       - By def, ![](https://img-blog.csdnimg.cn/20181124204142302.png)
     
     - ##### Triangle Ineuqality:
     
       - This **doesn't** hold. 
     
       - counterexample: 
     
         - A=(1,0), B=(1,1), C=(0,1), Thus ![](https://img-blog.csdnimg.cn/201811242042205.png)
     
           ![](https://img-blog.csdnimg.cn/20181124204230762.png), ![](https://img-blog.csdnimg.cn/2018112420424266.png),
     
           Therefore, ![](https://img-blog.csdnimg.cn/20181124204256125.png)
     
         - Which the triangle inequality doesn't hold.
     
   - 在机器学习领域，被俗称为距离，却不满足三条距离公理的不仅仅有余弦距离，还有KL距离（Kullback-Leibler  Divergence），也叫作相对熵，它常用于计算两个分布之间的差异，但不满足对称性和三角不等式.

