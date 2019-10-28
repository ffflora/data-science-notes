# Pre-knowledge Reserve

Sentence representation

Bag of words representation

Sen2Vec/Doc2Vec

# Some highlights of the paper

Instead of using a word to predict its surrounding context, this model encode a sentence to predict the sentences around it. The model depends on having a training corpus of contiguous text.  

The model treat skip-thoughts in the framework of encoder-decoder models. That is, an encoder maps words to a sentence vector and a decoder is used to generate the surrounding sentences.  

Since the goal is to evaluate skip-thoughts as a general feature extractor, we keep text pre-processing to a minimum.   When encoding new sentences, no additional preprocessing is done other than basic tokenization. This is done to test the robustness of our vectors. 

### Sentence Representation

#### One-hot word representation

words in a sentence are considered as separated, so in terms of sentence representation, one-hot doesn't take a fully consideration that there might be information hidden in the structure of the sentences.

#### Weighted word embedding based word representation

TFIDF

SIF 

#### NN Language Model based sentence representation

uses unsupervised text corpus, and uses the co-occurrence between the words (共现信息), could be trained in large scale corpus. 

**Pro**: uses unsupervised corpus, low in cost; uses language model to learn information

**Cons**: it ignores the hidden semantic connection (语义联系) behind the sentences, which is not reasonable.

#### Paraphrased sentences pairs based sentence representation

A is B's father

B is A's son.

paraphrase of each other.

There are good resources of paraphrase sentences corpus out there, and they are used to train language models. corpus could be machine translated sentences; could model the relationships between the sentences.

**Pros**: model the similarity and dissimilarity relationship between the sentences.

**Cons**: only models out the correlation, but ignores the complex sematic connection. 

#### Skip-thought

uses the large scale unsupervised corpus to model the relationship/connection between the sentences. 

---

## Motivation

Bert is also an application of sentence representation tool.

Between the sentences, there are always sematic connections, is it possible to predict **one** sentence before and after the **center sentence**? 

### Skip-Gram

For example, there are some words:

<u>like deep</u> **learning** <u>and NLP</u>

which **learning** is the center word, <u>like deep</u>  and <u>and NLP</u> are the output context words. 

**Skip-thought** uses the same idea, the only difference is that the subject here is sentence level instead of word level.

## Conclusion 

Innovation of this paper:

1. It provides a new method for sentence representation, which it
   - considered the relationships between sentences, and 
   - it uses unsupervised corpus
2. it proves that there exist a model, such that if it has been trained **once**, it could be uses for **multiple** times.
3. The experiments' results are in great detail, which helps for later research.

