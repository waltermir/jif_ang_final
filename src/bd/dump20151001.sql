CREATE DATABASE  IF NOT EXISTS `transportesflores` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `transportesflores`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: transportesflores
-- ------------------------------------------------------
-- Server version	5.6.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chofer`
--

DROP TABLE IF EXISTS `chofer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chofer` (
  `documento` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `tel_fijo` varchar(10) DEFAULT NULL,
  `tel_cel` varchar(12) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `alta_fecha` datetime DEFAULT NULL,
  `baja_fecha` datetime DEFAULT NULL,
  `opciones` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`documento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chofer`
--

LOCK TABLES `chofer` WRITE;
/*!40000 ALTER TABLE `chofer` DISABLE KEYS */;
INSERT INTO `chofer` VALUES (0,'aaaaaaa8','','','','','',NULL,'2015-09-22 22:05:09',NULL),(2,'sss','ssss','','','','','2015-09-13 17:48:44','2015-09-26 16:59:07',NULL),(3,'waaa','waaa','4654-6620','15 5555-66','www','w@w','2015-09-13 17:50:33','2015-09-22 22:06:12',NULL),(4,'walter lionel','Mir','4654-6620','','Las Heras 942 1B','mir.walter@gmail.com','2015-09-13 23:20:12',NULL,NULL),(7,'www','wwww','','','','','2015-09-26 16:48:57','2015-09-26 16:59:14',NULL),(9,'pedro','paramo','4654-6620','15 6640-5937','aca nomas','www@pedro','2015-09-13 17:54:47','2015-09-22 22:09:22',NULL),(12,'ww','ww','4654-6620','15 6640-5940','las heras 942','m@m','2015-09-19 22:17:31','2015-10-01 13:42:35',NULL),(16,'sapo','pepe','(011)46546','(011)46546','las heras 942','mir.walter2@gmail.com',NULL,NULL,NULL),(34,'ddddddddd','ddddddddddd','','','','','2015-09-26 13:17:50','2015-09-26 16:59:21',NULL),(122,'','','','','','','2015-09-13 23:28:27','2015-09-24 21:36:51',NULL),(233,'walter','miron','4654-6620','15 6640-59','casztillo 22','w@w','2015-09-13 16:52:02',NULL,NULL),(251,'wwww','www','4654-6620','15 6640-5930','ww','ww','2015-09-13 17:42:45',NULL,NULL),(333,'','','4654-6620','15 6640-5944','walter','m@m','2015-09-13 17:57:03','2015-09-26 12:23:50',NULL),(444,'walili','walili','4654-6620','15 6640-59','las heras 888','w@w','2015-09-13 18:16:15',NULL,NULL),(555,'wa','wa','4654-6620','15 6640-59','eee222','e@e','2015-09-13 18:03:40',NULL,NULL),(666,'Wally Babasonico','Mirlo','4654-6620','15 6640-59','Las Heras 942','mir.walter@gmail.com',NULL,NULL,NULL),(777,'water','miri','4654-6620','15 6640-59','las heras 942','mir.walter@gmail.com','2015-09-08 21:06:03',NULL,NULL),(2222,'Andrea','Tortosa','22222','22222','San Martin','andre@tortosa',NULL,NULL,NULL),(2666,'walterrrrr','walterrrr','4654-6620','15 6649-59','wal','w@w','2015-09-13 17:27:57',NULL,NULL),(22222,'carlos','carlos','22222','2222','las heras 942 ramos mejia','mir.walter@gmail.com',NULL,NULL,NULL),(25666,'wal wal','wal wal','4654-6620','15 6640-59','wal','w@666','2015-09-13 17:14:07',NULL,NULL),(25773,'www','www','4654-6620','15 6640-59','walter','m@m','2015-09-13 17:23:04',NULL,NULL),(25777,'www','www','4654-6620','15 6640-59','walter','m@m','2015-09-13 17:21:14',NULL,NULL),(44444,'juani','flores','55555','5555','5555','555',NULL,NULL,NULL),(77799,'prueba refactor','refactor','4654-6620','15 6640-59','las refactor','mir..walter@wwww','2015-09-20 12:06:12',NULL,NULL),(222222,'pedro','juares','12222','1122','las heras 94','mir.walter@gmail.com',NULL,NULL,NULL),(222234,'wallio','miros','4654-6620','15 4654-66','wwww','w@w','2015-09-20 11:29:28',NULL,NULL),(2222221,'ww','watson','4654-6620','15 6640-59','walre','w@www','2015-09-13 18:06:41',NULL,NULL),(2223567,'weee','eee','4654-6620','15 6640-59','www','www@ddd','2015-09-20 11:46:10',NULL,NULL),(2333333,'Jose','Mir','122222','123333','las ','mirjose@mmir',NULL,NULL,NULL),(22222222,'Gonzalo','Flores','122222','111111','las Heras','gonzalo@flores',NULL,NULL,NULL),(25133222,'Orale juanito','flores','4654-6620','15 6640-5937','ssss','ww@dddd','2015-10-01 13:45:31',NULL,NULL),(25133420,'walter','Mir','46546620','1566405937','san marti 427 2b','mir.walter@gmail.com',NULL,NULL,NULL),(25133421,'Walter','Mir','222222','1566405937','San Martin 427 2b','mir.walter@gmail.com',NULL,NULL,NULL),(25133429,'ahora si f unciona','ahora si funciona','4654-6620','15 6640-59','las heras','mir@eee','2015-09-13 18:18:23',NULL,NULL),(25133666,'pedro','paramo','4654-6620','15 6640-5937','aca nomas','www@pedro','2015-09-13 17:09:10',NULL,NULL),(33777234,'Valerio Juan','solarra','4654-6620','15 6640-5937','San Martin 544 2b','mir.walter@gmail.com','2015-09-26 12:25:23',NULL,NULL),(2147483647,'wa','w','2','2','ddd','mir.walter@gmail.com',NULL,NULL,NULL);
/*!40000 ALTER TABLE `chofer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datatables_demo`
--

DROP TABLE IF EXISTS `datatables_demo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datatables_demo` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `office` varchar(50) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `salary` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datatables_demo`
--

LOCK TABLES `datatables_demo` WRITE;
/*!40000 ALTER TABLE `datatables_demo` DISABLE KEYS */;
INSERT INTO `datatables_demo` VALUES (1,'Airi','Satou','Accountant','Tokyo','2015-01-01 00:00:00',0),(2,'Angelica','Ramos','Chief Executive Officer (CEO)','London','2011-01-01 00:00:00',0),(3,'Walter','MIR','Chief Executive Officer (CEO)','London','2011-02-01 00:00:00',0);
/*!40000 ALTER TABLE `datatables_demo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `molino`
--

DROP TABLE IF EXISTS `molino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `molino` (
  `codigo` int(11) NOT NULL,
  `razon_social` varchar(60) NOT NULL,
  `tel_cel` varchar(12) DEFAULT NULL,
  `tel_fijo` varchar(10) DEFAULT NULL,
  `internos` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cuit` varchar(11) DEFAULT NULL,
  `alta_fecha` datetime NOT NULL,
  `baja_fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `molino`
--

LOCK TABLES `molino` WRITE;
/*!40000 ALTER TABLE `molino` DISABLE KEYS */;
/*!40000 ALTER TABLE `molino` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-01 21:14:37
