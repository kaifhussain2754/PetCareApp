-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2024 at 04:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simba-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'kaifhussain', 'hussainkaif950@gmail.com', '$2a$10$AjNgy4kho/d4V4gf4RNwLOk1O/ddOUMtdAzB5hLF8UKOyoMqFStP6', '2024-07-25 15:14:48', '2024-07-25 15:14:48');

-- --------------------------------------------------------

--
-- Table structure for table `carerecords`
--

CREATE TABLE `carerecords` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `timestamp` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carerecords`
--

INSERT INTO `carerecords` (`id`, `name`, `location`, `notes`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, '', '', '', '2024-07-25 20:54:58', '2024-07-25 20:54:58', '2024-07-25 20:54:58'),
(2, 'HUSSAIN', 'This is a test', 'testtesttetsd', '2024-07-25 20:56:06', '2024-07-25 20:56:06', '2024-07-25 20:56:06');

-- --------------------------------------------------------

--
-- Table structure for table `care_records`
--

CREATE TABLE `care_records` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `care_records`
--

INSERT INTO `care_records` (`id`, `name`, `location`, `notes`, `timestamp`) VALUES
(19, 'Deworming Medicine', 'Home', '1 Medicine Wasted, 1 given using syringe', '2024-07-26 15:34:01');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `expenseName` varchar(255) NOT NULL,
  `expenseDescription` text DEFAULT NULL,
  `expenseAmount` decimal(10,2) NOT NULL,
  `dateOfExpense` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `expenseName`, `expenseDescription`, `expenseAmount`, `dateOfExpense`) VALUES
(14, 'SIMBA Purchase', 'Made a purchase of simba himselft from al wasi collection', 5500.00, '2024-04-27'),
(15, 'Litter and Scoop', 'Purchased Drools litter and scoop', 550.00, '2024-04-27'),
(16, 'Drools Dry Food', 'Drools Dry food of ocean fish flavour', 700.00, '2024-04-28'),
(17, 'Basket', 'Travel basket for simba', 150.00, '2024-05-01'),
(18, 'Ear Cleaning Liquid', 'Purchased ear cleaning liquid', 190.00, '2024-07-27'),
(19, 'Shampoo', 'Himalaya Erina-EP Shampoo', 250.00, '2024-07-27'),
(20, 'Whiskas Wet Food', 'Overall Wet food till date', 2500.00, '2024-07-27'),
(21, 'Creamy Treat', 'GrainZero Creamy Treats till date', 1500.00, '2024-07-27'),
(22, 'Dry Treat', 'Temptation dry treat till date', 300.00, '2024-07-27'),
(23, 'Grainzero dry food', 'Purchased Grainzero dry food', 740.00, '2024-07-27'),
(24, 'Toy', 'Feather toy', 200.00, '2024-07-27'),
(25, 'Wet Wipes', 'Wet wipes from flipkart', 194.00, '2024-07-27'),
(26, 'Nail Cutter', 'Nail Cutter', 149.00, '2024-07-27'),
(27, 'Comb', 'Blue Comb', 149.00, '2024-07-27'),
(28, 'Comb', 'Steel Comb', 100.00, '2024-07-27'),
(29, 'Powder', 'anti infection powder', 200.00, '2024-07-27'),
(30, 'Collar', 'blue neck collar with ring', 40.00, '2024-07-27'),
(31, 'Litter', 'Pet Pattern litter non scented', 549.00, '2024-07-27'),
(32, 'Litter', 'Pet Pattern litter scented', 649.00, '2024-07-27'),
(33, 'Roller', 'Hair Removal roller', 153.00, '2024-07-27'),
(34, 'Deworming Medicine', 'Deworming Medicine 4 tablets', 270.00, '2024-07-27'),
(35, 'Chicken', 'Raw chicken till date', 2500.00, '2024-07-27'),
(36, 'Grooming', 'Removed Mattes', 100.00, '2024-07-26'),
(37, 'bowl', 'Steel Bowl', 100.00, '2024-07-26'),
(38, 'Bowl', 'Other plastic bowls', 100.00, '2024-07-26'),
(39, 'Litter', 'Local Litter unscented', 300.00, '2024-07-27');

-- --------------------------------------------------------

--
-- Table structure for table `reminders`
--

CREATE TABLE `reminders` (
  `id` int(11) NOT NULL,
  `reminder_name` varchar(255) NOT NULL,
  `reminder_date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reminders`
--

INSERT INTO `reminders` (`id`, `reminder_name`, `reminder_date_time`) VALUES
(27, 'Deworming Medicine', '2024-10-06 02:30:00'),
(28, 'Tricat Trio Vaccine', '2025-10-01 04:30:00'),
(29, 'Powder Tail', '2024-07-27 12:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `todolist`
--

CREATE TABLE `todolist` (
  `id` int(11) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `completed` tinyint(1) DEFAULT 0,
  `priority` enum('low','medium','high') DEFAULT 'medium',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todolist`
--

INSERT INTO `todolist` (`id`, `task_description`, `completed`, `priority`, `created_at`, `updated_at`) VALUES
(26, 'Buy Litter box Link - https://amzn.in/d/0iAmVjM9', 0, 'medium', '2024-07-27 09:34:28', '2024-07-27 09:34:30'),
(27, 'Whiskas Wet food from amazon', 0, 'medium', '2024-07-27 09:35:07', '2024-07-27 09:35:07');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `petName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `createdAt`, `updatedAt`, `petName`) VALUES
(9, 'test', '$2a$10$nG47O7yRX1QhymEyHAw4Kuu9C/JA6hoLu6/5gqg7dVIzTpBfg8Xae', '2024-07-27 12:48:17', '2024-07-27 12:48:17', NULL),
(10, 'test2', '$2a$10$RlXyfOXkoyQ2PO8ag2rXiOoFkuPcjHg4j0usW4q1.ua0w6rqcu9Sa', '2024-07-27 13:29:01', '2024-07-27 13:29:01', 'simba');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `carerecords`
--
ALTER TABLE `carerecords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `care_records`
--
ALTER TABLE `care_records`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reminders`
--
ALTER TABLE `reminders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carerecords`
--
ALTER TABLE `carerecords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `care_records`
--
ALTER TABLE `care_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `reminders`
--
ALTER TABLE `reminders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
