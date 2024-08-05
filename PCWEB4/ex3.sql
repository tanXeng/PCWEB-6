--@block
USE company_data;
--@block
SELECT genre,
    AVG(year)
FROM books
GROUP BY genre;
--@block
SELECT genre,
    MAX(year)
FROM books
GROUP BY genre;
--@block
SELECT genre,
    MIN(year)
FROM books
GROUP BY genre;
--@block
SELECT *
FROM books
ORDER BY year DESC;
--@block
SELECT *
FROM books
ORDER BY year DESC,
    author ASC;
--@block
SELECT genre,
    year
FROM books
ORDER BY genre,
    year DESC;
--@block
INSERT INTO books (title, author, year, genre, sub_genre)
VALUES ('peepee1', 'poopoo', 2024, 'fiction', 'fiction');
INSERT INTO books (title, author, year, genre, sub_genre)
VALUES ('peepee2', 'poopoo', 2024, 'fiction', 'fiction');
--@block
UPDATE books
SET year = 1000
WHERE title = 'peepee1';
UPDATE books
SET author = 'pooop'
WHERE title = 'peepee2';
--@block
DELETE FROM books
WHERE title = 'peepee1';
DELETE FROM books
WHERE title = 'peepee2';
--@block
INSERT INTO reviews (book_id, average_rating)
VALUES (65, 9.1)
INSERT INTO reviews (book_id, average_rating)
VALUES (66, 9.1) --@block
UPDATE reviews
SET average_rating = 9.0
WHERE book_id = 65;
UPDATE reviews
SET average_rating = 8.0
WHERE book_id = 66;
--@block
DELETE FROM reviews
WHERE book_id = 65;
DELETE FROM reviews
WHERE book_id = 66;
--@block
USE movie_reviews --@block
SELECT *
FROM movies
WHERE movie_name LIKE '%2';
--@block
SELECT *
FROM movies
WHERE movie_name LIKE '%ovi%';
--@block
SELECT *
FROM movies
WHERE movie_name LIKE 'm%';
--@block
SELECT *
FROM userinfo
WHERE password LIKE '%p%';