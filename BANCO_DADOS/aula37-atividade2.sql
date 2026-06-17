CREATE DATABASE IF NOT EXISTS projetosLive06;
USE projetosLive06;

-- Tabela users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    userName VARCHAR(45) NOT NULL ,
    password VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL
);

-- Tabela projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(45),
    date VARCHAR(45) 
);

-- Tabela de associação users_has_projects
CREATE TABLE IF NOT EXISTS users_has_projects (
    users_id INT NOT NULL,
    projects_id INT NOT NULL,
    PRIMARY KEY (users_id, projects_id),
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (projects_id) REFERENCES projects(id)
);
