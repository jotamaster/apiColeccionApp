-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: apipiticlin
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.26-MariaDB

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
-- Table structure for table `amistad`
--

DROP TABLE IF EXISTS `amistad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amistad` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `IdAmigo` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `Estado` int(11) DEFAULT NULL,
  `Inicio` date DEFAULT NULL,
  `Termino` date DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_USUARIO_AMIGO_idx` (`IdAmigo`),
  KEY `FK_AMIGO_USUARIO_idx` (`IdUsuario`),
  CONSTRAINT `FK_AMIGO_USUARIO` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_USUARIO_AMIGO` FOREIGN KEY (`IdAmigo`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amistad`
--

LOCK TABLES `amistad` WRITE;
/*!40000 ALTER TABLE `amistad` DISABLE KEYS */;
/*!40000 ALTER TABLE `amistad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coleccion`
--

DROP TABLE IF EXISTS `coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coleccion` (
  `Id` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Detalle` varchar(45) DEFAULT NULL,
  `Fotos` varchar(45) DEFAULT NULL,
  `FechaCreacion` date DEFAULT NULL,
  `Tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Album_Usuario_idx` (`IdUsuario`),
  CONSTRAINT `fk_Album_Usuario` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coleccion`
--

LOCK TABLES `coleccion` WRITE;
/*!40000 ALTER TABLE `coleccion` DISABLE KEYS */;
INSERT INTO `coleccion` VALUES (0,1,'monedasq','detalle','qq','2018-08-01','2');
/*!40000 ALTER TABLE `coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritocoleccion`
--

DROP TABLE IF EXISTS `favoritocoleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoritocoleccion` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `IdUsuario` int(11) NOT NULL,
  `IdColeccion` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_FavoritoColeccion_Usuario1_idx` (`IdUsuario`),
  KEY `fk_FavoritoColeccion_Coleccion1_idx` (`IdColeccion`),
  CONSTRAINT `fk_FavoritoColeccion_Coleccion1` FOREIGN KEY (`IdColeccion`) REFERENCES `coleccion` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_FavoritoColeccion_Usuario1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritocoleccion`
--

LOCK TABLES `favoritocoleccion` WRITE;
/*!40000 ALTER TABLE `favoritocoleccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritocoleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritomoneda`
--

DROP TABLE IF EXISTS `favoritomoneda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoritomoneda` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Idusuario` int(11) NOT NULL,
  `Idmonedas` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_FAVORITO_USUARIO1_idx` (`Idusuario`),
  KEY `fk_FAVORITO_MONEDAS1_idx` (`Idmonedas`),
  CONSTRAINT `fk_FAVORITO_MONEDAS1` FOREIGN KEY (`Idmonedas`) REFERENCES `item` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_FAVORITO_USUARIO1` FOREIGN KEY (`Idusuario`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritomoneda`
--

LOCK TABLES `favoritomoneda` WRITE;
/*!40000 ALTER TABLE `favoritomoneda` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritomoneda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritosubasta`
--

DROP TABLE IF EXISTS `favoritosubasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoritosubasta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `IdUsuario` int(11) NOT NULL,
  `IdSubasta` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_FavoritoSubasta_Usuario1_idx` (`IdUsuario`),
  KEY `fk_FavoritoSubasta_Subasta1_idx` (`IdSubasta`),
  CONSTRAINT `fk_FavoritoSubasta_Subasta1` FOREIGN KEY (`IdSubasta`) REFERENCES `subasta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_FavoritoSubasta_Usuario1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritosubasta`
--

LOCK TABLES `favoritosubasta` WRITE;
/*!40000 ALTER TABLE `favoritosubasta` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritosubasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `Id` int(11) NOT NULL,
  `IdColeccion` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Anio` int(11) DEFAULT NULL,
  `Ceca` varchar(45) DEFAULT NULL,
  `Nacionalidad` varchar(45) DEFAULT NULL,
  `Origen` varchar(45) DEFAULT NULL,
  `TipoMaterial` varchar(45) DEFAULT NULL,
  `Material` decimal(10,0) DEFAULT NULL,
  `ValorNominal` int(11) DEFAULT NULL,
  `TipoNomimal` varchar(45) DEFAULT NULL,
  `Diametro` varchar(45) DEFAULT NULL,
  `Peso` decimal(10,0) DEFAULT NULL,
  `Leyenda` varchar(45) DEFAULT NULL,
  `TemaAnverso` varchar(100) DEFAULT NULL,
  `DescripcionCanto` varchar(45) DEFAULT NULL,
  `Espesor` decimal(3,0) DEFAULT NULL,
  `Tiraje` int(11) DEFAULT NULL,
  `Giro` int(11) DEFAULT NULL,
  `Valorisacion` int(11) DEFAULT NULL,
  `Km` int(11) DEFAULT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `DescripcionGrabado` varchar(45) DEFAULT NULL,
  `SobreFecha` int(11) DEFAULT NULL,
  `Estado` varchar(3) DEFAULT NULL,
  `PorcentajeEstado` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Moneda_Album1_idx` (`IdColeccion`),
  CONSTRAINT `fk_Moneda_Album1` FOREIGN KEY (`IdColeccion`) REFERENCES `coleccion` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logitem`
--

DROP TABLE IF EXISTS `logitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logitem` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `IdUsuario` int(11) NOT NULL,
  `IdItem` int(11) NOT NULL,
  `ValorActual` varchar(45) DEFAULT NULL,
  `ValorAnterior` varchar(45) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  KEY `fk_LogItem_Usuario1_idx` (`IdUsuario`),
  KEY `fk_LogItem_Item1_idx` (`IdItem`),
  CONSTRAINT `fk_LogItem_Item1` FOREIGN KEY (`IdItem`) REFERENCES `item` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_LogItem_Usuario1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logitem`
--

LOCK TABLES `logitem` WRITE;
/*!40000 ALTER TABLE `logitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `logitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lotesubasta`
--

DROP TABLE IF EXISTS `lotesubasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lotesubasta` (
  `Id` int(11) NOT NULL,
  `IdMoneda` int(11) NOT NULL,
  `IdSubasta` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_LoteSubasta_MONEDAS1_idx` (`IdMoneda`),
  KEY `fk_LoteSubasta_SUBASTA1_idx` (`IdSubasta`),
  CONSTRAINT `fk_LoteSubasta_MONEDAS1` FOREIGN KEY (`IdMoneda`) REFERENCES `item` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_LoteSubasta_SUBASTA1` FOREIGN KEY (`IdSubasta`) REFERENCES `subasta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lotesubasta`
--

LOCK TABLES `lotesubasta` WRITE;
/*!40000 ALTER TABLE `lotesubasta` DISABLE KEYS */;
/*!40000 ALTER TABLE `lotesubasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loteventa`
--

DROP TABLE IF EXISTS `loteventa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loteventa` (
  `Id` int(11) NOT NULL,
  `IdMoneda` int(11) NOT NULL,
  `IdVenta` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_LoteVenta_MONEDAS1_idx` (`IdMoneda`),
  KEY `fk_LoteVenta_VENTA1_idx` (`IdVenta`),
  CONSTRAINT `fk_LoteVenta_MONEDAS1` FOREIGN KEY (`IdMoneda`) REFERENCES `item` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_LoteVenta_VENTA1` FOREIGN KEY (`IdVenta`) REFERENCES `venta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loteventa`
--

LOCK TABLES `loteventa` WRITE;
/*!40000 ALTER TABLE `loteventa` DISABLE KEYS */;
/*!40000 ALTER TABLE `loteventa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monedaimagen`
--

DROP TABLE IF EXISTS `monedaimagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monedaimagen` (
  `Id` int(11) NOT NULL,
  `IdMoneda` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Ruta` varchar(150) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_MonedaImagen_MONEDAS1_idx` (`IdMoneda`),
  CONSTRAINT `fk_MonedaImagen_MONEDAS1` FOREIGN KEY (`IdMoneda`) REFERENCES `item` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monedaimagen`
--

LOCK TABLES `monedaimagen` WRITE;
/*!40000 ALTER TABLE `monedaimagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `monedaimagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puja`
--

DROP TABLE IF EXISTS `puja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puja` (
  `Id` int(11) NOT NULL,
  `IdComprador` int(11) NOT NULL,
  `IdSubasta` int(11) NOT NULL,
  `Monto` int(11) DEFAULT NULL,
  `FechaHora` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Pujas_USUARIO1_idx` (`IdComprador`),
  KEY `fk_Pujas_SUBASTA1_idx` (`IdSubasta`),
  CONSTRAINT `fk_Pujas_SUBASTA1` FOREIGN KEY (`IdSubasta`) REFERENCES `subasta` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pujas_USUARIO1` FOREIGN KEY (`IdComprador`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puja`
--

LOCK TABLES `puja` WRITE;
/*!40000 ALTER TABLE `puja` DISABLE KEYS */;
/*!40000 ALTER TABLE `puja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subasta`
--

DROP TABLE IF EXISTS `subasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subasta` (
  `Id` int(11) NOT NULL,
  `IdVendedor` int(11) NOT NULL,
  `IdComprador` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `HoraInicio` time DEFAULT NULL,
  `Horatermino` time DEFAULT NULL,
  `MinimoPuja` int(11) DEFAULT NULL,
  `MontoActual` int(11) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Subasta_Usuario1_idx` (`IdVendedor`),
  KEY `fk_Usuario_Subasta_idx` (`IdComprador`),
  CONSTRAINT `fk_Subasta_Usuario1` FOREIGN KEY (`IdVendedor`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_Subasta` FOREIGN KEY (`IdComprador`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subasta`
--

LOCK TABLES `subasta` WRITE;
/*!40000 ALTER TABLE `subasta` DISABLE KEYS */;
/*!40000 ALTER TABLE `subasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  `Clave` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `Ciudad` varchar(45) DEFAULT NULL,
  `InicioHobby` date DEFAULT NULL,
  `TipoColeccionista` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Jean','Hernandez','123456','jean@gmail.com',1234567,'Osorno','2018-01-11','ni idea'),(2,'alian','colpiante','123456','alian@gmail.com',22222,'osorno','2018-05-12','moneda billetes');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `ValorVenta` int(11) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `IdComprador` int(11) NOT NULL,
  `IdVendedor` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Venta_Usuario1_idx` (`IdComprador`),
  KEY `fk_Venta_Usuario2_idx` (`IdVendedor`),
  CONSTRAINT `fk_Venta_Usuario1` FOREIGN KEY (`IdComprador`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Venta_Usuario2` FOREIGN KEY (`IdVendedor`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-02 15:52:25
