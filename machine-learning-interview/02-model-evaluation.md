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



7. ###  A/B Test 

   - #### 在对模型进行过充分的离线评估之后，为什么还要进行在线A/B测试？

     （1）离线评估**无法完全消除模型过拟合的影响**，因此，得出的离线评估结果无法完全替代线上评估结果。

     （2）离线评估**无法完全还原线上的工程环境**。一般来讲，离线评估往往不会考虑线上环境的延迟、数据丢失、标签数据缺失等情况。因此，离线评估的结果是理想工程环境下的结果。

     （3）线上系统的**某些商业指标在离线评估中无法计算**。离线评估一般是针对模型本身进行评估，而与模型相关的其他指标，特别是商业指标，往往无法直接获得。比如，上线了新的推荐算法，离线评估往往关注的是ROC曲线、P-R曲线等的改进，而线上评估可以全面了解该推荐算法带来的用户点击率、留存时长、PV访问量等的变化。这些都要由A/B测试来进行全面的评估。

   - #### 如何进行线上A/B测试？

     进行A/B测试的主要手段是进行用户**分桶**，即将用户分成实验组和对照组，对实验组的用户施以新模型，对对照组的用户施以旧模型。在分桶的过程中，要注意样本的独立性和采样方式的**无偏性**，**确保同一个用户每次只能分到同一个桶中**，在分桶过程中所选取的user_id需要是一个**随机数**，这样才能保证桶中的样本是无偏的。

8. ### Model Evaluation

   - #### 模型评估过程中，有哪些主要的验证方法，它们的优缺点是什么?

     - Holdout validation, cross validation, bootstrap, differentiation 
     - Holdout: test set and training set, usually 3:7. 
       - 验证集上计算出来的最后评估指标与原始分组有很大关系。
       - to avoid this problem, we introduce the cross validation ↓
     - Cross Validation: k-fold validation.
       - divide the dataset into k sets, traverse each set and set the current set as validation set and make the rest as training set, and take the average of the k predicted value as the final result.  
       - hold one out as a test set 
     - Bootstrap: When dataset is small, this method is better than the previous two, cause when dividing "validation set"out from the dataset, would make the training set even smaller, thus effect the accuracy to the final result.
       - 对于总数为n的样本集合，进行n次有放回的随机抽样，得到大小为n的训练集。n次采样过程中，有的样本会被重复采样，有的样本没有被抽出过，将这些没有被抽出的样本作为验证集，进行模型验证，这就是自助法的验证过程。

   - #### 自助法的采样过程中，对n个样本进行n次自助抽样，当n趋于无穷大时，最终有多少数据从未被选择过?

     - 一个样本在一次抽样过程中未被抽中的概率为(1-1/n), n次抽样均未抽中的概率为![](https://www.zhihu.com/equation?tex=%5Cleft%281-%5Cfrac%7B1%7D%7Bn%7D%5Cright%29%5E%7Bn%7D). when n --> ∞, p = ![](https://www.zhihu.com/equation?tex=%5Clim+_%7Bn+%5Crightarrow+%5Cinfty%7D%5Cleft%281-%5Cfrac%7B1%7D%7Bn%7D%5Cright%29%5E%7Bn%7D%3D%5Cmathrm%7Be%7D),![](https://www.zhihu.com/equation?tex=%5Cbegin%7Baligned%7D+%5Clim+_%7Bn+%5Crightarrow+%5Cinfty%7D%5Cleft%281-%5Cfrac%7B1%7D%7Bn%7D%5Cright%29%5E%7Bn%7D+%26%3D%5Clim+_%7Bn+%5Crightarrow+%5Cinfty%7D+%5Cfrac%7B1%7D%7B%5Cleft%281%2B%5Cfrac%7B1%7D%7Bn-1%7D%5Cright%29%5E%7Bn%7D%7D+%5C%5C+%26%3D%5Cfrac%7B1%7D%7B%5Clim+_%7Bn+%5Crightarrow+%5Cinfty%7D%5Cleft%281%2B%5Cfrac%7B1%7D%7Bn-1%7D%5Cright%29%5E%7Bn-1%7D%7D+%5Ccdot+%5Cfrac%7B1%7D%7B%5Clim+_%7Bn+%5Crightarrow+%5Cinfty%7D%5Cleft%281%2B%5Cfrac%7B1%7D%7Bn-1%7D%5Cright%29%7D+%5C%5C%3D%26+%5Cfrac%7B1%7D%7B%5Cmathrm%7Be%7D%7D+%5Capprox+0.368+%5Cend%7Baligned%7D)

9. ### Hyperparameter Tuning

   - #### 参数有哪些调优方法？

     - 一般会采用**网格搜索、随机搜索、贝叶斯优化**等算法。

     - 需要明确超参数搜索算法一般包括哪几个要素：一是目标函数，即算法需要最大化/最小化的目标；二是搜索范围，一般通过上限和下限来确定；三是算法的其他参数，如搜索步长:learning rate。

     - **网格搜索**

       网格搜索可能是最简单、应用最广泛的超参数搜索算法，它通过查找搜索范围内的所有的点来确定最优值。如果采用较大的搜索范围以及较小的步长，网格搜索有很大概率找到全局最优值。然而，这种搜索方案**十分消耗计算资源和时间**，特别是需要调优的超参数比较多的时候。因此，在实际应用中，网格搜索法<u>一般会先使用较广的搜索范围和较大的步长，来寻找全局最优值可能的位置；然后会逐渐缩小搜索范围和步长，来寻找更精确的最优值。这种操作方案可以降低所需的时间和计算量，但由于目标函数一般是非凸的，所以很可能会错过全局最优值。</u>

     - **随机搜索**

       随机搜索的思想与网格搜索比较相似，只是不再测试上界和下界之间的所有值，而是在搜索范围中随机选取样本点。它的理论依据是，如果样本点集足够大，那么通过随机采样也能大概率地找到全局最优值，或其近似值。随机搜索一般会比网格搜索要快一些，但是和网格搜索的快速版一样，它的结果也是没法保证的。

     - **贝叶斯优化算法**

       贝叶斯优化算法在寻找最优最值参数时，采用了与网格搜索、随机搜索完全不同的方法。网格搜索和随机搜索在测试一个新点时，会忽略前一个点的信息；而贝叶斯优化算法则充分利用了之前的信息。贝叶斯优化算法通过对目标函数形状进行学习，找到使目标函数向全局最优值提升的参数。具体来说，它学习目标函数形状的方法是，**首先根据先验分布，假设一个搜集函数；然后，每一次使用新的采样点来测试目标函数时，利用这个信息来更新目标函数的先验分布；最后，算法测试由后验分布给出的全局最值最可能出现的位置的点。**对于贝叶斯优化算法，有一个需要注意的地方，一旦找到了一个局部最优值，它会在该区域不断采样，**所以很容易陷入局部最优值**。为了弥补这个缺陷，贝叶斯优化算法会在探索和利用之间找到一个平衡点，“探索”就是在还未取样的区域获取采样点；而“利用”则是根据后验分布在最可能出现全局最值的区域进行采样。