-- --------------------------------------------------------
-- Host:                         roundhouse.proxy.rlwy.net
-- Versión del servidor:         8.3.0 - MySQL Community Server - GPL
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla railway.registers: ~5 rows (aproximadamente)
INSERT INTO `registers` (`id`, `Nombres`, `Apellidos`, `Correo`, `Telefono`, `Contrasena`) VALUES
	(1, 'joseph', 'lopez', 'josephlopezh1@gmail.com', '311262645', 'hola.123'),
	(2, 'Biviana', 'henao', 'billana@gmail.com', '34847', 'biviana.123'),
	(3, 'Alexander', 'Lopez', 'Alexanderlopez@gmail.com', '3112625555', 'Hola.123'),
	(4, 'Esteban', 'Lopez', 'Estebanlopez@gmail.com', '3219929706', 'Hola.1234'),
	(5, 'edwin', 'marin', 'edwinmarin@gmail.com', '24551545', '123');

-- Volcando datos para la tabla railway.users: ~1 rows (aproximadamente)
INSERT INTO `users` (`id`, `correo`, `contrasena`) VALUES
	(1, 'joseph.lopezh1@gmail.com', 'hola.123');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
