-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 23, 2023 at 12:06 PM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nestjssocial`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idCategory`, `Name`) VALUES
(1, 'Portugal'),
(2, 'Argentine'),
(3, 'Brésil'),
(4, 'France'),
(5, 'Pologne'),
(6, 'Italie'),
(7, 'Espagne'),
(8, 'Angleterre');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `idComment` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `postIdPost` int DEFAULT NULL,
  PRIMARY KEY (`idComment`),
  KEY `FK_0091cc449107357104af57ec87e` (`postIdPost`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`idComment`, `content`, `postIdPost`) VALUES
(7, 'Courage Ronaldo, continue comme ça !', 4),
(8, 'J\'ai hâte de te voir jouer encore mieux après tout ce travail !', 4),
(9, 'Tu es vraiment une inspiration pour nous tous.', 4),
(10, 'Tu as de la chance Ronaldo, j\'adorerais te rencontrer un jour !', 4),
(11, 'J\'ai vu des photos de cette rencontre sur Instagram, c\'était génial !', 4),
(12, 'Tes fans sont chanceux de t\'avoir rencontré !', 4),
(13, 'Félicitations Ronaldo, tu es vraiment un joueur incroyable !', 4),
(14, 'Je suis tellement fier de toi et de ton équipe, bravo !', 4),
(15, 'C\'est la consécration pour tout votre travail acharné, profitez-en bien !', 4),
(16, 'Bravo Messi, tu es vraiment un joueur exceptionnel !', 5),
(17, 'C\'est impressionnant ce que tu arrives à faire sur le terrain, continue comme ça !', 5),
(18, 'Je ne suis pas surpris que tu aies battu ce record, tu es un vrai phénomène !', 5),
(19, 'Tu es vraiment un exemple pour tous les jeunes joueurs, Messi !', 5),
(20, 'J\'aimerais bien voir ce que tu fais à l\'entraînement, ça doit être incroyable !', 5),
(21, 'Continue de travailler dur et tu atteindras des sommets encore plus hauts !', 5),
(22, 'Profite bien de tes vacances, Messi !', 6),
(23, 'Tu as raison de prendre du temps pour ta famille, c\'est important !', 5),
(24, 'J\'espère que tu te reposes bien et que tu es prêt à revenir sur le terrain en pleine forme !', 5),
(25, 'Bonne chance pour cette nouvelle saison, Neymar !', 6),
(26, 'J\'ai hâte de voir ce que tu vas nous montrer cette année sur le terrain !', 6),
(27, 'Tu es un vrai champion, tu vas encore briller cette saison !', 6),
(28, 'Allez Neymar, montre-leur de quoi tu es capable !', 6),
(29, 'Je suis sûr que tu vas faire des merveilles aujourd\'hui !', 6),
(30, 'On est tous derrière toi, Neymar !', 6);

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
CREATE TABLE IF NOT EXISTS `follow` (
  `idFollow` int NOT NULL AUTO_INCREMENT,
  `followerIdUser` int DEFAULT NULL,
  `followedIdUser` int DEFAULT NULL,
  PRIMARY KEY (`idFollow`),
  KEY `FK_ce5c63dd28ac97c39c72aeb2f78` (`followerIdUser`),
  KEY `FK_0a5e2c3ad392b492a362a495a17` (`followedIdUser`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`idFollow`, `followerIdUser`, `followedIdUser`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 2, 1),
(4, 2, 3),
(5, 3, 1),
(6, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idPost` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  KEY `idPost` (`idPost`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  `userIdUser` int DEFAULT NULL,
  `categoryIdCategory` int DEFAULT NULL,
  PRIMARY KEY (`idPost`),
  KEY `FK_543ab9a991e4a64b0124d9dc3e4` (`userIdUser`),
  KEY `FK_0e032659bbc472fdda17e5b4f0b` (`categoryIdCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`idPost`, `title`, `Description`, `video`, `userIdUser`, `categoryIdCategory`) VALUES
(4, 'Entrainement intensif', 'Séance d\'entrainement très difficile aujourd\'hui, mais le travail paiera !', 'https://example.com/videos/ronaldo_training.mp4', 1, 1),
(5, 'Rencontre avec mes fans', 'J\'ai eu la chance de rencontrer certains de mes fans aujourd\'hui, c\'était incroyable !', 'https://example.com/videos/ronaldo_fans.mp4', 1, 1),
(6, 'Victoire en Ligue des Champions', 'Nous avons remporté la Ligue des Champions pour la deuxième année consécutive ! Merci à tous les supporters pour votre soutien !', 'https://example.com/videos/ronaldo_champions.mp4', 1, 1),
(7, 'Nouveau record', 'J\'ai battu le record de buts en Liga ! Merci à mes coéquipiers pour leur soutien !', 'https://example.com/videos/messi_record.mp4', 2, 2),
(8, 'Séance d\'entrainement', 'En train de peaufiner mes compétences à l\'entrainement aujourd\'hui.', 'https://example.com/videos/messi_training.mp4', 2, 2),
(9, 'Vacances en famille', 'Profiter d\'un peu de temps libre avec ma famille', 'https://example.com/videos/messi_vacation.mp4', 2, 2),
(10, 'Nouvelle saison', 'Nous sommes prêts pour une nouvelle saison !', 'https://example.com/videos/neymar_season.mp4', 3, 3),
(11, 'Match important', 'Prêt pour un match important aujourd\'hui !', 'https://example.com/videos/neymar_match.mp4', 3, 3),
(12, 'Séance de tirs au but', 'En train de travailler mes tirs au but à l\'entrainement aujourd\'hui.', 'https://example.com/videos/neymar_shooting.mp4', 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `profil_image` varchar(255) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`idUser`, `username`, `name`, `date_of_birth`, `profil_image`) VALUES
(1, 'ronaldo', 'Cristiano Ronaldo', '1985-02-05 00:00:00', 'https://example.com/profiles/ronaldo.jpg'),
(2, 'messi', 'Lionel Messi', '1987-06-24 00:00:00', 'https://example.com/profiles/messi.jpg'),
(3, 'neymar', 'Neymar Jr', '1992-02-05 00:00:00', 'https://example.com/profiles/neymar.jpg'),
(4, 'mbappe', 'Kylian Mbappé', '1998-12-20 00:00:00', 'https://example.com/profiles/mbappe.jpg'),
(5, 'lewandowski', 'Robert Lewandowski', '1988-08-21 00:00:00', 'https://example.com/profiles/lewandowski.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK_0091cc449107357104af57ec87e` FOREIGN KEY (`postIdPost`) REFERENCES `post` (`idPost`);

--
-- Constraints for table `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `FK_0a5e2c3ad392b492a362a495a17` FOREIGN KEY (`followedIdUser`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `FK_ce5c63dd28ac97c39c72aeb2f78` FOREIGN KEY (`followerIdUser`) REFERENCES `user` (`idUser`);

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`idPost`) REFERENCES `post` (`idPost`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_0e032659bbc472fdda17e5b4f0b` FOREIGN KEY (`categoryIdCategory`) REFERENCES `category` (`idCategory`),
  ADD CONSTRAINT `FK_543ab9a991e4a64b0124d9dc3e4` FOREIGN KEY (`userIdUser`) REFERENCES `user` (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
