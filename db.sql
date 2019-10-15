CREATE DATABASE `admin`;

CREATE TABLE `admin_users` (
  `user_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_name` varchar(256) NOT NULL,
  `user_mobile` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` text NOT NULL
);