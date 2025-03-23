-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2025 at 06:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contract2`
--

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE `contract` (
  `contract_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `contract_name` varchar(50) NOT NULL,
  `starting_date` date DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `cost` decimal(10,2) NOT NULL,
  `items` varchar(50) NOT NULL,
  `contract_terms` text NOT NULL,
  `owner` varchar(50) NOT NULL,
  `warranty_start_date` date DEFAULT NULL,
  `warranty_end_date` date DEFAULT NULL,
  `company_name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `company_phone` varchar(50) NOT NULL,
  `contract_file` varchar(255) DEFAULT NULL,
  `status` enum('EXPIRED','APPROVED','REJECTED','WAITING','PENDING') NOT NULL,
  `signed_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contract`
--

INSERT INTO `contract` (`contract_id`, `employee_id`, `contract_name`, `starting_date`, `expiration_date`, `cost`, `items`, `contract_terms`, `owner`, `warranty_start_date`, `warranty_end_date`, `company_name`, `address`, `company_phone`, `contract_file`, `status`, `signed_by`) VALUES
(36, 1, 'Rental Agreement - House 1', NULL, NULL, 1000.00, 'Rental Service', 'The tenant agrees to pay rent on the first of each month, with late fees applicable after five days; The landlord agrees to maintain the property in good condition, including necessary repairs and maintenance, during the rental period.', 'Admin One', NULL, NULL, 'PropertyCorp', '123 Main St', '555-1234', NULL, 'WAITING', NULL),
(37, 1, 'Leasing small Flat ', NULL, NULL, 350.00, 'Leasing Service', 'The lessee agrees to lease the flat for the specified duration and return the property in the same condition; The lessor will provide regular cleaning services every month and ensure the safety of the property throughout the lease term.', 'Admin One', NULL, NULL, 'FlatSolutions', '456 Oak St', '555-5678', NULL, 'WAITING', NULL),
(38, 1, 'House Management Service ', NULL, NULL, 900.00, 'Management Service', 'The management company will oversee all aspects of the property, including tenant relations, rent collection, and maintenance; The property owner agrees to pay management fees on a monthly basis, which are calculated as a percentage of the rental income.', 'Admin One', NULL, NULL, 'ManageIt', '789 Pine St', '555-9876', NULL, 'WAITING', NULL),
(39, 2, 'House Painting service ', NULL, NULL, 20.00, 'Rental Service', 'The tenant is responsible for utilities, and the rent payment must be received on time to avoid penalties; The landlord will repair any significant issues within 15 days of being notified by the tenant, excluding damages caused by the tenant.', 'Admin Two', NULL, NULL, 'EstateRent', '321 Elm St', '555-1122', NULL, 'WAITING', NULL),
(40, 2, 'Leasing Agreement - Flat 5', NULL, NULL, 900.00, 'Leasing Service', 'The lessee must maintain the cleanliness and safety of the flat during the lease period; The lessor agrees to inspect the property biannually and ensure that all appliances and utilities are functional and in good condition.', 'Admin Two', NULL, NULL, 'RentIt', '654 Maple St', '555-3344', NULL, 'WAITING', NULL),
(41, 2, 'House maintenance Agreement', NULL, NULL, 40.00, 'Management Service', 'The management service will handle the advertising, leasing, and maintenance of the property; The property owner agrees to a monthly management fee, which is based on the rental income, and will ensure the property is in good condition at all times.', 'Admin Two', NULL, NULL, 'HomeCare', '987 Birch St', '555-5566', NULL, 'WAITING', NULL),
(49, 2, 'House maintenance Agreement', '2025-03-25', '2025-03-28', 120.00, 'Management Service', 'The management service will handle the advertising, leasing, and maintenance of the property; The property owner agrees to a monthly management fee, which is based on the rental income, and will ensure the property is in good condition at all times.', 'Admin Two', NULL, NULL, 'HomeCare', '987 Birch St', '555-5566', NULL, 'APPROVED', 3),
(52, 1, 'new cont', NULL, NULL, 10.00, 'housee', 'term1, 2', 'Admin One', '2025-03-24', '2025-04-03', 'com1', 'addr', '0777', NULL, 'WAITING', NULL),
(53, 1, 'new cont', '2025-03-23', '2025-03-29', 60.00, 'housee', 'term1, 2', 'Admin One', '2025-03-24', '2025-04-03', 'com1', 'addr', '0777', NULL, 'APPROVED', 3),
(54, 2, 'House Painting service ', '2025-03-23', '2025-03-29', 120.00, 'Rental Service', 'The tenant is responsible for utilities, and the rent payment must be received on time to avoid penalties; The landlord will repair any significant issues within 15 days of being notified by the tenant, excluding damages caused by the tenant.', 'Admin Two', NULL, NULL, 'EstateRent', '321 Elm St', '555-1122', NULL, 'APPROVED', 4),
(55, 2, 'House maintenance Agreement', '2025-03-23', '2025-03-25', 80.00, 'Management Service', 'The management service will handle the advertising, leasing, and maintenance of the property; The property owner agrees to a monthly management fee, which is based on the rental income, and will ensure the property is in good condition at all times.', 'Admin Two', NULL, NULL, 'HomeCare', '987 Birch St', '555-5566', NULL, 'REJECTED', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`contract_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contract`
--
ALTER TABLE `contract`
  MODIFY `contract_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
