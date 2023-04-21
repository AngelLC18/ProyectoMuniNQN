CREATE DATABASE proyectoMuniNQN;
USE proyectoMuniNQN;

CREATE TABLE personas (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  dni INT NOT NULL,
  genero ENUM('Masculino', 'Femenino') NOT NULL,
  edad INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (dni)
);
CREATE TABLE cursos (
  id INT NOT NULL AUTO_INCREMENT,
  nombreU VARCHAR(50) NOT NULL,
  legajo VARCHAR(50) NOT NULL,
  descripcion TEXT(100),
  id_Modalidad INT,
  PRIMARY KEY (id),
  UNIQUE KEY (legajo)
);
