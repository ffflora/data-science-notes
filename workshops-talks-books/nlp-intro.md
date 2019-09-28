NLP, a field of intersection of 

- CS
- Linguistic
- Artificial Intelligence/ machine learning （本质上都是优化问题）

![](https://www.altoros.com/blog/wp-content/uploads/2018/05/intersection-of-machine-deep-learning-natural-language-processing-artificial-intelligence.png)

### NLP Hard

- Sparsity (稀疏性)
  - ex: 100*100 matrix,  only 10 non-zero numbers, the rest of the spots are filled with 0s. --> **sparse matrix**
  - Any model could be considered as a mathematical function, which it has inputs and outputs. Ex: Sentimental analysis model, the input could be a sentence, and the output is either 0 or 1, which represents positive or negative.  But a math function can't take a string as an input, we need to convert the string into **vectors**. 
  - Text feature: categorical, 假设一个东西有三个选项，one-hot encoding --> 001, 100, 010
  - Large vocabulary, encoding of words makes sparse matrix, which is hard for NLP models to learn anything. 
- Ambiguity 
  - white house vs White House
  - I saw her duck (v. 蹲下) 
  - Language Model 可以解决这个问题
- i18n (internationalization)
  - 中文分词 

### Ambiguity

- part of speech (POS)
  - book (n,v), record (n,v)
- Po'lysemy (一词多义): one word that has different meaning
  - bank, spring
- ★phrase ≠ Σ words 
  - make + up ≠ make up
  - 2 + 2 ≠ 2 + 2
  - The + United + Sates ≠ The United Sates 
- （以上问题在很多模型里都可以自动被解决, Bert）
- Language is evolving 
  - Faceversary 
  - Solutions: the models needed to be updated frequently.

### Tokenization

**Def**.

- English 
  - Punctuation splitting (, . space)
  - ex: I | like | cats
- Chinese 
  - doesn't have spaces, makes it hard to split.
  - ex: 我|喜欢|猫
  - Segmentation (models such as: HMM,CRF, NN)

### How NLP is doable

Features

- the number of features (words) is large enough 

Word Embedding (ex 通过50个数字来描述一个单词) use vector to represent a word

why do we need word embedding?****

- Word2vec
- GloVe
- FastText

[Embedding projector](https://projector.tensorflow.org/)

Word Embedding keep semantic meaning（单词具体的意思，词义），还有极性的信息( female or male, positive or negative) 

### NLP Pipeline

![](https://raw.githubusercontent.com/ffflora/data-science-notes/master/archived-pics/open-course/nlp.png)

stemming vs lemmatization



