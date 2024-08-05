--@block
use movie_reviews;
--@block
SELECT COUNT(*) AS review_count
FROM reviews
WHERE movie_id = 1;
--@block
SELECT *
FROM reviews
    INNER JOIN (
        SELECT *
        FROM reviews
        WHERE user_id IN (
                SELECT following_id
                FROM user_relation
                WHERE follower_id = '1'
            )
    ) AS usr_id ON usr_id.user_id = reviews.user_id --@block
SELECT *
FROM reviews
WHERE user_id IN (
        SELECT following_id
        FROM user_relation
        WHERE follower_id = '1'
    );
--@block
USE company_data --@block
SELECT books.title,
    reviews.average_rating
FROM books
    LEFT JOIN reviews ON books.id = reviews.book_id;
--@block
SELECT books.author,
    books.title,
    reviews.average_rating
FROM books
    INNER JOIN reviews ON books.id = reviews.book_id
WHERE reviews.average_rating > 4.4;