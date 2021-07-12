-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-07-2021 a las 00:31:52
-- Versión del servidor: 5.7.25
-- Versión de PHP: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `orthodiagnosticar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `identificacion` bigint(20) NOT NULL,
  `nombres` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `identificacion`, `nombres`, `apellidos`) VALUES
(1, 9695141, 'CESAR LEANDRO', 'PATIÑO VELEZ'),
(2, 34050202, 'BEATRIZ EUGENIA', 'CAVAL RIOS'),
(3, 42759761, 'MARY LUZ', 'VILLEGAS GIRALDO'),
(4, 1010125404, 'YENIFER', 'IDARRAGA GUTIERREZ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientesprofesional`
--

CREATE TABLE `pacientesprofesional` (
  `id` bigint(20) NOT NULL,
  `cliente` bigint(20) NOT NULL,
  `profesional` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fechahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pacientesprofesional`
--

INSERT INTO `pacientesprofesional` (`id`, `cliente`, `profesional`, `fechahora`) VALUES
(1, 42759761, 'ceslep@gmail.com', '2021-06-25 00:08:19'),
(2, 9695141, 'ceslep@gmail.com', '2021-06-30 00:17:11'),
(3, 1010125403, 'ceslep@gmail.com', '2021-06-30 17:35:59'),
(4, 34050202, 'ceslep@gmail.com', '2021-07-03 00:45:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

CREATE TABLE `profesionales` (
  `id` bigint(20) NOT NULL,
  `identificacion` bigint(20) NOT NULL,
  `nombres` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` bigint(20) NOT NULL,
  `creado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `profesionales`
--

INSERT INTO `profesionales` (`id`, `identificacion`, `nombres`, `apellidos`, `correo`, `password`, `telefono`, `creado`) VALUES
(1, 9695141, 'CESAR LEANDRO', 'PATIÑO VELEZ', 'ceslep@gmail.com', '*A4B6157319038724E3560894F7F932C8886EBFCF', 3218552353, '2021-06-23 15:20:37'),
(2, 7913, 'Administrador', 'Orthodiagnosticar', 'admin', '*67C4C15CADCDE9D8C6AF0E0D54B8BC7925F9D262', 3218552353, '2021-07-07 16:05:50');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pacientesprofesional`
--
ALTER TABLE `pacientesprofesional`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesional` (`profesional`);

--
-- Indices de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `identificacion` (`identificacion`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pacientesprofesional`
--
ALTER TABLE `pacientesprofesional`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pacientesprofesional`
--
ALTER TABLE `pacientesprofesional`
  ADD CONSTRAINT `pacientesprofesional_ibfk_1` FOREIGN KEY (`profesional`) REFERENCES `profesionales` (`correo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
