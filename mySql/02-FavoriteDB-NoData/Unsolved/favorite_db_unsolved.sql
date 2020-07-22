
-- 	USE animals_db;
--     
--     CREATE TABLE people; (
-- 		name VARCHAR(30) NOT NULL, 
-- 		has_pet BOOLEAN NOT NULL,
-- 		pet_name VARCHAR(30),
-- 		pet_age INTEGER(10)
--     );
    

CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  -- Make an numeric column called "score" --
	food VARCHAR(50) NOT NULL,
    score INTEGER(5) NOT NULL
);

USE favorite_db;
CREATE TABLE favorite_songs (
	song VARCHAR(50) NOT NULL,
    artist VARCHAR(30),
    score INTEGER(5)
  -- Make a string column called "song" which cannot contain null --
  -- Make a string column called "artist" --
  -- Make an integer column called "score" --
);

CREATE TABLE favorite_movies (
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    movie VARCHAR(30) NOT NULL,
    five_times BOOLEAN DEFAULT 0,
    score INTEGER(5),
    
    
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  -- Create a string column called "movie" which cannot be null --
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  -- Make an integer column called "score" --
  -- Set the primary key of the table to id --
);