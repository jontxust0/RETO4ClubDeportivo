-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-01-2020 a las 13:10:00
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reto4`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `maxId` ()  NO SQL
select max(user.idUser) as maxId
from user$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllCategorias` ()  NO SQL
SELECT * FROM categorias$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllEntrenadores` ()  NO SQL
SELECT * FROM entrenadores$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllEquipos` ()  NO SQL
select * from equipos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllJugadores` ()  NO SQL
SELECT * FROM jugadores$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllUsers` ()  NO SQL
SELECT * FROM user$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteEntrenador` (IN `pId` INT)  NO SQL
DELETE FROM entrenadores WHERE entrenadores.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteJugador` (IN `pId` INT)  NO SQL
DELETE FROM jugadores WHERE jugadores.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteUser` (IN `pId` INT)  NO SQL
DELETE FROM USER WHERE USER.idUser=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spEquipoByIdCategoria` (IN `inId` INT)  NO SQL
SELECT * FROM equipos WHERE inId = id_categoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindCuerpoById` (IN `inId` INT)  NO SQL
SELECT * FROM cuerpomedico WHERE inId=id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindCuerpoByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM cuerpomedico WHERE id_equipo=inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindCuerpoMedicoByIdUser` (IN `pId` INT)  NO SQL
SELECT * FROM cuerpomedico WHERE id_usuario = pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindDatosMedicosById` (IN `pId` INT)  NO SQL
SELECT * FROM datosmedicos WHERE id_jugador = pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindEntrenadorById` (IN `inId` INT)  NO SQL
SELECT * FROM entrenadores WHERE inId=id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindEntrenadorByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM entrenadores WHERE id_equipo=inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindEntrenadorByIdUser` (IN `pId` INT)  NO SQL
SELECT * FROM entrenadores WHERE id_usuario = pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindJugadorById` (IN `inId` INT)  NO SQL
SELECT * FROM jugadores WHERE id=inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindJugadorByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM jugadores WHERE id_equipo = inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindJugadorByIdUser` (IN `pId` INT)  NO SQL
SELECT * FROM jugadores WHERE id_usuario = pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindUserById` (IN `inId` INT)  NO SQL
SELECT * FROM user WHERE idUser = inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindUserByUsername` (IN `pUsername` VARCHAR(50))  NO SQL
SELECT user.*  FROM user WHERE user.username=pUsername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertUser` (IN `pUsername` VARCHAR(10), IN `pAdmin` TINYINT, IN `pPass` VARCHAR(255), IN `pName` VARCHAR(50), IN `pSurname` VARCHAR(50), IN `pEmail` VARCHAR(50))  NO SQL
INSERT INTO user(user.username,user.admin,user.password,user.name,user.surname,user.email) VALUES
(pUsername,pAdmin,pPass,pName,pSurname,pEmail)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateEntrenador` (IN `pId` INT, IN `pTlf` VARCHAR(50), IN `pDireccion` VARCHAR(100), IN `pSueldo` DECIMAL, IN `pFechaContratacion` TIMESTAMP)  NO SQL
UPDATE entrenadores
SET entrenadores.id = pId, entrenadores.tlf = pTlf,entrenadores.direccion=pDireccion,entrenadores.sueldo=pSueldo,
entrenadores.fechaContratacion=pFechaContratacion
WHERE entrenadores.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateJugador` (IN `pId` INT, IN `pDireccion` VARCHAR(100), IN `pDorsal` INT, IN `pPosicion` VARCHAR(50), IN `pTlf` VARCHAR(50), IN `pAltura` DECIMAL)  NO SQL
UPDATE jugadores
SET jugadores.id = pId, jugadores.direccion = pDireccion,jugadores.dorsal=pDorsal,jugadores.posicion=pPosicion,
jugadores.tlf=pTlf,jugadores.altura=pAltura
WHERE jugadores.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateUser` (IN `pId` INT, IN `pUsername` VARCHAR(50), IN `pPassword` VARCHAR(255), IN `pName` VARCHAR(50), IN `pSurname` VARCHAR(50), IN `pEmail` VARCHAR(50))  NO SQL
UPDATE user
SET user.username = pUsername, user.password = pPassword,user.name=pName,user.surname=pSurname,
user.email=pEmail
WHERE user.idUser=pId$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `cuota` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `cuota`) VALUES
(1, 'Infantil', '10.20'),
(2, 'Cadete', '12.70'),
(3, 'juvenil', '14.10'),
(4, 'Senior', '17.80'),
(5, 'juvenil', '10.50'),
(6, 'proaso', '1.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuerpomedico`
--

CREATE TABLE `cuerpomedico` (
  `id` int(11) NOT NULL,
  `funcion` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `tlf` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `cuerpomedico`
--

INSERT INTO `cuerpomedico` (`id`, `funcion`, `direccion`, `tlf`, `id_usuario`, `id_equipo`) VALUES
(1, 'Fisio', 'Lekeitio', '658965478', 18, 1),
(4, 'Psicologo', 'Durango', '667123907', 19, 1),
(5, 'Fisio', 'Bilbao', '686546012', 17, 2),
(6, 'Psicologo', 'Bermeo', '66513442', 22, 3),
(7, 'Fisio', 'Gernika', '662109803', 21, 3),
(8, 'Psicologo', 'Zornotza', '634999022', 20, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosmedicos`
--

CREATE TABLE `datosmedicos` (
  `id` int(11) NOT NULL,
  `lesiones` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tipoSangre` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `enfermedades` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `id_jugador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `datosmedicos`
--

INSERT INTO `datosmedicos` (`id`, `lesiones`, `tipoSangre`, `enfermedades`, `id_jugador`) VALUES
(1, 'Rotura de femur', 'B-', 'Asma', 2),
(2, 'Traumatismo leve', 'B-', 'Ninguna', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrenadores`
--

CREATE TABLE `entrenadores` (
  `id` int(11) NOT NULL,
  `tlf` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `sueldo` decimal(10,0) NOT NULL,
  `fechaContratacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_usuario` int(11) DEFAULT NULL,
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `entrenadores`
--

INSERT INTO `entrenadores` (`id`, `tlf`, `direccion`, `sueldo`, `fechaContratacion`, `id_usuario`, `id_equipo`) VALUES
(1, '652632452', 'Bermeo', '2005', '2019-12-18 07:41:18', 2, 1),
(3, '644120334', 'Bilbao', '2500', '2019-12-20 08:00:08', 14, 3),
(7, '655172879', 'Zornotza', '2900', '2019-12-19 13:30:45', 23, 2),
(8, '123123123', 'Lekeitio', '0', '2019-12-20 08:01:15', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `femenino/masculino` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `femenino/masculino`, `nombre`, `id_categoria`) VALUES
(1, 'F', 'juvenil B', 3),
(2, 'M', 'Bilbao basket B', 4),
(3, 'F', 'Zornotza Saski', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotosequipo`
--

CREATE TABLE `fotosequipo` (
  `id` int(11) NOT NULL,
  `privado` tinyint(1) NOT NULL,
  `pic` varchar(254) COLLATE utf8_bin NOT NULL,
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id` int(11) NOT NULL,
  `direccion` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `dorsal` int(11) NOT NULL,
  `posicion` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `tlf` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `altura` decimal(10,2) NOT NULL,
  `id_datosMedicos` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id`, `direccion`, `dorsal`, `posicion`, `tlf`, `altura`, `id_datosMedicos`, `id_usuario`, `id_equipo`) VALUES
(1, 'Avenida Sin Nombre ', 12, 'medio', '94654654', '1.59', 1, 2, 1),
(2, 'Avenida Ceda el paso', 14, 'alero', '123123123', '1.90', 2, 3, 2),
(3, 'Calle Falsa 123', 99, 'central', '666666666', '1.00', NULL, 1, 2),
(4, 'Planeta Tsufur', 17, 'Defensa', '666345123', '1.70', NULL, 7, 3),
(5, 'Even green Terrace 10', 19, 'Alero', '689002792', '1.64', NULL, 9, 2),
(6, 'Elk river', 66, 'alero', '644420925', '1.74', NULL, 11, 2),
(7, 'Ciudad Endrino', 18, 'Defensa', '623902398', '1.79', NULL, 8, 1),
(8, 'Calle los Santos 8', 8, 'Delantero', '666345790', '1.82', NULL, 5, 3),
(10, 'Barnekalea 27', 5, 'Alero', '666457123', '1.89', NULL, 6, 1),
(11, 'Zornotza', 13, 'Delantero', '663', '1.79', 2, 27, 1),
(12, 'Gamiz-Fika', 12, 'Defensa', '1.72', '1.00', 2, 25, 1),
(13, 'Bermeo', 7, 'Delantero', '662879001', '1.79', 1, 28, 3),
(14, 'Zornotza', 9, 'Defensa', '662012366', '1.76', 1, 25, 2),
(15, 'Bermeo', 6, 'Alero', '66298772', '1.76', 2, 25, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quejas`
--

CREATE TABLE `quejas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(32) COLLATE utf8_unicode_ci DEFAULT 'anonimo',
  `apellido` varchar(32) COLLATE utf8_unicode_ci DEFAULT 'anonimo',
  `asunto` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(256) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `quejas`
--

INSERT INTO `quejas` (`id`, `nombre`, `apellido`, `asunto`, `descripcion`) VALUES
(1, 'aaa', 'aaa', 'aaa', 'aaa'),
(2, 'aaa', 'aaa', 'aaa', 'aaa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `pic` varchar(100) DEFAULT 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `username`, `password`, `name`, `surname`, `email`, `admin`, `pic`) VALUES
(1, 'AdminUser', 'AdminUser', 'Carl', 'Johnson', 'CJ@gmail.com', 1, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(2, 'jone_12', '$2y$10$v0ol6pRtlxNu7tcyvfVi3ei7FfjXG4fhzgC6fLo3GoJFaRLfKrPTe', 'Jone', 'Etxandio', 'jone_12@gmail.es', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(3, 'gotzon95', '$2y$10$H7PhAgZ6RNSiAOeMNc0SsuawLhofoRLF8eiRoO1/zoPoqGilbpSRu', 'Gotzon', 'Galletebeitia', 'gotzon@gmail.com', 1, 'https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_8.jpg'),
(4, 'xarles', '$2y$10$mE69YDOZAMmQ36OaMRVMdeXUdaDf2oNsRIjkXrn80kKkIGa34mZyi', 'Xarles', 'Goitiz', 'xarles@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(5, 'markel84', '$2y$10$/BnTaXzShVsmqgva2cwuvOe/vhvJHtT2sLE2dzrBMl5emJMei94Li', 'Markel', 'Fernandez', 'markel84@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(6, 'Aitortilla19', 'S0lñW?#1849-aSW', 'Aitor', 'Ercoreca', 'Aitortilla19@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(7, 'viciauSP', '1267Ex?ññp&.', 'Horacio Jose', 'De la cruz', 'viciauSP-1@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(8, 'Mikel_domin', '57284753049AWD2', 'Mikel', 'Dominguez', 'mikel_domin@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(9, 'meraS98HD', '4534PSÑ?¿12A', 'Maria', 'Etxebarria', 'meraS98HD@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(10, 'noMires', '45647685745AS', 'Miranda', 'Rodriguez', 'noMires@gmail.es', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(11, 'Awthdrew14', '12443=¿', 'Andrew', 'Harrington', 'Awthdrew14@outlook.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(12, 'Carlos83', '4324255er?!', 'Carlos', 'Martin', 'CarlosM84@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(13, 'PeiGoi87', '3467WD#er', 'Peio', 'Goikoetxea', 'PeiGoi87@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(14, 'Miguel', '2345432SWF', 'Miguel', 'Casado', 'Miguelkasdelimon@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(15, 'BorjaHK', '3453R4ERF', 'Borja', 'Hidalgo', 'BorjaH@gmail.es', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(16, 'Jperez345', '5463563423de', 'Jose', 'Perez', 'Jperez345@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(17, 'Ane_uribe', '435254eefd233', 'Ane', 'Uribe', 'Aneuribe88@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(18, 'marcos', '$2y$10$H7PhAgZ6RNSiAOeMNc0SsuawLhofoRLF8eiRoO1/zoPoqGilbpSRu', 'Marcos', 'Fernandez', 'MarcosF@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(19, 'Juanrush3', '3456rtyu', 'Juan', 'Ivanov', 'Juanrush3@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(20, 'asMar', '34564SX', 'Asier', 'Martinez', 'asMar@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(21, 'MPsicolog', '234543SZ', 'Mireia', 'Saez', 'MPsicolog@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(22, 'AMontes@gmail.com', '234543es', 'Andres', 'Montes', 'AMontes', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(23, 'GLolbah', '234472sx', 'Gorka', 'Larrabeiti', 'GLolbah@gmail.com', NULL, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(24, 'And84', '2456sw', 'Ander', 'Uriarte', 'An84@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(25, 'Iñaki90', '5364748', 'Iñaki', 'Garcia', 'Iñaki90mer@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(26, 'Nerea18', '123986xd', 'Nerea', 'Vazquez', 'Nerea18@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(27, 'Eder_barrena', '35464ES', 'Eder', 'Barrena', 'Ederbarrena@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(28, 'Carlos_rodri', '532435iu', 'Carlos', 'Rodriguez', 'carlos_rodriguez@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(29, 'JasminaV', '35647', 'Jasmina', 'Valdes', 'JasminaV@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(30, 'MG998', '12345re', 'Maria', 'Gutierrez', 'MG998@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(31, 'iker_astorkia', 'rr¡455tegd?', 'Iker', 'Astorkia', 'iker_astorkia@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(32, 'Mateomate', '7823sx', 'Mateo', 'Santos', 'Mateomate@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(33, 'Aitor_arranz', '74633WED!!', 'Aitor', 'Arranz', 'Aitor_arranz@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'),
(34, 'Bartolo', '$2y$10$H7PhAgZ6RNSiAOeMNc0SsuawLhofoRLF8eiRoO1/zoPoqGilbpSRu', 'Bartolo', 'Bartolo', 'Bartolo@gmail.com', 0, 'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuerpomedico`
--
ALTER TABLE `cuerpomedico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_equipo` (`id_equipo`);

--
-- Indices de la tabla `datosmedicos`
--
ALTER TABLE `datosmedicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_jugador`);

--
-- Indices de la tabla `entrenadores`
--
ALTER TABLE `entrenadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_equipo` (`id_equipo`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `fotosequipo`
--
ALTER TABLE `fotosequipo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_equipo` (`id_equipo`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_datosMedicos` (`id_datosMedicos`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_equipo` (`id_equipo`);

--
-- Indices de la tabla `quejas`
--
ALTER TABLE `quejas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cuerpomedico`
--
ALTER TABLE `cuerpomedico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `datosmedicos`
--
ALTER TABLE `datosmedicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `entrenadores`
--
ALTER TABLE `entrenadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `fotosequipo`
--
ALTER TABLE `fotosequipo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `quejas`
--
ALTER TABLE `quejas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cuerpomedico`
--
ALTER TABLE `cuerpomedico`
  ADD CONSTRAINT `cuerpomedico_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cuerpomedico_ibfk_2` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `datosmedicos`
--
ALTER TABLE `datosmedicos`
  ADD CONSTRAINT `datosmedicos_ibfk_1` FOREIGN KEY (`id_jugador`) REFERENCES `jugadores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `entrenadores`
--
ALTER TABLE `entrenadores`
  ADD CONSTRAINT `entrenadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `entrenadores_ibfk_2` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD CONSTRAINT `equipos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `fotosequipo`
--
ALTER TABLE `fotosequipo`
  ADD CONSTRAINT `fotosequipo_ibfk_1` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jugadores_ibfk_2` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
