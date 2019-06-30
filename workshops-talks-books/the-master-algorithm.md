### Prologue

机器学习主要有五个学派，Symbolists （符号主义） view learning as the inverse of deduction and take ideas from philosophy, psychology, and logic. Connectionists（联结学派） reverse engineer  the brain and are inspired by neuroscience and physics. Evolutionaries（进化学派） simulate evolution on the computer and draw on genetics and evolutionary biology. Bayesians（贝叶斯学派） believe learning is a form of probabilistic inference and have their roots in statistics. Analogizers（类推学派） learn by  extrapolating from similarity judgments and are influenced by psychology and mathematical optimization.

机器学习的核心就是预测：预测我们想要什么，预测我们行为的结果，预测如何能实现我们的目标，预测世界将如何改变。

### Chapter 1 - The Machine Learning Revolution

As Richard Feynman said, “What I cannot create, I do not understand.” 

Scientists make theories, and engineers make devices. Computer scientists make algorithms, which are both theories and devices.

The Industrial Revolution automated manual work and the Information  Revolution did the same for mental work, but **machine learning automates  automation itself.** Without it, programmers become the bottleneck holding up progress.

In retrospect, we can see that the progression from computers to the Internet to machine learning was inevitable: computers enable the Internet, which creates a flood of data and the problem of limitless  choice; and machine learning uses the flood of data to help solve the limitless choice problem.

人们认为计算机只和数字有关，其实并非如此，它完全关乎逻辑。

机器学习打开了广阔、全新的非线性模型世界。

### Chapter 2 - The Master Algorithm

All knowledge—past, present, and future—can be derived from data by a single, universal learning algorithm.相同的算法可以完成不同的事情。

If something exists but the brain can’t learn it, we don’t know it exists. We may just not see it or think it’s random.

But if everything we experience is the product of a few simple laws,  then it makes sense that a single algorithm can induce all that can be  induced.  (**P=NP?????**)

Humans are good at solving NP problems approximately, and conversely,  problems that we find interesting (like Tetris 俄罗斯方块) often have an “NP-ness”  about them.

In 1962, when Kennedy gave his famous moon-shot speech, going to the moon was an engineering problem. In 1662, it wasn’t, and that’s closer to where AI is today.

To use a technology, we don’t need to master its inner workings, but we do need to have a good conceptual model of it.

The analogizers’ master algorithm is the support vector machine (SVM),  which figures out which experiences to remember and how to combine them to make new predictions.

knowledge Engineer: 知识工程学，the branch of artificial intelligence concerned with building knowledge-based systems, which  creates rules to apply to data in order to imitate the thought process of a human expert. 机器学习讨论概率，而 knowledge engineering 讨论逻辑。（？但是机器学习其实也是在 AI 大的圈子之内的啊）

理论是关于世界是什么的一系列约束条件，而不是对世界的完整描述。

### Chapter 3 - Hume's Problem of Induction 休谟的归纳推理

The rationalist 理论主义者 likes to plan everything in advance before making the first move. The empiricist 经验主义者 prefers to try things and see how they turn out.

理性主义者认为，感官会欺骗人，而逻辑推理是通往知识的唯一可靠的道路。经验主义者认为所有推理都是不可靠的，知识必须来源于观察及实验。评论员、律师、数学家是理性主义者，记者、医生、科学家是经验主义者。

How about we just assume that the future will be like the past? This is certainly a risky assumption. (It didn’t work for the inductivist turkey.) On the other hand, without it all knowledge is impossible, and so is life.

Tom Mitchell, a leading symbolist, calls it “the futility of  bias-free learning.” In ordinary life, bias is a pejorative word:  preconceived notions are bad. But in machine learning, preconceived notions are indispensable; you can’t learn without them. In fact,  preconceived notions are also indispensable to human cognition, but  they’re hardwired into the brain, and we take them for granted. It’s  biases over and beyond those that are questionable.

Newton’s Principle: Whatever is true of everything we’ve seen is true of everything in the universe.

**Learning is forgetting the details as much as it is remembering the important parts.**

Bottom line: learning is a race between the amount of data you have and the number of hypotheses you consider. More data exponentially reduces the number of hypotheses that survive, but if you start with a lot of them, you may still have some bad ones left at the end.

**Accuracy on held-out data is the gold standard in machine learning.**

For example, we can subtract a penalty proportional to the length of  the rule from its accuracy and use that as an evaluation measure.

The preference for simpler hypotheses is popularly known as Occam’s razor, but in a machine-learning context this is somewhat misleading.  “Entities should not be multiplied beyond necessity,” as the razor is  often paraphrased, just means **choosing the simplest theory that fits the data.**

**You can estimate the bias and variance of a learner by comparing its predictions after learning on random variations of the training set. If it keeps making the same mistakes, the problem is bias, and you need a  more flexible learner (or just a different one). If there’s no pattern to the mistakes, the problem is variance, and you want to either try a  less flexible learner or get more data.**

For each pair of facts, we construct the rule that allows us to infer the second fact from the first one and generalize it by Newton’s  principle. When the same general rule is induced over and over again, we can have some confidence that it’s true.（经验主义）

我们要做的就是学习经过<u>一系列</u>规则定义的概念，而不仅仅是单个规则。

问题不限于记忆大量例子。每当算法在数据中找到现实世界中不存在的模型时，我们说它与数据 overfitting. Overfitting is the main problem in the ml.

因此，好的学习算法永远在无知与幻觉的夹缝中行走。

我们的信仰建立在自己的经历之上，这会让我们对世界的理解不完整，而且也容易过早得出错误的结论。即便你很聪明，学识渊博，也无法免受过拟合的影响。

当**你有过多假设**，而没有足够的数据将这些假设区分开来时，过拟合问题就发生了。

对于机器学习来说，对不可见数据的测试是必不可少的 which is the testing set，因为这是判断学习算法是否过拟合的唯一方法。

For these, the symbolist algorithm of choice is decision tree induction.

符号学家选择的算法是决策树归纳。

Decision trees instead ensure a priori that each instance will be matched by exactly one rule.

A single concept implicitly defines two classes: the concept itself and its negation. (For example, spam and nonspam.) **Classifiers** are the  most widespread form of machine learning.

So to learn a good decision tree, we pick at each node the attribute that on average yields the lowest class entropy across all its branches,  weighted by how many examples go into each branch.

Sets of rules and decision trees are easy to understand, so we know what the learner is up to. This makes it easier to figure out what it’s doing right and wrong, fix the latter, and have confidence in the results.

![](https://pic4.zhimg.com/80/v2-aa897c65fc34442747e1f76b8a1ce48f_hd.jpg)

![](https://pic2.zhimg.com/80/v2-3d71d477487e4d4ae492710d2f3e5ac9_hd.jpg)

### Chapter 4 - How Does Your Brain Learn? 神经网络

“Neurons that fire together wire together.”

brains can perform a large number of computations in parallel, with billions of neurons working at the same time; but each of those computations is slow, because neurons can fire at best a thousand times  per second.

Many phenomena we think of as linear are in fact S curves, because nothing can grow without limit.![](https://pic2.zhimg.com/80/v2-ca6b57387165f629c7948c54b7822851_hd.jpg)

When someone talks about exponential growth, ask yourself: How soon will it turn into an S curve?

Differentiate an S curve and you get a bell curve: slow, fast, slow becomes low, high, low.

This was part of the reason Minsky, Papert, and others couldn’t see how to learn multilayer perceptrons. They could imagine replacing step  functions by S curves and doing gradient descent, but then they were  faced with the problem of local minima of the error. In those days researchers didn’t trust computer simulations;

Better still, a local minimum may in fact be preferable because it’s less likely to prove to have overfit our data than the global one.![](https://pic2.zhimg.com/80/v2-7300d85cdaeb34a2fc5d1ecc57fd4c39_hd.jpg)

Hyperspace is a double-edged sword. On the one hand, the higher dimensional the space, the more room it has for highly convoluted  surfaces and local optima. On the other hand, to be stuck in a local  optimum you have to be stuck in every dimension, so it’s more difficult  to get stuck in many dimensions than it is in three.

Driverless cars first broke into the public consciousness with the  DARPA Grand Challenges in 2004 and 2005, but a over a decade earlier,  researchers at Carnegie Mellon had already successfully trained a  multilayer perceptron to drive a car by detecting the road in video  images and appropriately turning the steering wheel. Carnegie Mellon’s  car managed to drive coast to coast across America with very blurry  vision (thirty by thirty-two pixels),

Indeed, the history of machine learning itself shows why we need  learning algorithms. If algorithms that automatically find related  papers in the scientific literature had existed in 1969, they could have  potentially helped avoid decades of wasted time and accelerated who knows what discoveries.

Neural networks are not compositional, and compositionality is a big  part of human cognition. Another big issue is that humans—and symbolic  models like sets of rules and decision trees—can explain their  reasoning, while neural networks are big piles of numbers that no one  can understand.



### Chapter 5 - Evolution: Nature's Learning Algorithm

The key input to a genetic algorithm, as Holland’s creation came to  be known, is a fitness function. Given a candidate program and some purpose it is meant to fill, the fitness function assigns the program a  numeric score reflecting how well it fits the purpose. 进化主义的学习算法是遗传算法，它是计算数学中用于解决最优化的搜索算法

No one is sure why sex is pervasive in nature, either.

“It takes all the running you can do, to keep in the same place.” In  this view, organisms are in a perpetual arms race with parasites, and  sex helps keep the population varied, so that no single germ can infect  all of it.

Christos Papadimitriou and colleagues have shown that sex optimizes  not fitness but what they call mixability: a gene’s ability to do well on average when combined with other genes. This can be useful when the fitness function is either not known or not constant, as in natural  selection, but in machine learning and optimization, hill climbing tends  to do better.

The architecture of the brain may well have similar faults—the brain  has many constraints that computers don’t, like very limited short-term  memory—and there’s no reason to stay within them.



### Chapter 6 - In the Church of Reverend Bayes

根据贝叶斯定理，给定某原因时出现某结果的可能性越大，那么出现该结果是该原因引起的概率也会越大

这些概率的数量由我们估算而来，且我们可以掌控。一个很简单且受人追捧的假设就是，在给定原因的情况下，所有的结果都相互独立。

运用朴素贝叶斯法来解决预测问题的例子几乎数不胜数。

For Bayesians, learning is “just” another application of Bayes’  theorem, with whole models as the hypotheses and the data as the  evidence: as you see more data, some models become more likely and some  less, until ideally one model stands out as the clear winner.

贝叶斯学派的回答是：概率并非频率，而是一种主观程度上的信任。因此，用概率来做什么由你决定，而贝叶斯推理让你做的事就是：通过新证据来修正你之前相信的东西，得到后来相信的东西（也被人们称为“转动贝叶斯手柄”）。贝叶斯学派对此观点的忠实近乎虔诚，足以经得住200年的攻击和计算。计算机已经强大到足以做贝叶斯推理，且在大数据的辅助下，它们开始占据上风。

P（原因｜结果）= P（原因）× P（结果｜原因）/ P（结果）

Humans, it turns out, are not very good at Bayesian inference, at  least when verbal reasoning is involved. The problem is that we tend to  neglect the cause’s prior probability.

I put just in quotes because implementing Bayes’ theorem on a  computer turns out to be fiendishly hard for all but the simplest  problems, for reasons that we’re about to see.

each combination of symptoms and flu/not flu. A learner that uses  Bayes’ theorem and assumes the effects are independent given the cause  is called a Naïve Bayes classifier.

People often talk about MCMC as a kind of simulation, but it’s not:  the Markov chain does not simulate any real process; rather, we  concocted it to efficiently generate samples from a Bayesian network,  which is itself not a sequential model.

This is justified by the so-called maximum likelihood principle: of  all the possible probabilities of heads, 0.7 is the one under which  seeing seventy heads in a hundred flips is most likely. The likelihood  of a hypothesis is P(data | hypothesis), and the principle says we  should pick the hypothesis that maximizes it.

For a Bayesian, in fact, there is no such thing as the truth; you have a prior distribution over hypotheses, after seeing the data it  becomes the posterior distribution, as given by Bayes’ theorem, and  that’s all.

If we’re willing to assume that all hypotheses are equally likely a  priori, the Bayesian approach now reduces to the **maximum likelihood  principle**. So Bayesians can say to frequentists: “See, what you do is a special case of what we do, but at least we make our assumptions  explicit.”

### Chapter 7: You Are What You Resemble

Analogy was the spark that ignited many of history’s greatest  scientific advances. The theory of natural selection was born when  Darwin, on reading Malthus’s Essay on Population, was struck by the  parallels between the struggle for survival in the economy and in  nature.

Nearest-neighbor is the simplest and fastest learning algorithm ever invented. In fact, you could even say it’s the fastest algorithm of any  kind that could ever be invented.

类比推理有着突出的知识谱系。亚里士多德在他的相似律中就表达了这一点：如果两个事物相似，其中的一个想法会触发另外一个想法。尼采说，真理是一支由暗喻拟人组成的队伍。康德也是其中的信奉者。威廉·詹姆斯认为：“这种意义上的一致性是我们思想的支柱。”

最近邻算法是人类有史以来发明的最简单、最快速的学习算法。

最近邻算法的基础是找到相似物体，而在高维度情况下，相似性的概念就会无.

正态分布认为，数据本质上就落在一个点上（正态分布的平均值），但其周围也会有模糊的东西（由标准差给出）。对吗？在超空间中不是这样的。在高维度正态分布中，你比较有可能得到远离而不是接近平均值的样本。超空间中的钟形曲线看起来更像甜甜圈，而不像钟。当最近邻算法走进这个颠倒的世界时，它会变得非常困惑。所有的例子看起来都一样，同时因为它们距离彼此太远，无法做出有用的预测。如果你将例子统一地随意分布在高维度的立方体中，大部分子会更接近立方体的一个面，而不是接近它们的最近邻。

决策树也无法幸免于维数灾难。但在高维度空间中，超级立方体几乎所有的体积都会出现在超球面外。对于你准确将其标注为正的例子，你会错误地将许多负的例子分类为正，这会让你的准确率骤然下降。

实际上，没有哪种算法能够幸免于维数灾难。这是机器学习中，继过拟合之后，第二个最糟糕的问题。

维数灾难”这个术语由理查德·贝尔曼在50岁时提出的，他是一位控制论理论家。他观察到，控制算法在三维空间中可以起到很好的作用，但在高维度空间中则变得效率极低。

然而，并不是所有东西都丢失了。我们能做的第一件事就是摆脱不相关维度。决策树会自行做好这一点，方法就是计算每种属性的信息增益，然后只使用最能提供信息的属性。对于最近邻算法来说，我们可以完成类似的事情，方法就是首先丢弃所有那些信息增益低于阈值的属性，然后只在简化的空间中测量相似性。这对于一些应用来说足够快、足够好，但不幸的是，这种方法会阻碍许多概念的学习，像XOR逻辑那样：如果当与其他属性结合时，一个属性只描述了有关类别的一些点，而不是关于自己本身，那么它就会被淘汰。一个代价更大但也更智能的选择，就是围绕学习算法来选择属性，并进行爬山算法研究，该研究会不断删除属性，只要不会降低最近邻算法留存数据的准确度

实际上，方程式最重要的东西，就是未在方程式中出现的所有数量：一旦我们知道这些要点是什么，要弄清楚这些要点如何相互依赖，就变得更加容易了。要处理弱相关的属性，一个选择就是掌握属性权值。我们不会让所有维度下相似性的重要性相等，而是“缩减”不那么相关的属性。假设训练例子是房间中的点，那么高度尺寸对于我们的目标就没那么重要了。抛弃这一点会将所有例子投到地板上。调低高度尺寸又更像给屋子加了一层更低的天花板。当计算某点到其他点的距离时，该点的高度仍有价值，但没有它的水平位置那么重要。和机器学习中的许多事情一样，我们可以通过梯度下降来掌握属性权值

在现实中，我们通常会让支持向量机违背一些限制条件，这就意味着将一些例子错误分类，或者利用更少的边际，否则它们就会过拟合。如果在正面区域中间的某个地方有干扰作用的负面例子，那么我们不想让边界在正面区域周围环绕，目的只是为了让例子正确。但支持向量机会因为它弄错的每个例子而受到惩罚，这样就会促使它把错误例子降到最低.

Scientists routinely use **linear regression** to predict continuous  variables, but most phenomena are not linear. Luckily, they’re locally  linear because smooth curves are locally well approximated by straight  lines. So if instead of trying to fit a straight line to all the data,  you just fit it to the points near the query point, you now have a very  powerful nonlinear regression algorithm.

These days all kinds of algorithms are used to recommend items to  users, but weighted **k-nearest-neighbor** was the first widely used one,  and **it’s still hard to beat.**

So a simple way to make nearest-neighbor more efficient is to delete  all the examples that are correctly classified by their neighbors.

Nearest-neighbor was the first algorithm in history that could take advantage of unlimited amounts of data to learn arbitrarily complex  concepts.

But nearest-neighbor **is hopelessly confused by irrelevant attributes**  because they all contribute to the similarity between examples. With  enough irrelevant attributes, accidental similarity in the irrelevant  dimensions swamps out meaningful similarity in the important ones, and  nearest-neighbor becomes no better than random guessing.

It gets even worse. **Nearest-neighbor is based on finding similar objects, and in high dimensions, the notion of similarity itself breaks  down.** Hyperspace is like the Twilight Zone. The intuitions we have from  living in three dimensions no longer apply, and weird and weirder things  start to happen. Consider an orange: a tasty ball of pulp surrounded by  a thin shell of skin. Let’s say 90 percent of the radius of an orange  is occupied by pulp, and the remaining 10 percent by skin. That means 73  percent of the volume of the orange is pulp (0.93). Now consider a  hyperorange: still with 90 percent of the radius occupied by pulp, but  in a hundred dimensions, say. The pulp has shrunk to only about three  thousandths of a percent of the hyperorange’s volume (0.9100). The  hyperorange is all skin, and you’ll never be done peeling it!

With a high-dimensional normal distribution, you’re more likely to  get a sample far from the mean than close to it. A bell curve in  hyperspace looks more like a doughnut than a bell.

In fact, no learner is immune to the curse of dimensionality. It’s  the second worst problem in machine learning, after overfitting. The  term curse of dimensionality was coined by Richard Bellman, a control  theorist, in the fifties.

To handle weakly relevant attributes, one option is to learn  attribute weights. Instead of letting the similarity along all  dimensions count equally, we “shrink” the less-relevant ones.

This “blessing of nonuniformity,” whereby data is not spread  uniformly in (hyper) space, is often what saves the day. The examples  may have a thousand attributes, but in reality they all “live” in a much  lower-dimensional space.

each pixel is a dimension, so there are many, but only a tiny  fraction of all possible images are digits, and they all live together  in a cozy little corner of hyperspace.

the SVM chooses the support vectors and weights that yield the maximum possible margin.

we have to maximize the margin under the constraint that the weights  can only increase up to some fixed value. Or, equivalently, we can  minimize the weights under the constraint that all examples have a given  margin, which could be one—the precise value is arbitrary. This is what  SVMs usually do.

SVMs can be seen as a generalization of the perceptron, because a  hyperplane boundary between classes is what you get when you use a  particular similarity measure (the dot product between vectors). But  SVMs have a major advantage compared to multilayer perceptrons: the  weights have a single optimum instead of many local ones and so learning  them reliably is much easier.

Despite this, SVMs are no less expressive than multilayer perceptrons; the support vectors effectively act as a hidden layer and their weighted average as the output layer.

Provided you can learn them, networks with many layers can express  many functions more compactly than SVMs, which always have just one  layer, and this can make all the difference.

It turns out that we can view what SVMs do with kernels, support  vectors, and weights as mapping the data to a higher-dimensional space  and finding a maximum-margin hyperplane in that space. For some kernels,  the derived space has infinite dimensions, but SVMs are completely  unfazed by that. Hyperspace may be the Twilight Zone, but SVMs have figured out how to navigate it.

### Chapter 8 - Learnning Without a Teacher

Whenever we want to learn a statistical model but are missing some crucial information (e.g., the classes of the examples), we can use EM.

You might have noticed a certain resemblance between k-means and EM,  in that they both alternate between assigning entities to clusters and  updating the clusters’ descriptions. This is not an accident: k-means  itself is a special case of EM, which you get when all the attributes  have “narrow” normal distributions, that is, normal distributions with  very small variance.

The famous hockey-stick curve of global warming, for example, is the  result of finding the principal component of various temperature-related  data series (tree rings, ice cores, etc.) and assuming it’s the  temperature.

One of the most popular algorithms for nonlinear dimensionality  reduction, called Isomap, does just this. It connects each data point in  a high-dimensional space (a face, say) to all nearby points (very  similar faces), computes the shortest distances between all pairs of  points along the resulting network and finds the reduced coordinates  that best approximate these distances.

Here’s an interesting experiment. Take the video stream from Robby’s  eyes, treat each frame as a point in the space of images, and reduce  that set of images to a single dimension. What will you discover? Time.  Like a librarian arranging books on a shelf, time places each image next  to its most similar ones. Perhaps our perception of it is just a  natural result of our brains’ dimensionality reduction prowess. In the  road network of memory, time is the main thoroughfare, and we soon find  it. Time, in other words, is the principal component of memory.

Humans do have one constant guide: their emotions. We seek pleasure and avoid pain.

Pleasure travels back through time, so to speak, and actions can eventually become associated with effects that are quite remote from  them.

Children’s play is a lot more serious than it looks; if evolution  made a creature that is helpless and a heavy burden on its parents for  the first several years of its life, that extravagant cost must be for  the sake of an even bigger benefit. In effect, reinforcement learning is  a kind of speeded-up evolution—trying, discarding, and refining actions  within a single lifetime instead of over generations—and by that  standard it’s extremely efficient.

Pretty much every human skill follows a power law, with different powers for different skills.

In nonrelational learning, the parameters of a model are tied in only  one way: across all the independent examples (e.g., all the patients  we’ve diagnosed). In relational learning, every feature template we  create ties the parameters of all its instances.

If people were independent, each making decisions in isolation,  societies would indeed be predictable, because all those random  decisions would add up to a fairly constant average. But when people  interact, larger assemblies can be less predictable than smaller ones,  not more.

 有一个更大的问题，那就是k均值算法只有在集群易于区分的情况下才能起作用：在超空间中，每个集群可看作一个球团，每个团距离彼此都很远，而它们都有相似的体积，并包含相近数量的物体。

如果其中的一个团出现故障，不好的事情就会发生：细长的集群会分成两个不同的集群，较小的那个集群会被附近更大的集群吸收，以此类推。幸运的是，还有一个更好的选择。

答案让人惊讶：朴素贝叶斯算法。我们开始了解该算法时，它是监督式学习的一种算法。区别在于现在罗比不知道类别，因此它得猜这些东西。

人们主要在两个维度上存在差别：一个是经济问题，一个是社会问题。

强化学习的首要思想是：并不是所有的状态都有奖励（正面或者负面），但每种状态都会有价值。

强化学习通过估算每种状态的价值来做到这一点，从该状态开始你所期望得到的全部奖励，然后选择能将奖励最大化的行为。

讽刺的是，人在最痛苦时学到的东西往往最多

这种手法称为A/B测试，起初主要用在药物试验中，之后运用到许多领域。在这些领域中，数据可以根据需要集中起来，从营销到对外援助。它还可以概括成一次性尝试许多变化组合，而不会忽略什么样的改变会带来什么（或者失去什么）。A/B测试证明常听到的批评言论的错误：大数据只对寻找相关关系有好处，对寻找因果关系则没用。除了哲学要点，掌握因果关系就是掌握行动的效果，而任何有数据流并能影响数据流的人都能做到这一点——从一岁孩子在浴缸中戏水到总统再次参加竞选。

### Chapter 9 - The Pieces Of The Puzzle Fall Into Place



**Bagging** generates random variations of the training set by resampling, applies the same learner to each one, and combines the results by **voting.**

One of the cleverest metalearners is boosting, created by two learning theorists, Yoav Freund and Rob Schapire. Instead of combining  different learners, boosting repeatedly applies the same classifier to  the data, using each new model to correct the previous ones’ mistakes.  It does this by assigning weights to the training examples; the weight  of each misclassified example is increased after each round of learning,  causing later rounds to focus more on it.

As you approach it from a distance, you can see that the city is made  up of three concentric circles, each bounded by a wall. The outer and  by far widest circle is Optimization Town. Each house here is an  algorithm, and they come in all shapes and sizes. Some are under  construction, the locals busy around them; some are gleaming new; and  some look old and abandoned. Higher up the hill lies the Citadel of  Evaluation. From its mansions and palaces orders issue continuously to  the algorithms below. Above all, silhouetted against the sky, rise the  Towers of Representation.

**Representation** is the formal language in which the learner expresses  its models. The symbolists’ formal language is logic, of which rules and  decision trees are special cases. The connectionists’ is neural  networks. The evolutionaries’ is genetic programs, including classifier  systems. The Bayesians’ is graphical models, an umbrella term for  Bayesian networks and Markov networks. The analogizers’ is specific  instances, possibly with weights, as in an SVM.

The evaluation component is a scoring function that says how good a  model is. Symbolists use accuracy or information gain. Connectionists  use a continuous error measure, such as squared error, which is the sum  of the squares of the differences between the predicted values and the  true ones. Bayesians use the posterior probability. Analogizers (at  least of the SVM stripe) use the margin. In addition to how well the  model fits the data, all tribes take into account other desirable  properties, such as the model’s simplicity.

Optimization is the algorithm that searches for the highest-scoring model and returns it. The symbolists’ characteristic search algorithm  is inverse deduction. The connectionists’ is gradient descent. The  evolutionaries’ is genetic search, including crossover and mutation. The  Bayesians are unusual in this regard: they don’t just look for the best  model, but average over all models, weighted by how probable they are.  To do the weighting efficiently, they use probabilistic inference  algorithms like MCMC. The analogizers (or more precisely, the SVM  mavens) use constrained optimization to find the best model.

This is what nature does: evolution creates brain structures, and individual experience modulates them. 计算复杂性是一件事，人类复杂性是另外一件事。

It looks like you’ve boiled down the five optimizers to a simple  recipe: genetic search for structure and gradient descent for  parameters. And even that may be overkill. For a lot of problems, you  can whittle genetic search down to hill climbing if you do three things:  leave out crossover, try all possible point mutations in each  generation, and always select the single best hypothesis to seed the  next generation.

You use accuracy to evaluate yes-or-no predictions and squared error  for continuous ones. Fitness is just the evolutionaries’ name for the  scoring function; you can make it anything you want, including accuracy  and squared error. Posterior probability reduces to squared error if you  ignore the prior probability and the errors follow a normal  distribution. The margin, if you allow it to be violated for a price,  becomes a softer version of accuracy: instead of paying no penalty for a  correct prediction and a penalty of one for an incorrect prediction,  the penalty is zero until you get inside the margin, at which point it  starts to steadily go up.

Suddenly you see it: an SVM is just a multilayer perceptron with a  hidden layer composed of kernels instead of S curves and an output  that’s a linear combination instead of another S curve.

Each rule is just a highly stylized neuron. For example, the rule If  it’s a giant reptile and breathes fire then it’s a dragon is just a  perceptron with weights of one for it’s a giant reptile and breathes  fire and a threshold of 1.5. And a set of rules is a multilayer  perceptron with a hidden layer containing one neuron for each rule and  an output neuron to form the disjunction of the rules.

product of factors is now a sum of terms, just like an SVM, a voting  set of rules, or a multilayer perceptron without the output S curve.

Everyone has the flu and If someone has the flu, so do their friends.  In standard logic, this would be a pretty useless pair of statements:  the first would rule out any state with even a single healthy person,  and the second would be redundant. But in an MLN, the first formula just  means that there’s a feature X has the flu for every person X, with the  same weight as the formula. If people are likely to have the flu, the  formula will have a high weight, and so will the corresponding features.  A state with many healthy people is less probable than one with few,  but not impossible. And because of the second formula, a state where  someone has the flu and their friends don’t is less probable than one  where healthy and infected people fall into separate clusters of  friends.

On the one hand, assuming the learner is part of the world is an  assumption—in principle, the learner could obey different laws from  those the world obeys—so it satisfies Hume’s dictum that learning is  only possible with prior knowledge. On the other hand, it’s an  assumption so basic and hard to disagree with that perhaps it’s all we  need for this world.

Backpropagation is a form of gradient descent,

The world is not a random jumble of interactions; it has a  hierarchical structure: galaxies, planets, continents, countries,  cities, neighborhoods, your house, you, your head, your nose, a cell on  its tip, the organelles in it, molecules, atoms, subatomic particles.  The way to model it, then, is with an MLN that also has a hierarchical  structure.

If you look at it one way, machine learning is only a small part of  the CanceRx project, well behind data gathering and human contributions.



### Chapter 10 - This Is The World Of Machine Learning

The statistician knows that prediction is hard, especially about the  future, and the computer scientist knows that the best way to predict  the future is to invent it, but the unexamined future is not worth  inventing.

机器学习是最后一根稻草，如果可以开始进行自我编程，那么所有控制它们的希望都肯定会落空。著名科学家如史蒂芬·霍金已经呼吁趁早研究这个问题。放轻松，备有终极算法的人工智能接管世界的概率是零。原因很简单：不像人类，计算机本身并没有自己的意志。它们是工程师生产的产品，而不是进化体。即使无限强大的计算机，也仅仅是我们意志的延伸，没什么可怕的

“奇点”这个术语源于数学，表示此处有一个使函数变成无穷大函数的点。例如，当x为0时，1/x这个函数就会有奇点，因为1除以0的得数是无穷大。在物理学中，奇点的典型例子就是黑洞：密度为无限大的点，此处有限数量的物质被塞入无穷小的空间中。奇点的唯一问题就在于它们并不是真正存在的（你上次给0个人切蛋糕，每个人都会拿到无数块蛋糕是什么时候）。在物理学中，如果某个理论预测某物无穷大，那么这个理论就会出问题。举个恰当的例子，广义相对论也许会预测，黑洞有无穷大的密度，因为它忽略了量子效应。同样，智能无法永远都在提高。库兹韦尔承认了这一点，但他指的是技术改进（处理器速度、记忆容量等）中的一系列指数曲线，并提出这种增长的界限是如此遥远，我们不必纠缠于这些界限。

---

我觉得作者提的 the Master Algorithm 这个概念还是有点玄学，并不是很能认同，就当作五大流派的科普书读吧，来龙去脉前世今生，读完之后感觉对各种算法的选择有了一点新的认识。读**原版**就好，中文翻译十分辣鸡，建议全网封杀译者，我读着读着都觉得这些中国字儿我都认识啊，为啥就让人无法理解呢？中间甚至有论点跟原文译的是相反意思，真脑仁疼，译者闭眼盲打的吗？

