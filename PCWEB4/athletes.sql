CREATE DATABASE athletes;
USE athletes;
--@block
CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description text NOT NULL,
    image VARCHAR(255) NOT NULL
);
