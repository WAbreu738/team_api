

DROP DATABASE meal_planner_db;
CREATE DATABASE meal_planner_db;

\c meal_planner_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL
);

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    serving_size INT NOT NULL,
    type VARCHAR(100) NOT NULL,
    day_of_week VARCHAR(100) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
