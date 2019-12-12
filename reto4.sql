-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2019 a las 09:38:05
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
  `id_usuario` int(11) NOT NULL
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
  `id_usuario` int(11) NOT NULL
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
  `id_usuario` int(11) NOT NULL
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
  `pic` varchar(100) DEFAULT '../images/default.jpg',
  `url` varchar(100) DEFAULT 'http://eu.wikipedia.org',
  `id_equipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `username`, `password`, `name`, `surname`, `email`, `admin`, `pic`, `url`, `id_equipo`) VALUES
(1, 'ana', '$2y$10$jNiP5vCy4oYEkNmyBaKD6uszRLncoSRduADoQhBUYJ4LTvIX/IikG', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(2, 'leire', '$2y$10$8u43.B3IRlPjbAWqMan17u3Kxi/Wm0JpLP6yf/38iML1SJyNx0aAC', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(3, 's', '$2y$10$XRy.fG/FHIKgqX43Ifpb9uSmNGlchlISO88Fan9IUCzLMyhZtNkDW', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(4, 'gotzon', 'aaa', 'gotzon', 'sdfsaf', 'asdfsdf', 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(5, 'aaa', '$2y$10$koBLsceWiSB4o3XRhbPNAuv7hbqrSxikZ/zFzrpl2DCVPrbNPSekO', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(6, 'bbb', '$2y$10$1PIgA.LzV8JdTFSXeOSifOeH/b25WbjN9/his8WIrK6SjusLCxpEy', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(7, 'ccc', '$2y$10$Efqm3/tTaRWEKkQoL1lGO.rjTG250GrfUDKABIw6SXBDJGdQokiXK', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(8, 'ddd', '$2y$10$zLlldvt0L24fZcR3xohfrOQsv7pNtjzWDi5IkacGc/obYbgvuqFz.', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(9, 'zzz', '$2y$10$bzBFXPMFnV4ON5Howe.d8.K5KcntzXhG7OXQjaPiSI2j/NzK2Fw6q', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0),
(10, 'xxx', '$2y$10$FfwI9RqU9R6NXGL7.Bd2KeGn1/aH9hg.6I6zSpta2juyM16R10VZe', NULL, NULL, NULL, 1, '../images/default.jpg', 'http://eu.wikipedia.org', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `id_equipo` int(1) DEFAULT NULL,
  `contrasena` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usuario` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `sexo`, `admin`, `id_equipo`, `contrasena`, `usuario`) VALUES
(1, 'sdfsdf', 'sdfsdf', 'h', 1, NULL, 'aaa', 'gotzon');

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
  ADD KEY `id_usuario` (`id_usuario`);

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
  ADD KEY `id_usuario` (`id_usuario`);

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
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `quejas`
--
ALTER TABLE `quejas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `id_equipo` (`id_equipo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_equipo` (`id_equipo`);

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
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `cuerpomedico_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `datosmedicos`
--
ALTER TABLE `datosmedicos`
  ADD CONSTRAINT `datosmedicos_ibfk_1` FOREIGN KEY (`id_jugador`) REFERENCES `jugadores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `entrenadores`
--
ALTER TABLE `entrenadores`
  ADD CONSTRAINT `entrenadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
