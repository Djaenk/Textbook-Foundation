-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 35.184.255.243    Database: TextbookFoundation
-- ------------------------------------------------------
-- Server version	5.7.33-google

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `bookID` int(7) NOT NULL AUTO_INCREMENT,
  `donorID` int(7) unsigned DEFAULT NULL,
  `ISBN` int(13) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `Publisher` varchar(255) DEFAULT NULL,
  `publicationDate` datetime DEFAULT NULL,
  `bookCondition` int(1) DEFAULT NULL,
  `borrowerID` int(7) unsigned DEFAULT NULL,
  `donationDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bookID`),
  KEY `donorID` (`donorID`),
  KEY `borrowerID` (`borrowerID`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`donorID`) REFERENCES `users` (`userID`),
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`borrowerID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,1,10923874,'Pride and Prejudice','Jane Austen','Modern Library','2000-10-10 00:00:00',4,6,'2021-04-23 18:19:27'),(2,2,1443434973,'1984','George Orwell','Harper Perennial','2014-03-25 05:00:00',4,6,'2021-04-23 18:19:41'),(3,4,142437204,'Jane Eyre','Charlotte Bronte','Penguin Classics','2003-02-04 00:00:00',5,5,'2021-04-23 18:20:56'),(4,6,1503215679,'The Adventures of Tom Sawyer','Mark Twain',NULL,'2020-12-04 00:00:00',5,24,'2021-04-06 00:00:00'),(5,6,60935464,'To Kill a Mockingbird','Harper Lee','Harper Perennial','2002-01-01 00:00:00',4,1,'2021-04-07 01:22:14'),(6,10,1503215679,'The Adventures of Tom Sawyer','Mark Twain',NULL,'2020-12-04 00:00:00',5,2,'2021-04-06 00:00:00'),(7,3,1221103,'The Great Gatsby','Francis Scott Fitzgerald','USA','2004-09-01 00:00:00',2,2,'2021-04-23 18:22:28'),(8,5,45877854,'Animal Farm','George Orwell','Mass Market Paperback','1996-04-01 00:00:00',1,2,'2021-04-23 18:24:56'),(9,7,456651423,'The Count of Monte Cristo','Alexandre Dumas','Penguin Classics','2003-05-27 00:00:00',3,3,'2021-04-23 18:26:44'),(10,7,465315203,'The Lord of the Rings','J.R.R. Tolkien','Houghton Mifflin Harcourt','2005-10-12 00:00:00',3,8,'2021-04-23 18:28:01'),(13,24,142437204,'Jane Eyre','','Penguin Classics','2003-02-04 00:00:00',3,28,'2021-04-27 19:43:38'),(14,24,465315203,'The Lord of the Rings','J.R.R. Tolkien','Houghton Mifflin Harcourt','2005-10-12 00:00:00',5,28,'2021-04-27 20:06:11'),(17,29,455585,'Organic Chemistry','Smith','McGraw Hill','2021-02-11 00:00:00',4,NULL,'2021-04-27 22:58:05'),(18,29,565883,'Calculus','Newton','Pearson','2021-03-12 00:00:00',3,6,'2021-04-27 22:58:43'),(20,6,1443434973,'1984','George Orwell','Harper Perennial','1984-10-01 00:00:00',2,NULL,'2021-04-27 23:47:14'),(21,6,1443434973,'1984','George Orwell','Harper Perennial','2021-04-29 00:00:00',3,NULL,'2021-04-27 23:47:59');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `userID` int(7) unsigned DEFAULT NULL,
  `ISBN` int(13) NOT NULL,
  KEY `userID` (`userID`),
  CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (NULL,1),(NULL,10923874),(2,60935464),(3,456651423),(7,142437204),(1,1503215679),(8,465315203),(24,1221103),(NULL,1443434973),(NULL,1443434973),(6,10923874),(6,60935464),(NULL,465315203),(29,1443434973),(6,456651423),(28,1503215679),(33,10923874),(6,60935464),(6,1503215679);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `bookID` int(7) NOT NULL,
  `rating` int(1) DEFAULT NULL,
  `borrowerID` int(7) unsigned DEFAULT NULL,
  KEY `borrowerID` (`borrowerID`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`borrowerID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,5,2),(1,3,3),(2,3,6),(3,4,5),(5,1,1),(6,2,2),(7,5,2),(8,2,2),(9,4,3),(10,3,8),(1,3,3);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int(7) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `private` tinyint(1) DEFAULT NULL,
  `joinDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'JP','Heck','1234567890','jheck@aol.com','jpheckles','password',0,'2021-04-23 17:46:48'),(2,'Kirk','Thomas',NULL,'kthomas@smu.edu','kthomas','password',0,'2021-04-23 18:05:51'),(3,'Anthony','Wang','2345678901','awang@smu.edu','awang','password',0,'2021-04-23 18:06:27'),(4,'Kellen','Long','3456789012','klong@smu.edu','klong','password',0,'2021-04-23 18:07:02'),(5,'Colin','Weil','4567890123','cweil@smu.edu','cweil','password',0,'2021-04-23 18:07:28'),(6,'Landon','Morrison','2146016524','landonw@smu.edu','landonw','password',0,'2021-04-01 18:19:17'),(7,'Xiyuan','Cui','5678901234','xcui@smu.edu','xcui','password',0,'2021-04-23 18:07:53'),(8,'John','Smith',NULL,NULL,'jsmith','password',0,'2021-04-23 18:08:50'),(9,'Brad','Clems','6789012345',NULL,'bclems','password',0,'2021-04-23 18:09:44'),(10,'Aaron','Johnson','7890123456','ajohnson@gmail.com','ajohnson','password',1,'2021-04-23 18:10:26'),(11,'Star','Thomas',NULL,'kirk.thomas@myaccount.com','kirk.thomas','tk376403',0,'2021-04-26 21:12:12'),(19,'','',NULL,'','a','b',0,'2021-04-26 23:21:40'),(20,'','',NULL,'','b','c',0,'2021-04-26 23:22:44'),(21,'','',NULL,'','c','d',0,'2021-04-26 23:24:28'),(22,'','',NULL,'','','',0,'2021-04-26 23:25:11'),(23,'','',NULL,'','d','e',0,'2021-04-26 23:25:52'),(24,'Cesar','Sanchez',NULL,'cesars@smu.edu','cess','password',0,'2021-04-27 08:33:53'),(25,'Bob','Smith',NULL,'bsmith@smu.edu','bsmith','0',NULL,'2021-04-27 21:08:52'),(26,'Jane','Roberts',NULL,'jroberts@smu.edu','jroberts','password',1,'2021-04-27 21:12:19'),(27,'a','b',NULL,'','testa','password',1,'2021-04-27 21:14:55'),(28,'Mitch','Morrison',NULL,'mitchm@smu.edu','mm','pp',0,'2021-04-27 21:19:44'),(29,'Conner','Ozenne',NULL,'conner@gmail.com','cozenne','password',0,'2021-04-27 22:01:04'),(30,'Michael','Lennon',NULL,'mlennon@smu.edu','mplennon617','password',0,'2021-04-27 22:40:31'),(31,'Betsy','Grantham',NULL,'','betsyg','123456',1,'2021-04-27 23:02:08'),(32,'Colin','Weil',NULL,'cweil@smu.edu','c','w',0,'2021-04-27 23:26:37'),(33,'','',NULL,'','colin','weil',0,'2021-04-27 23:26:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `userID` int(7) unsigned DEFAULT NULL,
  `ISBN` int(13) NOT NULL,
  `dateRequested` datetime DEFAULT CURRENT_TIMESTAMP,
  KEY `userID` (`userID`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `books` (`borrowerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (1,1443434973,'2021-04-26 19:48:22'),(2,60935464,'2021-04-26 19:48:24'),(3,1221103,'2021-04-26 19:48:27'),(5,465315203,'2021-04-26 19:48:51'),(6,45877854,'2021-04-26 19:48:56'),(6,456651423,'2021-04-26 19:50:38'),(8,142437204,'2021-04-26 19:50:41'),(6,465315203,'2021-04-27 09:54:52'),(24,60935464,'2021-04-27 13:54:39'),(6,10923874,'2021-04-27 12:09:36'),(6,123456789,'2021-04-27 12:10:11'),(6,60935464,'2021-04-27 18:41:18'),(6,486648585,'2021-04-27 23:10:53'),(28,455585,'2021-04-27 23:13:07'),(6,1443434973,'2021-04-27 23:48:44');
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19 14:42:52
