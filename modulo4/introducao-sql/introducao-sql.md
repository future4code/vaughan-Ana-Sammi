## Exercício 1
a. Resposta: 
    VARCHAR(255) representa uma string com, no máximo, 255 caracteres.
    DATE representa uma data no formato YYYY-MM-DD.
b. O comando SHOW DATABASES deu como resultado o nome das bases de dados (no caso, só uma, a que criamos para a Labenu). Já o comando SHOW TABLES mostrou o nome das tabelas.

c. O comando DESCRIBE Actor mostrou exatamente o que passamos no CREATE TABLE Actor: os nomes e tipos de cada coluna.

## Exercício 2
a. INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");

b. Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' (Código de erro: 1062. Entrada '002' duplicada para a chave 'PRIMÁRIA'). Esse erro ocorreu porque o id está tipado como PRIMARY KEY, ou seja, não podem haver duas entradas com ids iguais.

c. Error Code: 1136. Column count doesn't match value count at row 1
(Código de erro: 1136. A contagem da coluna não corresponde à contagem de valores na linha 1.)
Esse erro ocorreu pois foram passados apenas 3 parâmetros para serem inserido, porém 5 valores. Ou seja, não há correspondência entre linha e coluna.
Corrigido ficaria assim:
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
    );

d. Error Code: 1364. Field 'name' doesn't have a default value
(Códio de erro: 1364. O campo 'name' não possui um valor padrão)
Esse erro ocorreu porque não foi inserido um nome, e o campo 'name' não pode ser NULL.
Corrigido ficaria assim:
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "004",
    "Tarcísio Meira",
    400000,
    "1949-04-18", 
    "male"
    );

e. Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
(Códio de erro: 1292. Valor de dado incorreto: '1950' para a coluna 'birth_date' na linha 1)
O erro aconteceu pois a coluna birth_date aceita apenas o formato date, que deve ser passado entre aspas no formato YYYY-MM-DD.
Corrigido:
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
    );

## Exercício 3

a. SELECT * from Actor WHERE gender="female";

b. SELECT salary from Actor WHERE name="Tony Ramos";

c. SELECT * from Actor WHERE gender="invalid";
Não retornou nada, pois não há nenhuma entrada "invalid" em "gender".

d. SELECT id, name, salary from Actor WHERE salary<=500000;

e. Error Code: 1054. Unknown column 'nome' in 'field list' (código de erro: 1054. Coluna 'nome' não encontrada em 'field list').
Esse erro ocorreu pois o nome da coluna é 'name' e não 'nome'.
Corrigido:
    SELECT id, name from Actor WHERE id="002";


## Exercício 4

a. A query utiliza o LIKE e o % para buscar nomes que comecem com A ou J, independentemente do que venha depois.

b. SELECT * from Actor WHERE name NOT LIKE ("A%") AND salary < 350000;

c. SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d. SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

## Exercício 5
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

A query cria uma tabela chamada filmes com 5 colunas: id (aceita variável do tipo "string" e não pode ser repetida), nome (string com no maximo 255 caracteres), sinopse (tipo texto, que suporta até 2GB de dados), data_lancamento (formato data YYYY-MM-DD) e avaliacao (número inteiro).


## Exercício 6

a. SELECT id, nome, avaliacao from Filmes WHERE id="002";

b. SELECT * from Filmes WHERE nome="Deus é Brasileiro";

c. SELECT id, nome, sinopse from Filmes WHERE avaliacao>=7;

## Exercício 7

a. SELECT * from Filmes WHERE nome LIKE "%vida%";

b. SELECT * from Filmes WHERE nome LIKE "%mãe%" OR sinopse LIKE "%mãe%";

c. SELECT * from Filmes WHERE data_lancamento < "2022-04-04";

d. SELECT * from Filmes WHERE data_lancamento < "2022-04-04" AND (nome LIKE "%a%" OR sinopse LIKE "%a%") AND  avaliacao>=7;


