# 🎲 Exercícios - Aprofundamento SQL

### Exercício 1
a. Esse comando deleta a coluna chamada "salary".
b. Esse comando troca o nome da coluna de "gender" para "sex", que será um texto com, no máximo, 6 caracteres.
c. Esse comando altera apenas o tipo da coluna "gender", mantendo o mesmo nome.
d. ```ALTER TABLE Actor CHANGE gender gender VARCHAR(100) NOT NULL;```

### Exercício 2
a. ```UPDATE Actor 
SET name="Tiago Abravanel", birth_date="1985-10-30" WHERE id="003";```
b. 
```
UPDATE Actor
SET name="JULIANA PAES" 
WHERE name="Juliana Paes";

UPDATE Actor 
SET name="Juliana Paes"
WHERE name="JULIANA PAES";
```
c. 
```
UPDATE Actor
SET name="Fábio Assunção", salary=450000, birth_date="1967-12-05", gender="male", favorite_ice_cream_flavor="morango", type="NotDirector"
WHERE id="005";
```

d. Mensagem:```0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0```.
Isso significa que não ocorreu um erro, mas também não houve atualização de nenhuma linha, pois o id era inexistente.

### Exercício 3
a. ```DELETE FROM Actor WHERE name="Fernanda Montenegro";```
b. ```DELETE FROM Actor WHERE salary>1000000 AND gender="male";```

### Exercício 4
a. ```SELECT MAX(salary) from Actor;```
b. ```SELECT MIN(salary) from Actor WHERE gender="female";```
c. ```SELECT COUNT(*) from Actor WHERE gender="female";```
d. ```SELECT SUM(salary) from Actor;```

### Exercício 5
a. Essa query separa os atores em gêneros e dá a quantidade que tem em cada um.
b. ```SELECT id, name from Actor ORDER BY name DESC;```
c. ```SELECT * from Actor ORDER BY salary ASC;```
d. ```SELECT * from Actor ORDER BY salary DESC LIMIT 3;```
e. ```SELECT AVG(salary), gender from Actor GROUP BY gender;```

### Exercício 6
a. ```ALTER TABLE Filmes
ADD COLUMN playing_limit_date DATE;```
b. ```ALTER TABLE Filmes
CHANGE avaliacao avaliacao FLOAT NOT NULL;```
c. ```UPDATE Filmes SET playing_limit_date = "2022-06-12" WHERE id="003";```
```UPDATE Filmes SET playing_limit_date="2020-02-26" WHERE id="001";```
d. Foi possível atualizar a sinopse do filme que deletei, porém ele não é chamado quando se puxa a tabela toda.

### Exercício 7
a. ```SELECT * from Filmes
WHERE avaliacao > 7.5;```
b. ```SELECT AVG(avaliacao) from Filmes;```
c. ```SELECT COUNT(*) from Filmes
WHERE CURDATE() > playing_limit_date;```
d. ```SELECT COUNT(*) from Filmes
WHERE data_lancamento > CURDATE();```
e. ```SELECT MAX(avaliacao) from Filmes;```
f. ```SELECT MIN(avaliacao)```

### Exercício 8
a. ```SELECT * from Filmes
ORDER BY nome ASC;```
b. ```SELECT * from Filmes
ORDER BY nome DESC
LIMIT 5;```
c. ```SELECT * from Filmes
WHERE playing_limit_date > CURDATE()
ORDER BY data_lancamento;```
d. ```SELECT * from Filmes
ORDER BY avaliacao DESC
LIMIT 3;```










