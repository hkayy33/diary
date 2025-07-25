DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS diary_entries;

-- USERS TABLE
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DIARY ENTRIES TABLE
CREATE TABLE diary_entries (
    id  INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date TIMESTAMP NOT NULL,
    text TEXT NOT NULL,
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE

);
