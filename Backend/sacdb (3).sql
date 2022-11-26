-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2022 at 05:13 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sacdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `student_id` int(11) NOT NULL,
  `series` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `picture` text DEFAULT NULL,
  `linkedin` varchar(150) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `available_time_to_contact` varchar(300) NOT NULL,
  `password` varchar(30) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0->Not Active 1->Alumni 2->Admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`student_id`, `series`, `name`, `picture`, `linkedin`, `email`, `contact_no`, `available_time_to_contact`, `password`, `status`) VALUES
(133061, 13, 'Zahirul Islam', NULL, '', 'zahirul.islam@cse.ruet.ac.bd', '01855291280', '8pm to 10pm', 'zahir', 1),
(1603075, 16, 'Ahmed Abdul Barik Sadik', 'http://localhost:8080/resource/images?imageName=barik.jpg', '', 'bariksadik@gmail.com', '01771500275', '8pm to 10pm', 'barik1603075', 1),
(1803015, 18, 'Khan Mohammad Barkat Ullah Shammo', 'http://localhost:8080/resource/images?imageName=shammo.jpg', NULL, 'khancse15@gmail.com', NULL, 'anytime', '12345', 1),
(1803017, 18, 'Esmay Hasan', 'http://localhost:8080/resource/images?imageName=esmay.jpg', 'fewegfRw', 'esmay@email.com', '01788989232', '9am to 7 pm', '12345', 1),
(1803020, 18, 'Saad Ahmed Sazan', 'http://localhost:8080/resource/images?imageName=saad.jpg', '', 'saadahmedsazan007@gmail.com', '01798487191', '8pm to 10pm', 'honeybee', 1),
(1803023, 18, 'Nazmul Hossain Nahid', NULL, 'https://www.linkedin.com/in/nazm-nahid?originalSubdomain=bd', 'nazm.nahid@gmail.com', '01797975508', '8pm to 10pm', 'VIcw9PgHqjdc3sRYAe6c1JwONRrkt7', 1),
(1803029, 18, 'Nazmul Islam', 'http://localhost:8080/resource/images?imageName=nazmul.jpg', '', '1803029@gmail.com', '01881081925', '3 am to 4 am', 'pass1231', 1),
(1803034, 18, 'Nazmul Hossain Nahid', NULL, 'https://www.linkedin.com/in/nazm-nahid?originalSubdomain=bd', 'nazlm.nahid@gmail.com', '01797975508', '8pm to 10pm', '12345', 1),
(1803060, 18, 'Ruhan Kabir', NULL, 'https://www.linkedin.com/in/nazm-nahid?originalSubdomain=bd', 'nazm.nahid@gmail.com', '01771500275', '8pm to 10pm', 'FSzUBz54g2vGokowwxrhlQyBfNJNub', 1);

-- --------------------------------------------------------

--
-- Table structure for table `brunch`
--

CREATE TABLE `brunch` (
  `brunch_id` int(11) NOT NULL,
  `brunch_name` varchar(100) DEFAULT NULL,
  `brunch_recrutement_process` text DEFAULT NULL,
  `brunch_facilities` text DEFAULT NULL,
  `brunch_address` text DEFAULT NULL,
  `institute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brunch`
--

INSERT INTO `brunch` (`brunch_id`, `brunch_name`, `brunch_recrutement_process`, `brunch_facilities`, `brunch_address`, `institute_id`) VALUES
(1, 'Dhaka,Bangladesh', 'SRBD Contest', 'sadfw', 'asfa', 1),
(2, 'Poland', '', 'sadfw', 'asfa', 2),
(4, 'Singapore', NULL, NULL, NULL, 4),
(6, 'Dhaka,Bangladesh', NULL, NULL, NULL, 6),
(7, 'Gulshan ,Dhaka', NULL, NULL, NULL, 6),
(9, 'Singapore', NULL, NULL, NULL, 4),
(10, 'India', NULL, NULL, NULL, 8),
(13, 'Ireland', NULL, NULL, NULL, 2),
(14, '', NULL, NULL, NULL, 11),
(15, 'Dhaka', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `question_id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `replyer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `institute`
--

CREATE TABLE `institute` (
  `institute_id` int(11) NOT NULL,
  `institute_name` varchar(100) DEFAULT NULL,
  `recrutement_process` text DEFAULT NULL,
  `facilities` text DEFAULT NULL,
  `institute_address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institute`
--

INSERT INTO `institute` (`institute_id`, `institute_name`, `recrutement_process`, `facilities`, `institute_address`) VALUES
(1, 'Samsung', 'SRBD Contest', 'kaj kom', 'asdf'),
(2, 'Google', 'COdejam Contest', 'kaj kom', 'asdf'),
(4, 'ByteDance', NULL, NULL, NULL),
(5, 'MIT', NULL, NULL, NULL),
(6, 'Enosis Solution', NULL, NULL, NULL),
(8, 'Amazon', NULL, NULL, NULL),
(11, 'RUET', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobhistory`
--

CREATE TABLE `jobhistory` (
  `job_id` int(11) NOT NULL,
  `job_field` text DEFAULT NULL,
  `job_title` varchar(150) NOT NULL,
  `job_organization_id` int(11) NOT NULL,
  `job_organization_brunch_id` int(11) NOT NULL,
  `alumni_student_id` int(11) NOT NULL,
  `job_status` int(11) NOT NULL COMMENT '0--> left job\r\n1--> current job'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobhistory`
--

INSERT INTO `jobhistory` (`job_id`, `job_field`, `job_title`, `job_organization_id`, `job_organization_brunch_id`, `alumni_student_id`, `job_status`) VALUES
(1, 'Software Engineering', 'Software Engineer', 1, 1, 1803017, 1),
(2, 'Software Engineering', 'Software Engineer', 1, 1, 1803015, 0),
(13, 'Software Engineer', 'Software Engineering', 6, 1, 1603075, 1),
(19, 'Software Engineering', 'Senior Software Engineer', 6, 1, 1803020, 0),
(23, 'Machine Learning', 'Machine Learning Engineer', 4, 9, 1803029, 1),
(24, 'Software Engineering', 'Software Engineer', 2, 2, 1803015, 1),
(28, 'Software Engineering', 'Software Engineer (Level 2)', 2, 13, 1803020, 1),
(30, 'Software Engineering', 'Software Engineer', 6, 7, 1803034, 1),
(31, 'Teaching', 'Assistant Professor', 11, 14, 133061, 0),
(32, 'Software Engineering', 'Software Engineer', 6, 7, 1803023, 0),
(33, 'SWE', 'SWE', 1, 15, 1803023, 1),
(34, 'Software Engineering', 'Software Engineer', 6, 7, 1803060, 0),
(35, 'Software Engineering', 'Software Engineer ', 2, 2, 1803060, 1);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `option_id` int(11) NOT NULL,
  `option_name` int(11) NOT NULL,
  `option_link` int(11) NOT NULL,
  `option_description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `post_title` text DEFAULT NULL,
  `post_description` text DEFAULT NULL,
  `post_image` text DEFAULT NULL,
  `post_woner_id` int(11) DEFAULT NULL,
  `post_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `post_title`, `post_description`, `post_image`, `post_woner_id`, `post_date`) VALUES
(63, NULL, 'হাতের লেখার গতি অনেক কম হওয়ার পরেও নিয়মের গ্যাঁড়াকলে পাহাড়সম লেখার চিন্তায় বাংলা পরীক্ষাগুলোকে যতটা অপছন্দ করেছি, ভয় পেয়েছি, ঠিক ততটাই বাংলা বইগুলোকে, বইয়ের লেখাগুলোকে ভালবেসেছি এবং ভবিষ্যতে যে এগুলোর কথা আমার মনে পরবে, সেটা তখনই আন্দাজ করেছিলাম।', 'http://localhost:8080/resource/images?imageName=postImage63.png', 1803015, '2022-10-20'),
(64, NULL, 'হাতের লেখার গতি অনেক কম হওয়ার পরেও নিয়মের গ্যাঁড়াকলে পাহাড়সম লেখার চিন্তায় বাংলা পরীক্ষাগুলোকে যতটা অপছন্দ করেছি, ভয় পেয়েছি, ঠিক ততটাই বাংলা বইগুলোকে, বইয়ের লেখাগুলোকে ভালবেসেছি এবং ভবিষ্যতে যে এগুলোর কথা আমার মনে পরবে, সেটা তখনই আন্দাজ করেছিলাম।হাতের লেখার গতি অনেক কম হওয়ার পরেও নিয়মের গ্যাঁড়াকলে পাহাড়সম লেখার চিন্তায় বাংলা পরীক্ষাগুলোকে যতটা অপছন্দ করেছি, ভয় পেয়েছি, ঠিক ততটাই বাংলা বইগুলোকে, বইয়ের লেখাগুলোকে ভালবেসেছি এবং ভবিষ্যতে যে এগুলোর কথা আমার মনে পরবে, সেটা তখনই আন্দাজ করেছিলাম।', 'http://localhost:8080/resource/images?imageName=postImage64.png', 1803017, '2022-10-20'),
(65, NULL, 'মাইক্রোসফটের সফটওয়্যার ইঞ্জিনিয়ার হলেন খুবির সাবেক শিক্ষার্থীবিশ্বের অন্যতম টেক জায়ান্ট প্রতিষ্ঠান মাইক্রোসফটে চাকরি পেয়েছেন খুলনা বিশ্ববিদ্যালয়ের (খুবি) সাবেক শিক্ষার্থী সি এম খালেদ সাইফুল্লাহ। সোমবার (১৭ অক্টোবর) তিনি সফটওয়্যার ইঞ্জিনিয়ার হিসেবে মাইক্রোসফটে যোগদান করেন। সি এম খালেদ সাইফুল্লাহ খুলনা বিশ্ববিদ্যালয়ের কম্পিউটার বিজ্ঞান ও প্রকৌশল ডিসিপ্লিনের ২০১১ ব্যাচের শিক্ষার্থী ছিলেন।', 'http://localhost:8080/resource/images?imageName=postImage65.PNG', 1803017, '2022-10-20'),
(68, NULL, 'Md Akhter-Uz-Zaman Ashik is currently working at Pathao as a Software Test Engineer I. He has completed his Bachelor’s degree in Computer Science ', 'http://localhost:8080/resource/images?imageName=postImage68.png', 1803029, '2022-10-20'),
(71, NULL, 'FEIUAYSPEUFYASOEF', 'http://localhost:8080/resource/images?imageName=postImage69.png', 1803034, '2022-10-29'),
(72, NULL, 'TUETRIQWOYE98D', NULL, 1803034, '2022-10-29'),
(75, NULL, 'sdfuqwbtepyqcwpecufqcwp89ey', 'http://localhost:8080/resource/images?imageName=postImage69.png', 1803060, '2022-11-26');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` int(11) NOT NULL,
  `role_description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `table_registry`
--

CREATE TABLE `table_registry` (
  `table_id` int(11) NOT NULL,
  `table_name` varchar(30) NOT NULL,
  `registry_key` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_registry`
--

INSERT INTO `table_registry` (`table_id`, `table_name`, `registry_key`) VALUES
(1, 'brunch', 15),
(2, 'faq', 1),
(3, 'institute', 11),
(4, 'jobhistory', 35),
(5, 'post', 75);

-- --------------------------------------------------------

--
-- Table structure for table `varfication_codes`
--

CREATE TABLE `varfication_codes` (
  `id` int(11) NOT NULL,
  `code` varchar(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `brunch`
--
ALTER TABLE `brunch`
  ADD PRIMARY KEY (`brunch_id`),
  ADD KEY `institute_id` (`institute_id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `replyer_id` (`replyer_id`);

--
-- Indexes for table `institute`
--
ALTER TABLE `institute`
  ADD PRIMARY KEY (`institute_id`);

--
-- Indexes for table `jobhistory`
--
ALTER TABLE `jobhistory`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `job_organization_id` (`job_organization_id`),
  ADD KEY `job_organization_brunch_id` (`job_organization_brunch_id`),
  ADD KEY `alumni_student_id` (`alumni_student_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_woner_id` (`post_woner_id`);

--
-- Indexes for table `table_registry`
--
ALTER TABLE `table_registry`
  ADD PRIMARY KEY (`table_id`);

--
-- Indexes for table `varfication_codes`
--
ALTER TABLE `varfication_codes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `varfication_codes`
--
ALTER TABLE `varfication_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brunch`
--
ALTER TABLE `brunch`
  ADD CONSTRAINT `brunch_ibfk_1` FOREIGN KEY (`institute_id`) REFERENCES `institute` (`institute_id`);

--
-- Constraints for table `faq`
--
ALTER TABLE `faq`
  ADD CONSTRAINT `faq_ibfk_1` FOREIGN KEY (`replyer_id`) REFERENCES `alumni` (`student_id`);

--
-- Constraints for table `jobhistory`
--
ALTER TABLE `jobhistory`
  ADD CONSTRAINT `jobhistory_ibfk_1` FOREIGN KEY (`job_organization_id`) REFERENCES `institute` (`institute_id`),
  ADD CONSTRAINT `jobhistory_ibfk_2` FOREIGN KEY (`job_organization_brunch_id`) REFERENCES `brunch` (`brunch_id`),
  ADD CONSTRAINT `jobhistory_ibfk_3` FOREIGN KEY (`alumni_student_id`) REFERENCES `alumni` (`student_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`post_woner_id`) REFERENCES `alumni` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
