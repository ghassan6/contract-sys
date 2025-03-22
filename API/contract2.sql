-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2025 at 06:25 PM
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
  `starting_date` date NOT NULL,
  `expiration_date` date NOT NULL,
  `signing_date` date DEFAULT NULL,
  `total_cost` decimal(10,2) NOT NULL,
  `items` varchar(50) NOT NULL,
  `contract_terms` text NOT NULL,
  `Legal_officer_name` varchar(50) NOT NULL,
  `warranty_start_date` date NOT NULL,
  `warranty_end_date` date NOT NULL,
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

INSERT INTO `contract` (`contract_id`, `employee_id`, `contract_name`, `starting_date`, `expiration_date`, `signing_date`, `total_cost`, `items`, `contract_terms`, `Legal_officer_name`, `warranty_start_date`, `warranty_end_date`, `company_name`, `address`, `company_phone`, `contract_file`, `status`, `signed_by`) VALUES
(1, 1, 'Property Lease Agreement 1', '2025-03-15', '2025-04-20', '2025-03-20', 100.00, 'Office Building', 'The tenant is responsible for regular maintenance, utility payments, and complying with the building’s regulations. The lease is renewable at the tenant’s request, subject to availability of space and mutual agreement on lease terms.', 'Admin One', '2025-01-01', '2026-01-01', 'RealEstate Corp', '123 Main St, Cityville', '555-1234', NULL, 'APPROVED', 3),
(3, 2, 'Commercial Lease Contract 1', '2025-03-01', '2025-04-01', '2025-03-25', 1000.00, 'Commercial Property', 'The tenant may not sublet or assign the lease without prior written consent. Rent is payable quarterly, and the tenant is responsible for all repairs and maintenance of the leased property. Any violation of the terms may result in early termination of the lease.', 'Admin Two', '2025-03-01', '2025-09-01', 'BizSpace', '789 Pine St, Cityville', '555-9876', NULL, 'APPROVED', 3),
(4, 2, 'Residential Lease Agreement 1', '2025-03-15', '2026-04-15', '2025-03-20', 8000.00, '2-Bedroom Apartment', 'Tenant must pay rent monthly and ensure the apartment is kept clean and safe. No illegal activities are allowed in the apartment. The landlord reserves the right to inspect the property quarterly. Tenant is responsible for minor repairs and maintenance.', 'Admin Two', '2025-04-01', '2026-04-01', 'Sunny Homes', '101 Maple St, Cityville', '555-1357', NULL, 'APPROVED', 5),
(6, 2, 'Retail Lease Agreement 1', '2025-03-01', '2025-03-24', '2025-03-21', 64024.00, 'Retail Store', 'The lease includes provisions for rent escalation every 12 months, with adjustments based on inflation rates. The tenant is responsible for all utility bills, property taxes, and insurance for the leased space. The landlord will handle the building’s structural repairs and maintenance.', 'Admin Two', '2025-06-01', '2026-06-01', 'ShopIt Ltd.', '123 Commercial Ave, Cityville', '555-3210', NULL, 'APPROVED', 3),
(8, 2, 'Luxury Property Lease', '2025-08-01', '2026-08-01', '2025-08-01', 45535.00, 'Luxury Villa', 'The tenant must pay all rent on time and maintain the property to a high standard. Any damage or alteration to the property must be reported immediately. The lease includes access to the property’s amenities such as the pool, gym, and garden, which must be treated with respect.', 'Admin Two', '2025-08-01', '2026-08-01', 'Luxury Living', '303 Palm St, Cityville', '555-7777', NULL, 'APPROVED', 3),
(9, 1, 'Office Lease Agreement', '2025-09-01', '2026-09-01', '2025-09-01', 1400.00, 'Office Building', 'The tenant shall pay for all utilities, and the space shall only be used for office purposes. No construction or renovation is allowed without the landlord’s written consent. Rent must be paid monthly, and a security deposit equal to two months’ rent is required upon signing.', 'Admin One', '2025-09-01', '2026-09-01', 'Global Offices', '404 Walnut St, Cityville', '555-2222', NULL, 'WAITING', 5),
(10, 2, 'Property Lease Agreement 4', '2025-10-01', '2026-10-01', '2025-10-01', 7966.00, 'Mixed-use Property', 'Tenant is responsible for property maintenance and repairs. A security deposit of one month’s rent is required. The lease includes an option to renew for an additional year. Rent is due on the 1st of each month and is subject to periodic increases.', 'Admin Two', '2025-10-01', '2026-10-01', 'Prime Property', '505 Cedar St, Cityville', '555-8888', NULL, 'WAITING', 5),
(11, 1, 'Condo Lease Agreement', '2025-03-10', '2025-04-01', '2025-03-22', 12000.00, 'Condo Building', 'Tenant is responsible for regular property maintenance, ensuring the safety and cleanliness of the building, as well as timely payments for utilities and rent. In case of damages, the tenant must report them immediately, and failure to do so may result in penalties or repairs being charged to the tenant.', 'Admin One', '2025-03-10', '2026-03-10', 'RealEstate Corp', '123 Main St, Cityville', '555-1234', 'lease1.pdf', 'APPROVED', 3),
(13, 1, 'Studio Lease Agreement', '2025-03-20', '2025-09-01', '2025-03-20', 20000.00, 'Studio Apartment', 'Tenant agrees to pay all utilities and taxes related to the property. The tenant is also responsible for ensuring that no alterations, renovations, or modifications to the leased space are made without written consent from the landlord, as any unauthorized changes may result in penalties or eviction.', 'Admin One', '2025-03-20', '2025-09-01', 'BizSpace', '789 Pine St, Cityville', '555-9876', 'contract1.pdf', 'WAITING', NULL),
(15, 2, 'Condo Lease Agreement', '2025-03-22', '2026-03-22', '2025-03-22', 30000.00, 'Luxury Condo', 'The tenant is responsible for paying rent on time and ensuring that the condo is properly maintained. Additionally, the tenant must comply with the building’s rules and regulations, including noise ordinances, trash disposal, and the proper use of shared amenities such as the pool, gym, and parking area.', 'Admin Two', '2025-03-22', '2026-03-22', 'Luxury Living', '303 Palm St, Cityville', '555-7777', 'luxury1.pdf', 'APPROVED', NULL),
(16, 2, 'Studio Lease Agreement', '2025-03-25', '2026-03-25', '2025-03-25', 18000.00, 'Retail Studio', 'Tenant is responsible for all utilities, including water, electricity, and internet. Rent is to be paid monthly, and any failure to pay on time will result in a late fee. The tenant must also ensure the premises are secure, locking all windows and doors when leaving the property and maintaining the overall safety of the studio.', 'Admin Two', '2025-03-25', '2026-03-25', 'ShopIt Ltd.', '123 Commercial Ave, Cityville', '555-3210', 'retail1.pdf', 'REJECTED', NULL),
(17, 1, 'Condo Management Agreement', '2025-03-18', '2025-03-20', '2025-03-18', 10000.00, 'Property Management', 'The management company shall handle all aspects of property maintenance, including finding new tenants, handling tenant issues, collecting rent, and conducting repairs. The manager is also required to regularly inspect the property to ensure it remains in good condition, and the tenant is responsible for allowing access for inspections as needed.', 'Admin One', '2025-03-18', '2025-03-20', 'HomeManage Co.', '202 Birch St, Cityville', '555-2468', 'management1.pdf', 'APPROVED', NULL),
(18, 6, 'Studio Lease Agreement', '2025-03-18', '2025-03-24', '2025-03-18', 18000.00, 'Retail Studio', 'Tenant is responsible for paying all rent and utility bills associated with the leased space. The tenant must also ensure that the property is maintained and that any damage is repaired promptly. Additionally, the tenant is prohibited from subleasing the studio without written consent from the landlord, and must comply with all local laws regarding business operations within the studio.', 'Michael Brown', '2025-03-18', '2025-03-24', 'ShopIt Ltd.', '123 Commercial Ave, Cityville', '555-3210', 'retail1.pdf', 'APPROVED', NULL),
(19, 6, 'House Lease Agreement', '2025-03-18', '2025-03-28', '2025-03-18', 20000.00, 'Luxury House', 'The tenant is required to maintain the exterior and interior of the house in good condition. Rent payments are due monthly, and a penalty will be charged for any late payments. Additionally, the tenant must comply with all building regulations and not engage in any illegal activity on the property. Any breach of these terms may result in termination of the lease agreement.', 'Michael Brown', '2025-03-18', '2025-03-28', 'Luxury Living', '303 Palm St, Cityville', '555-7777', 'luxury2.pdf', 'APPROVED', NULL),
(20, 1, 'new contract', '2025-03-22', '2025-03-29', NULL, 400.00, 'house', 'term1. term 2', 'Admin One', '2025-03-29', '2025-03-29', 'com', '123 add', '077777', NULL, 'WAITING', NULL),
(23, 1, 'anorth', '2025-03-22', '2025-03-27', NULL, 500.00, 'ggggg', 'sdggsd', 'Admin One', '2025-03-29', '2025-03-31', 'sdg', 'sdg', 'sdggg', NULL, 'WAITING', NULL),
(24, 1, 'nnw', '2025-03-22', '2025-03-27', '2025-03-22', 400.00, 'sdgsgdgds', 'gsd', 'Admin One', '2025-03-22', '2025-03-15', 'sgdsgd', 'dfhh', 'hhhh', NULL, 'REJECTED', 4),
(34, 1, 'last', '2025-03-22', '2025-04-01', '2025-03-22', 850.00, 'dddd', 'term and another', 'Admin One', '2025-03-28', '2025-04-04', 'cooom', 'adrr', '17899', NULL, 'APPROVED', 4);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `message` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `role`, `password`) VALUES
(1, 'Admin One', 'admin1@ex.com', '+962 777111111', 'admin', '12345678'),
(2, 'Admin Two', 'admin2@ex.com', '+962 777222222', 'admin', '12345678'),
(3, 'User One', 'user1@ex.com', '+962 777333333', 'user', '12345678'),
(4, 'User Two', 'user2@ex.com', '+962 777444444', 'user', '12345678'),
(5, 'User Three', 'user3@ex.com', '+962 777555555', 'user', '12345678'),
(6, 'Michael Brown', 'm@ex.com', '077777', 'admin', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`contract_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contract`
--
ALTER TABLE `contract`
  MODIFY `contract_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
