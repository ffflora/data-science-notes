# SQL Practice
Hospital Database

#### Write a query in SQL to find out the floor where the maximum # of rooms are available.
![](https://i.imgur.com/3keHzpt.jpg)

```SQL
SELECT BlockFloor as Floor, COUNT(*) as available
FROM Room
WHERE Unavailable = 0
GROUP BY Floor
ORDER BY available DESC
LIMIT 1;

```

#### Write a query in SQL to count the number of unavailable rooms for each block in each floor.

```SQL
SELECT BlockFloor as floor, BlockCode as block, COUNT(*) as available
FROM Room
WHERE Unavailable = 1
GROUP BY block, floor

```
#### Write a query in SQL to count the number of available rooms for each block in each floor.

```SQL
SELECT BlockFloor as floor, BlockCode as block, COUNT(*) as available
FROM Room
WHERE Unavailable = 0
GROUP BY block, floor

```
#### Write a query in SQL to find all the information of the nurses who are yet to be registered.
![](https://i.imgur.com/5pGuGBD.jpg)

```SQL
SELECT * FROM Nurse
WHERE Registered = 0;
```

#### Write a query in SQL to obtain the name of the physicians who are the head of the department.
![](https://i.imgur.com/54V41ic.jpg)

```SQL
SELECT physician.name AS Physician, Department.name AS Department
FROM Physician, Department
WHERE Department.head = Physician.employeeid;
```