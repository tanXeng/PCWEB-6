CREATE DATABASE realInstagram;
USE realInstagram;
--@block
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    caption VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);
--@block
ALTER TABLE posts
MODIFY COLUMN image mediumTEXT