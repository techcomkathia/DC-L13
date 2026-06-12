CREATE DATABASE projetosLive06;
USE projetosLive06;

-- Tabela users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    userName VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL
);

-- Tabela projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(45),
    date VARCHAR(45) -- date
);

-- Tabela de associação users_has_projects
CREATE TABLE users_has_projects (
    users_id INT NOT NULL,
    projects_id INT NOT NULL,
    PRIMARY KEY (users_id, projects_id),
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (projects_id) REFERENCES projects(id)
);
