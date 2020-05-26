
# SQL Cheatsheet

### SELECT

```SQL
SELECT DISTINCT vend_id 
FROM Vendors 
LIMIT 5;

LIMIT 5 OFFSET 5; // return 5 results start from line 5 
```
### ORDER BY
- This should be the last clause after the `SELECT` statement.
- It is legal to ORDER BY the columns that are not being selected.
- Default is ordering from A - Z, if descending, need to add `DESC` in the end.
- DESC only works on col name that listed in front. If want to order multiple cols descendingly, need to add `DESC` after each col listed. 




```SQL
SELECT prod_name
FROM Products
ORDER BY prod_name;

SELECT prod_id, prod_price, prod_name
FROM Products
ORDER BY prod_price, prod_name;  -- ORDER BY multiple cols 

ORDER BY 2,3; -- This works the same as the last line 

ORDER BY 2,3 DESC ;

--------------------------------
SELECT prod_id, prod_price, prod_name
FROM Products
ORDER BY prod_price DESC, prod_name; -- DESC only works on col name that listed in front.

```

### WHERE
- WHERE first, then ORDER BY.
- Use `IS NULL` with `WHERE` to check for null.

```SQL
SELECT prod_name, prod_price FROM Products
WHERE prod_price <= 10 
ORDER BY prod_price;

--------------------------------
SELECT prod_name, prod_price FROM Products
WHERE prod_price BETWEEN 5 AND 10 
ORDER BY prod_price;

--------------------------------
SELECT prod_name, prod_price FROM Products
FROM Products
WHERE prod_price IS NULL;
```

### More filtering 
- Use `AND` and `OR` operator
- `WHERE` clause could use with many `AND` or `OR`
- Usually `AND` has more priority than `OR`, therefore use parentheses in `WHERE` clause with these operators, which could remove all the ambiguity.
- `IN` has the same function with `OR`, but usually is more clear and more efficient, and it runs more faster.
- `IN` could include other `SELECT` clauses.
- `NOT` in `WHERE` clause only does one thing: negate all the conditions afterwards. It never use by itself.


```SQL
    
SELECT prod_id, prod_price, prod_name
FROM Products
WHERE vend_id = 'DLL01' AND prod_price <= 4; 

--------------------------------
SELECT prod_name, prod_price
FROM Products
WHERE (vend_id = 'DLL01' OR vend_id = 'BRS01') -- Add parentheses, otherwise will execute AND first and output wrong results.
    AND prod_price >=10;
    
--------------------------------
SELECT prod_name, prod_price
FROM Products
WHERE vend_id IN ( 'DLL01', 'BRS01' ) 
ORDER BY prod_name;

-- SAME AS ⬇️--
SELECT prod_name, prod_price
FROM Products
WHERE vend_id = 'DLL01' OR vend_id = 'BRS01' 
ORDER BY prod_name;

--------------------------------
SELECT prod_name
FROM Products
WHERE NOT vend_id = 'DLL01' 
ORDER BY prod_name;

-- third line as same as: --
WHERE vend_id != 'DLL01' 

```

### Wildcard
- wildcard: special character that matches some keywords
- search pattern: a combination of keyword and/or wildcard 
- `LIKE` is ( °◅° ) predicate, rather than an operator.
- `%`: any character that shows up for any times.
    - Useful situation: to search for some email address that match some condition: `WHERE email LIKE 'b%@vii.im'`
    - But `%` won't match any `NULL`: `WHERE prod_name LIKE '%'` never returns results that the values are `NULL`.
- `_` has the same functionality as `%`, but it only  matches for single character.
- `[]` : a set of characters, which uses to match the keywords in specific location. This search pattern uses any **one** char of the set.
    - In this case, negation is represented by `^` sign, or `NOT` operator. 
- Don't overuse wildcards: operators > wildcards.
- If place wildcard in the beginning of the search process, would make the process slow.

```SQL

SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE 'Fish%';

--------------------------------
SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE '__ inch teddy bear'; -- notice that the space after the __ is needed. 

--------------------------------
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '[JM]%' -- names that start with J or M, and follow with any characters
ORDER BY cust_contact;

/*Output*/
Jim Jones
John Smith 
Michelle Green

--------------------------------
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '^[JM]%' -- names that not start with J or M, and follow with any characters
ORDER BY cust_contact;

-- Same as: --
SELECT cust_contact
FROM Customers
WHERE NOT cust_contact LIKE '[JM]%' 
ORDER BY cust_contact;

```

### Calculated Field 
- Example of calculated field:
    - company's name and address, but usually they are in different tables.
    - city, state, zip code usually in different tables, but they are needed together when print the address
    - calculation like mean, avg  
- They are not physically in the database, but they are created when running the `SELECT` clauses.
- Use `+` or `||` to concatenate cols.
- TRIM:
    - remember to use `RTRIM()` to get rid of the extra spaces on the right of the value.
    - `LTRIM()`: get rid of the extra space of the left of the value.
    - `TRIM()`: get rid of the space of both sides.
- rename: `AS`
- 


```SQL

SELECT vend_name || ' (' || vend_country || ')' -- use || in SQLite, use + in SQL
FROM Vendors
ORDER BY vend_name;

/* Use RTRIM() to get rid of the extra space to the right of the value. */
SELECT RTRIM(vend_name) || ' (' || RTRIM(vend_country) || ')' 
FROM Vendors
ORDER BY vend_name;

--------------------------------
SELECT prod_id,
       quantity,
       item_price,
       quantity*item_price AS expanded_price
FROM OrderItems
WHERE order_num = 20008;

```

### More functions
- `UPPER()`, `LOWER()`
- `LENGTH()`,`LTRIM()`,`RTRIM()`,`TRIM()`
- `RIGHT()`,`LEFT()`: returns the character to the right/left of the string.
- `SOUNDEX()`: returns the value that is sound-like the keyword.
    - For Example, a name in the table is 'Michelle', but the actual value is 'Michael',  if search by the real name will have nothing return, thus in this case use `SOUNDEX()`
- Functions are not all portable between different SQL systems.
    
```SQL
SELECT cust_name, cust_contact
FROM Customers
WHERE SOUNDEX(cust_contact) = SOUNDEX('Michael Green'); 

--------------------------------
SELECT order_num
FROM Orders
WHERE strftime('%Y', order_date) = '2012';
```

### Data Manipulation Functions
- Aggregation functions are most portable functions.
    - line number of some cols: `COUNT()`
        - `COUNT(*)` counts all the lines in a col, no matter each line is NULL or not.
        - `COUNT(col)` counts all the lines that have valid values.
    - sum of certain values: `SUM()`
        - it ignore the NULL lines.
    - `MAX()`,`MIN()`,`AVG()`
        - `AVG()` can only use on a single col, and it neglects the lines that the values are NULL.
        - when dealing with categorical data, `MAX()` return the last line of the col after **sorting**.
        - `MAX()` ignore NULL lines.
    
    - ...
- **DISTINCT** values

```SQL
SELECT AVG(prod_price) AS avg_price
FROM Products
WHERE vend_id = 'DLL01'; -- calculate the avg price from certain vendor 

--------------------------------
/* Subquery */
SELECT prod_name, AVG(prod_price) as avg 
FROM
   (SELECT DISTINCT prod_name,prod_price FROM Products);
>>> 8 inch teddy bear|6.82333333333333

--------------------------------
/* Combined Aggregation Functions */
SELECT COUNT(*) AS num_items,
       MIN(prod_price) AS price_min,
       MAX(prod_price) AS price_max,
       AVG(prod_price) AS price_avg
 FROM Products;
--------------------------------

```

    