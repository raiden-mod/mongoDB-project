-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2023 at 11:52 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mongodb_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `charge_device_controller_details`
--

CREATE TABLE `charge_device_controller_details` (
  `id` int(11) NOT NULL,
  `chargeDeviceID` int(11) NOT NULL,
  `deviceControllerName` varchar(225) NOT NULL,
  `deviceControllerWebsite` varchar(225) NOT NULL,
  `deviceControllerTelephoneNo` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `charge_device_controller_details`
--

INSERT INTO `charge_device_controller_details` (`id`, `chargeDeviceID`, `deviceControllerName`, `deviceControllerWebsite`, `deviceControllerTelephoneNo`) VALUES
(1, 1, 'POD Point', 'http://pod-point.com\r\n', '020 7247 4114\r\n'),
(2, 2, 'POD Point', 'http://pod-point.com\r\n', '020 7247 4114\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `charge_device_details`
--

CREATE TABLE `charge_device_details` (
  `_id` int(11) NOT NULL,
  `chargeDeviceID` varchar(225) NOT NULL,
  `reference` varchar(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `publishStatus` varchar(225) NOT NULL,
  `deviceNetwork` varchar(225) NOT NULL,
  `chargeDeviceStatus` varchar(225) NOT NULL,
  `deviceValidation` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `charge_device_details`
--

INSERT INTO `charge_device_details` (`_id`, `chargeDeviceID`, `reference`, `name`, `publishStatus`, `deviceNetwork`, `chargeDeviceStatus`, `deviceValidation`) VALUES
(1, 'c911241d00294e8bb714eee2e83fa475\r\n', 'PP-12289\r\n', 'Alex F Noble & Son\r\n', 'Published\n', 'POD Point\r\n', 'In service\r\n', '0\r\n'),
(2, 'fa6c94460e902005a0b660266190c8ba\r\n', 'PP-12295\r\n', 'Ancaster Nissan Dealership', 'Published\r\n', 'POD Point\r\n', 'In service\r\n', '0\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `charge_device_lcation_details`
--

CREATE TABLE `charge_device_lcation_details` (
  `id` int(11) NOT NULL,
  `chargeDeviceID` int(11) NOT NULL,
  `longitude` varchar(225) NOT NULL,
  `latitude` varchar(225) NOT NULL,
  `street` varchar(225) NOT NULL,
  `town` varchar(225) NOT NULL,
  `county` varchar(225) NOT NULL,
  `depandantLocality` varchar(225) NOT NULL,
  `doubleDependantLocality` varchar(225) NOT NULL,
  `postCode` varchar(225) NOT NULL,
  `countryCode` varchar(225) NOT NULL,
  `locationShortDesacription` varchar(225) NOT NULL,
  `locationLongDescription` varchar(225) NOT NULL,
  `locationType` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `charge_device_lcation_details`
--

INSERT INTO `charge_device_lcation_details` (`id`, `chargeDeviceID`, `longitude`, `latitude`, `street`, `town`, `county`, `depandantLocality`, `doubleDependantLocality`, `postCode`, `countryCode`, `locationShortDesacription`, `locationLongDescription`, `locationType`) VALUES
(1, 1, '55.875053', '-3.173333\r\n', 'Swinton Place\r\n', 'Loanhead\r\n', 'Midlothian', 'Straiton\r\n', 'Loanhead', 'EH20 9FB', 'gb', 'Edinburgh', 'Swinton PlaceStraitonLoanheadEdinburgh\r\n', 'On-street'),
(2, 2, '51.411173\r\n', '-0.055369\r\n', 'Croydon Road', 'Anerley', 'Greater London\r\n', 'SE20 7TF', 'Penge\r\n', 'EH20 9FB', 'gb', 'Penge, London SE20 \r\n', 'Penge, London SE20 \r\n', 'On-street');

-- --------------------------------------------------------

--
-- Table structure for table `charge_device_owner_details`
--

CREATE TABLE `charge_device_owner_details` (
  `id` int(11) NOT NULL,
  `chargeDeviceID` int(11) NOT NULL,
  `deviceOwnerName` varchar(225) NOT NULL,
  `deviceOwnerWebsite` varchar(225) NOT NULL,
  `deviceOwnerTelephoneNo` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `charge_device_owner_details`
--

INSERT INTO `charge_device_owner_details` (`id`, `chargeDeviceID`, `deviceOwnerName`, `deviceOwnerWebsite`, `deviceOwnerTelephoneNo`) VALUES
(1, 1, 'POD Point', 'http://pod-point.com', '020 7247 4114'),
(2, 2, 'POD Point', 'http://pod-point.com', '020 7247 4114');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charge_device_controller_details`
--
ALTER TABLE `charge_device_controller_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `charge_device_details`
--
ALTER TABLE `charge_device_details`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `charge_device_lcation_details`
--
ALTER TABLE `charge_device_lcation_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chargeDeviceID` (`chargeDeviceID`);

--
-- Indexes for table `charge_device_owner_details`
--
ALTER TABLE `charge_device_owner_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `charge_device_controller_details`
--
ALTER TABLE `charge_device_controller_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `charge_device_details`
--
ALTER TABLE `charge_device_details`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `charge_device_lcation_details`
--
ALTER TABLE `charge_device_lcation_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `charge_device_owner_details`
--
ALTER TABLE `charge_device_owner_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
