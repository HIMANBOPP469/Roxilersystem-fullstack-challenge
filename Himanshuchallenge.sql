CREATE DATABASE Himanshuchallenge;
USE Himanshuchallenge;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user', 'owner') DEFAULT 'user',
    address VARCHAR(255)
);

CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    address VARCHAR(255),
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);

CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT,
    user_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    FOREIGN KEY (store_id) REFERENCES stores(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    storeId INT NOT NULL,
    rating INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS stores;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user', 'store_owner') NOT NULL DEFAULT 'user',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    storeId INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (storeId) REFERENCES stores(id),
    UNIQUE KEY unique_rating (userId, storeId)
);
INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@example.com', 'admin123', 'admin'),
('Himanshu', 'user@example.com', 'user123', 'user'),
('StoreOwner', 'store@example.com', 'store123', 'store_owner');
INSERT INTO stores (name, description) VALUES
('Store A', 'Best electronics store'),
('Store B', 'Grocery and daily needs'),
('Store C', 'Fashion and clothing');
