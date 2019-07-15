--
--  MySQL
--
DROP TABLE IF EXISTS  data;
CREATE TABLE products (
    id     INT(10) NOT NULL AUTO_INCREMENT,
    temp   INT(150),
    power  INT(150),
    smoke  INT(150),
    PRIMARY KEY (id)
);
ALTER TABLE orders AUTO_INCREMENT=1001;

