CREATE TABLE cupons (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
valor_total FLOAT(8) NOT NULL DEFAULT 0,
data TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE itens (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
id_cupom INT(6) UNSIGNED,
quantidade INT(4) NOT NULL DEFAULT 0,
valor_unitario FLOAT(8) NOT NULL DEFAULT 0,
data TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
FOREIGN KEY (id_cupom) REFERENCES cupons(id)
);
