-- MariaDB dump 10.19  Distrib 10.10.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: blockbuster
-- ------------------------------------------------------
-- Server version	10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(200) DEFAULT NULL,
  `Correo` varchar(255) DEFAULT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES
(1,'jhosse07','jhossleyngonzalezsanche4@gmail.com','Jhosselyn','Gonzalez Sanchez',21,'M','1234','2001-08-07','S','2022-12-14 16:24:51','2022-12-14 16:24:51'),
(2,'reyna15','reynacansecohernadez@gmail.com','Reyna','Canseco Hernadez',22,'M','12345','2000-10-15','S','2022-12-14 16:25:52','2022-12-14 16:25:52'),
(3,'arturo06','arturojosegregoriogmail.com','Arturo','Jose Gregorio',25,'H','123456','1997-09-06','S','2022-12-14 16:27:36','2022-12-14 16:27:36'),
(4,'Fernado28','Fernadodejesussibajavaldes@gmail.com','Fernado de jesus','Sibaja Valdez',22,'H','1234567','2000-04-28','S','2022-12-14 16:28:48','2022-12-14 16:28:48');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peliculas` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) DEFAULT NULL,
  `Genero` varchar(255) DEFAULT NULL,
  `Reseña` varchar(255) DEFAULT NULL,
  `Fecha_Estreno` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas`
--

LOCK TABLES `peliculas` WRITE;
/*!40000 ALTER TABLE `peliculas` DISABLE KEYS */;
INSERT INTO `peliculas` VALUES
(1,'pinocho','Fantasia','El deseo de un padre da vida por arte de magia a un niño de madera en Italia, dándole la oportunidad de cuidarlo.','2022-11-24','S','2022-12-14 16:10:29','2022-12-14 16:10:29'),
(2,'La cenicienta','Fantasia,animacion,romance','Historia de una joven que al morir su padr euqeda dependiendo de uns madrasta malvada  y sus hermanastras y vive una historia critica hasta que encuentra su felicidad en un principe','1951-01-17','S','2022-12-14 16:20:41','2022-12-14 16:20:41'),
(3,'La bella y la bestia','Fantasia,animacion, romance','Una doncella francesa toma el lugar de su padre secuestrado en el castillo encantado de un príncipe embrujado, el amor es lo único que podrá devolverle su forma humana.','2010-10-22','S','2022-12-14 16:22:38','2022-12-14 16:22:38'),
(4,'Cars 1','Comedia y buddy film','De camino al prestigiado campeonato Copa Pistón, un automóvil de carreras que sólo se preocupa por ganar aprende sobre lo que realmente es importante en la vida de varios vehículos que viven en un pueblo a lo largo de la histórica Ruta 66','2006-06-30','S','2022-12-14 16:30:24','2022-12-14 16:30:24'),
(5,'Coco',' musical aventura, infantil, comedia cinematográfica y fantasia','Miguel es un niño que quiere ser musico que por un aterior abandono de un familar que era musico su familia se lo prohibe y entra al mundo de los muertos a encortrarse con el ','2017-10-27','S','2022-12-14 16:36:34','2022-12-14 16:36:34');
/*!40000 ALTER TABLE `peliculas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `renta`
--

DROP TABLE IF EXISTS `renta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `renta` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `correo_personal` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Pelicula` varchar(200) NOT NULL,
  `Precio` int(5) DEFAULT NULL,
  `Pagado` int(5) NOT NULL,
  `Dia_Entrega` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `renta`
--

LOCK TABLES `renta` WRITE;
/*!40000 ALTER TABLE `renta` DISABLE KEYS */;
INSERT INTO `renta` VALUES
(1,'jhossleyngonzalezsanchezgmail.com','Jhosselyn','Gonzalez Sanchez','La bella y la bestia',50,50,'2022-11-02','S','2022-12-15 16:53:50','2022-12-15 16:53:50'),
(2,'arturojosegregoriogmail.com','Arturo','Jose Gregorio','Pinocho de gullermo del toro',150,150,'2022-12-15','S','2022-12-15 16:55:01','2022-12-15 16:55:01');
/*!40000 ALTER TABLE `renta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 10:56:53
