# SVM 

![](https://sandipanweb.files.wordpress.com/2018/04/svm_slack.png)

### Q: Assume there are two sets of data points that are linearly separable in the space, if we do projection along the SVM hyperplane, will the projections on the hyperplane still be linear separable?

![](https://flashgene.com/wp-content/uploads/2019/04/6df49e15833b2a040bc51a544a775721.jpg)

- For any two sets of linear separable points, the projections along the hyperplane by SVM are **not linear separable**. We could start thinking of it in 2D space and then more higher dimensional space.

- Since the hyperplane is only determined by the support vectors (will prove it later), we let there exist a situation that only contains the support vectors, and we prove this problem by contradiction. Assume there exist a hyperplane such that all the projected support vector along the hyperplane are linear separable. By looking at the image below, if we connect A-B and the perpendicular bisector (中垂线) would be the more optimal "plane" for A and B, and this contradict with our assumption in the beginning.  Therefore, the projected support vector along the hyperplane are not linear separable.

  ![](https://flashgene.com/wp-content/uploads/2019/04/96419d52b9df3b83737425881199ad8e.jpg)

  Now need to show that a hyperplane is only determined by the support vectors. Consider the KKT conditions:

  ![](https://flashgene.com/wp-content/uploads/2019/04/8b50a941d3fa709a273a9a48948cfd5e.png)

  ![](https://flashgene.com/wp-content/uploads/2019/04/48739d740d773790425779831d633918.png)

  ![](https://flashgene.com/wp-content/uploads/2019/04/02220f67930fc5d2fd034924701b2476.png)

  ![](https://flashgene.com/wp-content/uploads/2019/04/3a9740872fb13d5d0edb69b9664ab59a.png)

  ![](https://flashgene.com/wp-content/uploads/2019/04/84b7fa9468b7bb1aaf5f8bfc446f4708.png)

  by the third and forth conditions, when `g(w*) ≤ 0`, `a* = 0` compare these  with Lagrange dual function ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/5306166ccec9dfec7e521b2cc9726f49c693ffaa)

  we have ![](https://flashgene.com/wp-content/uploads/2019/04/69e3f641aa13480b4658a5a3788190e7.png)

  with ![](https://flashgene.com/wp-content/uploads/2019/04/86fc2b11cb0cc784204ad1c41f6c9f59.png)

  We could see that all the coefficients for all the variables, except the support vectors, are all 0, which implies that the SVM classification result is only relies on the support vectors. 

  Therefore, we have proved that the projections of the linear separable datapoints along the hyperplane are not linear separable.

# Logistic Regression

### Q: Comparison between linear regression and logistic regression?

- Linear Regression deals with regression problems, and Logistic Regression deals with classification problems.

Q: How to deal with multi variables classification?

- if each data point only maps to one category, we can assume that all the data points follow geometric distribution, and use **Softmax Regression** to do the classification. ![](https://flashgene.com/wp-content/uploads/2019/04/6a2f00f5f94ce1877b585a5d01ffe836.png)



​	which <img src="https://flashgene.com/wp-content/uploads/2019/04/939e3bc45f67f02ddd89db2f992d066f.png" style="zoom:50%;" /> is the normalization of the probability.  Especially when there are only two categories, <img src="https://flashgene.com/wp-content/uploads/2019/04/b8968b9f4890e5766437320e3cab5f6b.png" style="zoom:50%;" />, and subtract `θ1` , we have <img src="https://flashgene.com/wp-content/uploads/2019/04/bf1db944c53d2bc8a916e2ecf186361e.png" style="zoom:50%;" /> <img src="https://flashgene.com/wp-content/uploads/2019/04/e0355e7e3ddf06d81d1b9fac246b1033.png" style="zoom:50%;" />, which looks the same as binary classification with logistic regression. Therefore, multivariate classification is somehow an extension of binary classification, so one of the option is that we could train k binary logistic regression classifiers. 