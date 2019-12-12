-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2019 a las 11:29:07
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `findJugadorByIdEquipo` (IN `inId` INT)  NO SQL
SELECT * FROM `jugadores` WHERE id =inId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `maxId` ()  NO SQL
select max(user.idUser) as maxId
from user$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindUserByUsername` (IN `pUsername` VARCHAR(50))  NO SQL
SELECT user.*  FROM user WHERE user.username=pUsername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertUser` (IN `pUsername` VARCHAR(10), IN `pAdmin` TINYINT, IN `pPass` VARCHAR(255))  NO SQL
INSERT INTO user(user.username,user.admin,user.password) VALUES
(pUsername,pAdmin,pPass)$$

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
  `id_usuario` int(11) NOT NULL,
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
  `id_datosMedicos` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `quejas`
--
ALTER TABLE `quejas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`id`) REFERENCES `equipos` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jugadores_ibfk_2` FOREIGN KEY (`id_datosMedicos`) REFERENCES `datosmedicos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jugadores_ibfk_3` FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
