Areas that ML solve:

Not only prediction, but also **replacing Heuristic Rules**.

It converts examples into knowledge.

### **Steps to frame an ML problem:**

1. cast into a ML problem, what is being predicted, what data is needed?
2. cast into a software problem, what is the API that is going to be using, who will the service, how will they doing it today?
3. cast it into a data problem; what are the key actions to collect, analyze, predict and react to the data or predictions?

### Pipelines:

A streaming pipeline in addition to a catch pipeline.

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\pipeline1.png)

Sophistication around real-time data is key

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\pipeline2.png)

### Avoid these 10 ML pitfall:

![](C:\Users\Flora\Documents\python\data-science-notes\archived-pics\coursera\gcp\secret-sauce.png)

The value of ML comes along the way.

### Statistical Measurements and Acceptable Tradeoffs

**False positive rate (α)** = type I error = 1 − specificity = FP / (FP + TN) = 180 / (180 + 1820) = 9%

**False negative rate (β)** = type II error = 1 − sensitivity = FN / (TP + FN) = 10 / (20 + 10) = 33%True positive rate (TPR), 

**Recall**, Sensitivity, probability of detection = Σ True positive/Σ Condition positive

**Accuracy** (ACC) = Σ True positive + Σ True negative/Σ Total population

**Precision** = Σ True positive/Σ Predicted condition positive

Evaluation Metrics in light of acceptable tradeoffs between False Positives and False Negatives.





[Facets - Visualization tool](https://github.com/PAIR-code/facets)









Using datalab by GCP

1. enable API
2. `gcloud compute zone list` pick a time zone in Could Shell
3. `datalab create mydatalabvm --zone <ZONE>`
4. Web Preview, change port to *8081* 