-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 19, 2022 at 03:29 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS contracts2;
USE contracts2;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contracts`
--

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE `contract` (
  `contract_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `contract_name` varchar(50) NOT NULL,
  `starting_date` date NOT NULL,
  `expiration_date` date NOT NULL,
  `signing_date` date DEFAULT NULL,
  `total_cost` DECIMAL(6,2) NOT NULL,
  `items` varchar(50) NOT NULL,
  `contract_terms` TEXT,
  `Legal_officer_name` varchar(50) NOT NULL,
  `warranty_start_date` date NOT NULL,
  `warranty_end_date` date NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `company_phone` varchar(50) NOT NULL,
  `contract_file` VARCHAR(255),
  `status` enum('EXPIRED','APPROVED','REJECTED','WAITING') DEFAULT 'WAITING',
  `signed_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contract`
--

INSERT INTO `contract` (
  `employee_id`, `contract_name`, `starting_date`, `expiration_date`, 
  `signing_date`, `total_cost`, `items`, `contract_terms`, 
  `Legal_officer_name`, `warranty_start_date`, `warranty_end_date`, 
  `company_name`, `address`, `company_phone`, `status`
) VALUES
(1, 'Property Lease Agreement 1', '2025-01-01', '2025-12-31', '2025-01-01', 12000.00, 'Office Building', 'The tenant is responsible for regular maintenance, utility payments, and complying with the building’s regulations. The lease is renewable at the tenant’s request, subject to availability of space and mutual agreement on lease terms.', 'Admin One', '2025-01-01', '2026-01-01', 'RealEstate Corp', '123 Main St, Cityville', '555-1234', 'WAITING'),
(1, 'Property Lease Agreement 2', '2025-02-01', '2025-12-31', '2025-02-01', 15000.00, 'Residential Apartment', 'Tenant agrees to maintain the premises in good condition, pay for all utilities, and abide by community rules. Pets are prohibited unless authorized by the landlord. Rent is due on the 1st of each month with a grace period of 5 days.', 'Admin One', '2025-02-01', '2026-02-01', 'City Rentals', '456 Oak St, Cityville', '555-5678', 'WAITING'),
(2, 'Commercial Lease Contract 1', '2025-03-01', '2025-09-01', '2025-03-01', 20000.00, 'Commercial Property', 'The tenant may not sublet or assign the lease without prior written consent. Rent is payable quarterly, and the tenant is responsible for all repairs and maintenance of the leased property. Any violation of the terms may result in early termination of the lease.', 'Admin Two', '2025-03-01', '2025-09-01', 'BizSpace', '789 Pine St, Cityville', '555-9876', 'WAITING'),
(2, 'Residential Lease Agreement 1', '2025-04-01', '2026-04-01', '2025-04-01', 8000.00, '2-Bedroom Apartment', 'Tenant must pay rent monthly and ensure the apartment is kept clean and safe. No illegal activities are allowed in the apartment. The landlord reserves the right to inspect the property quarterly. Tenant is responsible for minor repairs and maintenance.', 'Admin Two', '2025-04-01', '2026-04-01', 'Sunny Homes', '101 Maple St, Cityville', '555-1357', 'APPROVED'),
(1, 'Property Management Agreement 1', '2025-05-01', '2025-12-31', '2025-05-01', 10000.00, 'Property Management', 'The manager shall handle all aspects of property upkeep, including finding tenants, collecting rent, and conducting repairs. The manager is also responsible for ensuring compliance with local regulations and laws related to property use.', 'Admin One', '2025-05-01', '2025-12-31', 'HomeManage Co.', '202 Birch St, Cityville', '555-2468', 'WAITING'),
(2, 'Retail Lease Agreement 1', '2025-06-01', '2026-06-01', '2025-06-01', 18000.00, 'Retail Store', 'The lease includes provisions for rent escalation every 12 months, with adjustments based on inflation rates. The tenant is responsible for all utility bills, property taxes, and insurance for the leased space. The landlord will handle the building’s structural repairs and maintenance.', 'Admin Two', '2025-06-01', '2026-06-01', 'ShopIt Ltd.', '123 Commercial Ave, Cityville', '555-3210', 'REJECTED'),
(1, 'Property Lease Agreement 3', '2025-07-01', '2026-07-01', '2025-07-01', 9500.00, 'Office Space', 'Tenant is responsible for keeping the premises clean and safe, ensuring no damage occurs during occupancy. The property must be returned in the same condition at the end of the lease term, except for normal wear and tear. Rent is payable in advance, with a late fee applicable after the 5th day of the month.', 'Admin One', '2025-07-01', '2026-07-01', 'Corporate Ventures', '202 Oak St, Cityville', '555-1111', 'WAITING'),
(2, 'Luxury Property Lease', '2025-08-01', '2026-08-01', '2025-08-01', 30000.00, 'Luxury Villa', 'The tenant must pay all rent on time and maintain the property to a high standard. Any damage or alteration to the property must be reported immediately. The lease includes access to the property’s amenities such as the pool, gym, and garden, which must be treated with respect.', 'Admin Two', '2025-08-01', '2026-08-01', 'Luxury Living', '303 Palm St, Cityville', '555-7777', 'APPROVED'),
(1, 'Office Lease Agreement', '2025-09-01', '2026-09-01', '2025-09-01', 25000.00, 'Office Building', 'The tenant shall pay for all utilities, and the space shall only be used for office purposes. No construction or renovation is allowed without the landlord’s written consent. Rent must be paid monthly, and a security deposit equal to two months’ rent is required upon signing.', 'Admin One', '2025-09-01', '2026-09-01', 'Global Offices', '404 Walnut St, Cityville', '555-2222', 'WAITING'),
(2, 'Property Lease Agreement 4', '2025-10-01', '2026-10-01', '2025-10-01', 11000.00, 'Mixed-use Property', 'Tenant is responsible for property maintenance and repairs. A security deposit of one month’s rent is required. The lease includes an option to renew for an additional year. Rent is due on the 1st of each month and is subject to periodic increases.', 'Admin Two', '2025-10-01', '2026-10-01', 'Prime Property', '505 Cedar St, Cityville', '555-8888', 'WAITING');


-- --------------------------------------------------------

--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(70) NOT NULL,
  `message` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `role` enum('user', 'admin') NOT NULL DEFAULT 'user',
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `email`, `phone`, `role`, `password`) VALUES
('Admin One', 'admin1@ex.com', '+962 777111111', 'admin', '12345678'),
('Admin Two', 'admin2@ex.com', '+962 777222222', 'admin', '12345678');

-- Insert three users
INSERT INTO `users` (`name`, `email`, `phone`, `role`, `password`) VALUES
('User One', 'user1@ex.com', '+962 777333333', 'user', '12345678'),
('User Two', 'user2@ex.com', '+962 777444444', 'user', '12345678'),
('User Three', 'user3@ex.com', '+962 777555555', 'user', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`contract_id`);

-- Now, you can add the foreign key for `employee_id`
ALTER TABLE `contract`
  ADD KEY `contract_ibfk_1` (`employee_id`);

ALTER TABLE `contract`
  ADD CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contract`
--
ALTER TABLE `contract`
  MODIFY `contract_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contract`
--
ALTER TABLE `contract`
  ADD CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
