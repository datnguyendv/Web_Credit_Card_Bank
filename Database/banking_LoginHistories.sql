-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: banking
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `LoginHistories`
--

DROP TABLE IF EXISTS `LoginHistories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LoginHistories` (
  `LoginId` int(11) NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `accountAccountId` int(11) DEFAULT NULL,
  `loginHisStatusStatusID` int(11) DEFAULT NULL,
  PRIMARY KEY (`LoginId`),
  KEY `FK_34114549fd754146e6e048e7bd2` (`accountAccountId`),
  KEY `FK_17c6fa9170c765708b9c5cf77e8` (`loginHisStatusStatusID`),
  CONSTRAINT `FK_17c6fa9170c765708b9c5cf77e8` FOREIGN KEY (`loginHisStatusStatusID`) REFERENCES `LoginHisStatuses` (`StatusID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_34114549fd754146e6e048e7bd2` FOREIGN KEY (`accountAccountId`) REFERENCES `Accounts` (`AccountId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LoginHistories`
--

LOCK TABLES `LoginHistories` WRITE;
/*!40000 ALTER TABLE `LoginHistories` DISABLE KEYS */;
INSERT INTO `LoginHistories` VALUES (81,'2021-12-02','01:27:05','datvtvn69','$2a$10$mU8.rAOrYcdFVd2fhLQAqulAa2ulWQnYk53VBLK5wtXdK.NpJwzU2',5,1),(82,'2021-12-02','01:27:56','datvtvn69','$2a$10$QzIX621FoCXzFfUKNodQyek7R6nhwQ94y9nvPntmHN/Q7mn2EUoPW',5,1),(83,'2021-12-02','01:37:41','datvtvn69','$2a$10$gArGLMf5qNSrcmbm6jF.QOzrt1GooM2xOaGFjdBNHcsOjvnws8WB6',5,1),(84,'2021-12-02','02:40:26','datvtvn69','$2a$10$qoSxdZ3mUJ7TxgcAsJtw4uoVsBSxewvtpB1QXgzuTOFphx0e12nhi',5,2),(85,'2021-12-02','02:40:37','datvtvn69','$2a$10$f5VYZpNyZxDY7QqNuZJ4M.4lAYNVHFiUqDNvz6yCjZcT/unRQc6Zu',5,1),(86,'2021-12-03','08:31:11','datvtvn69','$2a$10$wAvAB.HDkgEALJv8dIz4dOLTySR8.g7TnQXGzJ6nopjocJSTYEOBu',5,1),(87,'2021-12-03','20:09:11','datvtvn69','$2a$10$jkYCK7rde5mkarTXNtKoJuWOf1nCqo7yNIS4bIJszQk6JbL9hsYPe',5,2),(88,'2021-12-03','20:09:27','datvtvn69','$2a$10$EjCO00J2j9BhR7Xym0Pkt.0..tZawKCQzw9TRycogpw4GokDApYIS',5,1),(89,'2021-12-03','22:16:32','datvtvn69','$2a$10$P8HmpOLeEZVMM2zhBccKneJ5LJLzVeceBCjj.GYLVqxISynWoAVQi',5,2),(90,'2021-12-03','22:16:39','datvtvn69','$2a$10$4xs2YiWyUZvIkYrtuGX/Q.mqFdtplmUn2jC2/PZEEll.8lJjvxOD.',5,1),(91,'2021-12-03','22:17:40','datvtvn69','$2a$10$a1KLA0qDvTXRqiiFvbxQhuIBKRMnWAx.kecq/vcb0V59EHcuRDkdO',5,1),(92,'2021-12-04','00:52:12','datvtvn69','$2a$10$THyKTBLR/UoWqgIaCKff0OtOZfvlxri1f5xvk.HbSii9uZGlG8Rru',5,2),(93,'2021-12-04','00:52:33','datvtvn69','$2a$10$nt5uhlNQyM5lPu8F2nhMpOnC6dvbAbuuVpU9RwpGstR0IUnpgATdu',5,1),(94,'2021-12-04','03:20:15','datvtvn69','$2a$10$ZUETI4Cqnjga4SsNFVFvj.Ipbn1iScHigT.TE.b1zjmy45IwOQsXK',5,2),(95,'2021-12-04','03:20:22','datvtvn69','$2a$10$iHUguWdjC4muRPVYiAFK9u1uW7MI.Og0.Be20Sx4ATRJ9ZjXL9KvC',5,2),(96,'2021-12-04','03:20:28','datvtvn69','$2a$10$.fev1fJZ.uyGm618Dy5/seki3WwGkIYQsThbpjBUj16BFuJD2pSRm',5,1),(97,'2021-12-04','06:13:23','datvtvn69','$2a$10$2kv.gOkKwDgsKHZngues/.77c8Bz9f4kWOdkdNVs/b/ryCou7fBT2',5,1),(98,'2021-12-04','11:56:57','datvtvn69','$2a$10$2VH6GFLjgps5okMIIva2lutSfdya7mfHOHS16lqsHW0qaEqPvMXYy',5,1),(99,'2021-12-04','12:20:57','datvtvn69','$2a$10$9BGuimX930DRopHGKPtRPOiwUPm1kRzu/ZsP6RHEG1IIyddpMYvE6',5,1),(100,'2021-12-04','12:21:49','datvtvn69','$2a$10$xZpF6.lMnoetzprcTIMNt.z.ihqCsfJZnn9Q.8fMzdJeS33V8gYiW',5,1),(101,'2021-12-04','12:23:50','datvtvn69','$2a$10$kT/TCMwNCoYMNl7G8Xtcs.VkX06GWtiu00X86Lmt9Kppl4xUhQFLm',5,1),(102,'2021-12-04','14:44:16','datvtvn69','$2a$10$d9gFjLWH78OmxXoJ8leb1OQtQgCsdLnr2wzNXLyMrlAUPsZ9PLPzG',5,1),(103,'2021-12-04','15:43:47','datvtvn69','$2a$10$.wzLROgDPTPaarQ5IrHzCOusw8.gHz1hd5kO6SxehTwtfCKeOt9sO',5,1),(104,'2021-12-04','18:33:26','datvtvn69','$2a$10$Or.a3k1nQwvKO9kf6vEZW.j7oNmy/nqoNsb8/kt9EG3F1KAxBjjba',5,1),(105,'2021-12-04','18:41:31','datvtvn69','$2a$10$FajcQnB.SHsmg8/G/NhfOOm2HFGlUgLJZQF.EherFhs0TOhLYzlsa',5,1),(106,'2021-12-04','20:08:24','datvtvn69','$2a$10$1N689/o5Q.ZjehqqXsz0LeuRaY3.YksTST.LHHz4MwvhBs1O2dtZy',5,1),(107,'2021-12-04','21:04:15','datvtvn69','$2a$10$5kYS6t.UOJmmJDpzXZzSf.9JLEacEz0eILwQ3sOPxualvrw3uzk8q',5,2),(108,'2021-12-04','21:04:31','datvtvn69','$2a$10$v81.G4kMdrATCNDIQ9T.DOBvl5JNx8yN/ojyxggX6UAUUwcdR3gMC',5,1),(109,'2021-12-04','21:17:56','datvtvn69','$2a$10$VZuBAtMp9ZioyH7utMPo0eFP0l4UIgsvM1YWRUnD/iNe41agKLuMi',5,1),(110,'2021-12-04','21:20:34','datvtvn69','$2a$10$8rycDTaLkkUSyCYV1l5EuuWj7i4ucZ3XekcpfcH0ZYMT3sn9xgeje',5,1),(111,'2021-12-04','21:21:24','datvtvn69','$2a$10$dBwyn3HLGG7DLAuWlTyum.7sFcz3EwCy2C8oOXgq7YFgx9j2OgEdO',5,1),(112,'2021-12-04','21:31:32','datvtvn69','$2a$10$5DwH56QKyF5L3iYa1zw83OEe4xsw18yh3rM/69HvcZn3DpBETtPPu',5,1),(113,'2021-12-04','21:38:56','datvtvn69','$2a$10$1zkUreWLGT6e77IdTBN8buCB07IFp9JOwupAO1YZEXK9c6pV3GjYO',5,1),(114,'2021-12-04','21:44:24','datvtvn69','$2a$10$xpkqtoDGfB6BEAfGvpdK6uDh6u/lqXZqkDm/fE/j5eU8l1bCGV5cG',5,1),(115,'2021-12-04','21:47:38','datvtvn69','$2a$10$lHJqOhh0pY.mdINiqEEz7ORDMVRrox6gLdJT5a64snp/nft7jJL0q',5,2),(116,'2021-12-04','21:50:53','datvtvn69','$2a$10$AkZJmmVNhMuazU8DvB2jZutwYtgq8uLHCoAXs6I87QNWmEmsFzDJG',5,1),(117,'2021-12-04','21:56:00','datvtvn69','$2a$10$cx.wZ8yv29FXz/97WOZdROZFDqBZW04Z/5iixCf8lKekME6iE6yQC',5,1),(118,'2021-12-05','00:48:14','datvtvn69','$2a$10$bUtmQQ.lXxrxAe8B1SH2XO9uudQuzhdOo0x1yWku.hbHmVSgP9Nsu',5,1),(119,'2021-12-05','04:43:22','datvtvn69','$2a$10$Oah2Lp9Uk8Og8.2RJhdsx.4plkXnqkFGtqi6EYOyliI.qTKqJPXk2',5,1),(120,'2021-12-05','06:04:00','datvtvn69','$2a$10$C/DurXGGhTSSN3ZvPBGhL.EHFFBRaSHKs5rfjMcMUhP8GVMuo4rVy',5,2),(121,'2021-12-05','06:04:09','datvtvn69','$2a$10$4JD//zu.lcE8EkOIze7Dyu64ae416WEZ/IZLSWmLEVcAz5y.VjTJm',5,2),(122,'2021-12-05','06:04:20','datvtvn69','$2a$10$53XMaQrKXctn9nCWUhhlIeoH0PuVAxGukz1tmbZuMN7HwyBT/XuVu',5,1),(123,'2021-12-05','08:15:31','datvtvn69','$2a$10$9xE/xR6ad8Fug7aX3rB6LO59qn5sw9MlrZruJL8KrcWZe3O3y/t8S',5,1),(124,'2021-12-05','08:28:28','datvtvn69','$2a$10$9u42czNk8E4jCOv/rqng4eT9DFfbLeTakUCp83oU77C8zln/KmYt2',5,1),(125,'2021-12-05','08:30:43','datvtvn69','$2a$10$b1iM.WIUbYIx4CtmhXKp/OHDvYZnx5CLg63XTETSZvgrH/wknXT7G',5,1),(126,'2021-12-05','08:32:17','datvtvn69','$2a$10$WYwLu.ZHha3sC9U5R8Fp0emli4fbz/ToiAXo2qFDPH7DjmVHqhO0S',5,1),(127,'2021-12-05','10:06:49','datvtvn69','$2a$10$vHlNn6cTiYPeFXVd2XIoguTaMpmdVi1/eLA6PzY0hzPzeecSD.V6W',5,1),(128,'2021-12-05','10:07:16','datvtvn69','$2a$10$MlXeLK5.c9wMI3XI2qiAD.alcrCyiNDLOrNpF6jMVvby16gnYBlQS',5,1),(129,'2021-12-05','11:53:24','LaughingAdmin1','$2a$10$609ldKeXDob/hrOFSv3P/.dC1PCtSEae85oA4G7vbf7or8vX0ugBS',19,1);
/*!40000 ALTER TABLE `LoginHistories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-05 19:33:34
