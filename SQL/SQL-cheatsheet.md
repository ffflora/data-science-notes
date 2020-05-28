
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
- Usually `AND` has a higher priority than `OR`, therefore use parentheses in `WHERE` clause with these operators, which could remove all the ambiguity.
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
- If place wildcard in the beginning of the search process, would make the process *slow*.

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


```

### GROUP BY & HAVING
- All the cols need to be listed in the `GROUP BY` clause, except aggregation functions.
- Can't group by aggregation functions.
- If there are NULL in the lines, all the NULLs will be returned as a group.
- Orders in the scripts: 
    WHERE, GROUP BY, ORDER BY
- `WHERE` is about filtering by lines; `HAVING` is about filtering by groups.
- Another way to understand `WHERE` and `HAVING`: `WHERE` filters before grouping, yet `HAVING` filters after grouping. The lines excluded by `WHERE` are not in the groups.
- Differences btw `ORDER BY` vs `GROUP BY`:

| ORDER BY                                                           | GROUP BY                                                                                            |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Sorts generated output.                                            | Grouping rows. However the output may not be in group order.                                        |
| Can use it upon any cols (includes the cols that are not selected) | Only selected cols or expressions cols may be used, and every selected col expression must be used. |
| Never required.                                                    | Required if using cols(or expressions) with agg functions.                                          |
- Should include `ORDER BY` subquery to the `GROUP BY`, in order to get the right sorted results.

 Conclusion (Clauses and ordering)
 
| Clause | Description                      | Is-required |
|--------|----------------------------------|-------------|
| SELECT | Cols(expressions) to be returned | √           |
| FROM |       Table to retrieve data  from   |  only if select data from table           |
| WHERE |  row-level filtering       |   x      |
| GROUP BY | Groups specs     |  yes if only aggregation calculation are involved by groups           |
| HAVING|   GROUP-level filtering       |    x         |
| ORDER BY | Sort output      |     x        |

```SQL
SELECT vend_id, COUNT(*) AS num_prods
FROM Products
GROUP BY vend_id;

--------------------------------
/* Return the customers that have more than two orders. */
SELECT cust_id, COUNT(*) AS orders FROM Orders
GROUP BY cust_id
HAVING COUNT(*) >= 2;
-- Can't use WHERE here, because the filtering is based on an aggregation function.

--------------------------------
/* Return the vendors that have more than two products that the prices are at least 4. */
SELECT vend_id, COUNT(*) AS num_prods FROM Products
WHERE prod_price >= 4
GROUP BY vend_id
HAVING COUNT(*) >= 2;

--------------------------------
/* Return the order numbers and number of items sold, which are at least three, sort by items number */
SELECT order_num, COUNT(*) AS items FROM OrderItems
GROUP BY order_num
HAVING COUNT(*) >= 3
ORDER BY items, order_num;
```

### SUBQUERY 



```SQL
/* Return the customer info which have bought the product PGAN01 */
SELECT cust_name,cust_contact 
FROM Customers
WHERE cust_id IN (SELECT cust_id
    FROM Orders
    WHERE order_num IN (SELECT order_num
                        FROM OrderItems
                        WHERE prod_id = 'RGAN01'));
                        
--------------------------------

SELECT cust_name,
       cust_state,
        (SELECT COUNT(*)
        FROM Orders
        WHERE Orders.cust_id = Customers.cust_id) AS orders
FROM Customers
ORDER BY cust_name;
```


### JOIN


```SQL

SELECT vend_name, prod_name, prod_price FROM Vendors, Products
WHERE Vendors.vend_id = Products.vend_id;

-- Same as : -- 
SELECT vend_name, prod_name, prod_price FROM Vendors INNER JOIN Products
ON Vendors.vend_id = Products.vend_id;

--------------------------------
SELECT cust_name, cust_contact
FROM Customers
WHERE cust_id IN (SELECT cust_id
                  FROM Orders
                  WHERE order_num IN (SELECT order_num
        FROM OrderItems
        WHERE prod_id = 'RGAN01'));
        
-- Same as : --
SELECT cust_name, cust_contact
FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
AND OrderItems.order_num = Orders.order_num AND prod_id = 'RGAN01';

--------------------------------
SELECT cust_name
 FROM Customers
WHERE cust_contact = 'Jim Jones'

--------------------------------
SELECT Customers.cust_id, Orders.order_num FROM Customers LEFT OUTER JOIN Orders
ON Customers.cust_id = Orders.cust_id;

--------------------------------
/* Return all the customers with the number of orders. */
SELECT Customers.cust_id, COUNT(Orders.order_num) AS num_ord
FROM Customers INNER JOIN Orders
ON Customers.cust_id = Orders.cust_id
GROUP BY Customers.cust_id;
```

### Combine queries
- `UNION` can combine multiple SELECT results, return as one set.
- When use `UNION`, each selection must have same cols, expressions or aggregation functions;
- The datatype of the selection must be compatible when use `UNION`
- It is by default that `UNION` would remove duplicated rows, to avoid that, use `UNION ALL`.
- 
```SQL

SELECT cust_name, cust_contact, cust_email FROM Customers
WHERE cust_state IN ('IL','IN','MI');
UNION
SELECT cust_name, cust_contact, cust_email FROM Customers
WHERE cust_name = 'Fun4All';

>>> --OUTPUT--
Fun4All
Fun4All
Village Toys
The Toy Store

Denise L. Stephens 
Jim Jones
John Smith
Kim Howard

dstephens@fun4all.com 
jjones@fun4all.com 
sales@villagetoys.com 
NULL

/* Alternative way */
SELECT cust_name, cust_contact, cust_email
FROM Customers
WHERE cust_state IN ('IL','IN','MI')
OR cust_name = 'Fun4All';

```


### INSERT, CREATE
- `INSERT INTO` + `VALUES` to an already exist table;
- `INSERT INTO`+ `SELECT` to an already exist table from another table;
- Copy cols and values from an old table to a new table: `SELECT INTO`
- `CREATE TEMPORARY TABLE`

```SQL


INSERT INTO Customers(cust_id,
                      cust_name,
                      cust_address,
                      cust_city,
                      cust_state,
                      cust_zip,
                      cust_country,
                      cust_contact,
                      cust_email)
VALUES('1000000006',
       'Toy Land',
       '123 Any Street',
       'New York',
       'NY',
       '11111',
       'USA',
       NULL,
       NULL);
       
--------------------------------
INSERT INTO Customers(cust_id,
                      cust_contact,
                    cust_email,
                    cust_name,
                    cust_address,
                    cust_city,
                    cust_state,
                    cust_zip,
                    cust_country) SELECT cust_id,
       cust_contact,
       cust_email,
       cust_name,
       cust_address,
       cust_city,
       cust_state,
       cust_zip,
       cust_country
FROM CustNew;

--------------------------------
SELECT *
INTO CustCopy
FROM Customers;

/* But this line has been used slightly differently in MariaDB、MySQL、Oracle、PostgreSQL and SQLite: */

CREATE TABLE CustCopy AS
SELECT * FROM Customers;

--------------------------------
CREATE TEMPORARY TABLE Scandals AS 
(
    SELECT *
    FROM shoes
    WHERE shoe_type = 'scandals'
);
```

### UPDATE & DELETE
- Use `UPDATE` carefully, include `WHERE` 
- If want to delete some values, set them to `NULL`.
- If want to delete all the rows from the table, use `TRUNCATE TABLE` than `DELETE`, it does the same as `DELETE` but it runs faster.



```SQL

UPDATE Customers
SET cust_email = 'kim@thetoystore.com' WHERE cust_id = '1000000005';

-- Update more than one cols:--
UPDATE Customers
SET cust_contact = 'Sam Roberts',
cust_email = 'sam@toyland.com' WHERE cust_id = '1000000006';

--------------------------------
DELETE FROM Customers
WHERE cust_id = '1000000006';


```

### CREATE 
- Define a new Table: `CREATE`
![-w507](media/15903058475682/15905621498702.jpg)
- Make changes to the created table: `ALTER TABLE`
- Delete table: `DROP TABLE`


```SQL
ALTER TABLE Vendors
ADD vend_phone CHAR(20);

ALTER TABLE Vendors
DROP COLUMN vend_phone;

--------------------------------
DROP TABLE CustCopy;


```

### VIEWS
- Views return the results from the search queries that happened elsewhere, thus views don't contain the actual data or tables, they just the results. 
- `CREATE VIEW `, `DROP VIEW`

```SQL
CREATE VIEW ProductCustomers AS
SELECT cust_name, cust_contact, prod_id FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
AND OrderItems.order_num = Orders.order_num;


--------------------------------
--------------------------------

--------------------------------

--------------------------------

--------------------------------
```


### Window Functions
- A window function performs a calculation across a set of table rows that are somehow related to the current row. This is comparable to the type of calculation that can be done with an aggregate function. But unlike regular aggregate functions, use of a window function does not cause rows to become grouped into a single output row — the rows retain their separate identities. Behind the scenes, the window function is able to access more than just the current row of the query result.


- `OVER` and `PARTITION BY` 
- You can’t use window functions and standard aggregations in the same query. More specifically, you can’t include window functions in a `GROUP BY` clause.

```SQL

SELECT standard_amt_usd,
       SUM(standard_amt_usd) OVER (ORDER BY occurred_at) AS running_total
FROM orders

----------------------------

SELECT standard_amt_usd,
       DATE_TRUNC('year', occurred_at) as year,
       SUM(standard_amt_usd) OVER (PARTITION BY DATE_TRUNC('year', occurred_at) ORDER BY occurred_at) AS running_total
FROM orders
```