-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2019 a las 11:00:56
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllEntrenadores` ()  NO SQL
SELECT * FROM entrenadores$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllEquipos` ()  NO SQL
select * from equipos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllJugadores` ()  NO SQL
SELECT * FROM jugadores$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllUsers` ()  NO SQL
SELECT * FROM user$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteUser` (IN `pId` INT)  NO SQL
DELETE FROM USER WHERE USER.idUser=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindCuerpoByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM cuerpomedico WHERE id_equipo=inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindEntrenadorByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM entrenadores WHERE id_equipo=inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindJugadorByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM jugadores WHERE id_equipo = inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindUserById` (IN `inId` INT)  NO SQL
SELECT * FROM user WHERE idUser = inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindUserByUsername` (IN `pUsername` VARCHAR(50))  NO SQL
SELECT user.*  FROM user WHERE user.username=pUsername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertUser` (IN `pUsername` VARCHAR(10), IN `pAdmin` TINYINT, IN `pPass` VARCHAR(255), IN `pName` VARCHAR(50), IN `pSurname` VARCHAR(50), IN `pEmail` VARCHAR(50))  NO SQL
INSERT INTO user(user.username,user.admin,user.password,user.name,user.surname,user.email) VALUES
(pUsername,pAdmin,pPass,pName,pSurname,pEmail)$$

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
(5, 'juvenil', '10.50');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosmedicos`
--

CREATE TABLE `datosmedicos` (
  `id` int(11) NOT NULL,
  `lesiones` int(11) NOT NULL,
  `tipoSangre` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `enfermedades` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `id_jugador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(1, 'F', 'juvenil B', 5);

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
(2, 'dsadsads', 12, 'alero', '123123123', '1.90', NULL, 26, 1);

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
  `pic` varchar(100) DEFAULT '../images/default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `username`, `password`, `name`, `surname`, `email`, `admin`, `pic`) VALUES
(26, 'userprueba', '123', 'user', 'prueba', 'user@gmail.com', 0, '../images/default.jpg'),
(27, 'aaa', '$2y$10$v0ol6pRtlxNu7tcyvfVi3ei7FfjXG4fhzgC6fLo3GoJFaRLfKrPTe', 'aa', 'aa', 'aa', 0, '../images/default.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cuerpomedico`
--
ALTER TABLE `cuerpomedico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datosmedicos`
--
ALTER TABLE `datosmedicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entrenadores`
--
ALTER TABLE `entrenadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `quejas`
--
ALTER TABLE `quejas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

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
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jugadores_ibfk_2` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
