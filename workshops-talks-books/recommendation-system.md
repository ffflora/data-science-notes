

# What is a Recommendation System?

Recommendation systems that help people find thing when the process of finding the information you need to make choices might be a little bit challenging, because there's too many choices.

There are two types of recommendation engine:

- most popular (**Non personalized: normally top-n algorithm**)
- by features among all users -> this needs to classify the users into various segments. (**personalized**)



# Techniques

### Non-personalized:

- Popularity 
- Frequency count
- Mean Rating
- Association Rule Mining 
  - Apriori algorithm: beers and diapers 

Pros: no need to analyze the personalized data

## Personalized: Popular Model Method

1. Content Based
2. Collaborative Filtering

### <u>Content Based Filtering</u>

To recommend based on the description of the item and  what this person likes in the past (user's preference).

Some keywords:

**profile vector**: contains the past behavior of the user.

**item vector**: where all the info related to the movies. 

TD-IDF, Labels, Attributes, Tags

*interesting points to think of: cultural-wise, language, and etc.*

#### Advantages

- No need for data on other users and no cold start and sparsity 
- Able to recommend users with unique taste.
- Able to recommend new and unpopular items
- Can provide explanation for recommendation 

#### **Disadvantage**

- Requires **<u>domain knowledge</u>**.

- well-structured attributes that align with preferences

- the model has limited ability to expand on the user's existing interests.

  

### <u>Collaborative filtering</u> 

Based on the assumption that people who agreed in the past will agree in the future, and that they will like similar kinds of items as they liked in the past.

#### Disadvantages:

- cannot handle fresh items, cold start problem.
- User-based:
  - use past agreement to predict future aggrement 
    - taste has changed
    - seasonal,... 
- Item-based:
  - item_item relationships need to be stable
    - stable user preferences
    - could have special cases that are difficult (calendars, short-lives books, ...)
    - main limitation, lower serendipity 
- Matrix Factorization
  - cost is high 
  - hard to explain 

#### Two way:

- Neighborhood-based
- Latent Factor Model

#### <u>Nearest Neighbor CF</u>

to predict user (say, John) 's preference for the movie 'iron man'  

Calculate similarity.

##### ***User-Based Collaborative Filtering:***

- Use user-item rating matrix
- Use user-user correlations 
- Find highly correlation users 
- Recommend items prefered by users

##### ***Item-Based Collaborative Filtering:***

- Use user-item rating matrix
- Use item-item correlations
- Find highly correlation users
- Recommend items with highest correlation

#### <u>Latend Factors</u>

**matrix factorization** algorithms work by decomposing the user-item interaction matrix into the product of two lower dimentional rectangular matrices. 



### <u>Deep Learning</u> 

---

# Design

Start from senarios. 



- Collecting Opinion and Experience Data

- Finding the Relevant Data for a purpose

- Computing the recommendations 

- Presnrting the data in a useful way

- ---

  

- Users : who are the users, what are their goals?
- Data: What are the characteristics of the data on which recommendations are based?
- Product: What is the overall application the recommender is part of?

### Engineer side:

Data collection -> ETL -> Feature Engineering -> Recommender model -> Result -> Service 

#### Data Collection:

- What we want to know?
- What we can observe?
  - ratings
    - reliable?
    - preference change?
    - means?
  - Actions 
    - click?(not interest? )
    - purchase?

---



Reference:

[Data Application Lab - Recommendation System](https://www.youtube.com/watch?v=lJLkcknhbiI)

