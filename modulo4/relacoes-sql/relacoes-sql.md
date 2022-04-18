## Exercício 1
a. Chave estrangeira (foreign key) é uma chave que se relaciona e referencia sempre uma primary key de outra tabela.

b. CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Filmes(id)
    );

INSERT INTO Rating
VALUES 
("01", "Muito bom, gostei muito", 7.6, "001"),
("02", "Achei OK", 6, "003"),
("001003", "Perfeição apenas", 10, "004"),
("0011649281147583", "Assustador demais", 8, "1649281147583");

c. Ocorreu o erro 1452, que diz que não é possível atualizar ou adicionar uma coluna, por restrição da foreign key.

d. ALTER TABLE Filmes
   DROP COLUMN avaliacao;

e. Erro 1451, que diz que não é possível deletar ou atualizar uma linha "pai" (ou mãe), por causa da foreign key, que esta relacionada diretamente a essa coluna.

## Exercício 2

a. Essa é uma tabela de elenco, que contém o id de um filme e o id de um ator. Ela referencia duas outras tabelas já existentes: a de filmes (Movie) e a de atores (Actor).

b. INSERT INTO MovieCast VALUES
("001","005"), ("003", "003"), ("004", "006"), ("003", "001"), ("003", "002"), ("004", "004"); 

c. Erro 1452: não é possível adicionar ou atualizar uma coluna "filha", por causa das restrições da foreign key.

d. Erro 1451: não é possível deletar ou atualizar uma linha "mãe"(ou pai).


## Exercício 3
a. O operador ON mostra a condição para que a tabela de filmes se relacione com a tabela de avaliações (que no caso é o id do filme, que aparece nas duas tabelas).

b. SELECT titulo, Filmes.id, rate from Rating
JOIN Filmes ON Filmes.id = Rating.movie_id;

## Exercício 4

a. SELECT titulo, rate, comment from Rating
RIGHT JOIN Filmes ON Filmes.id = Rating.movie_id;

b. SELECT Filmes.id, Filmes.titulo, MovieCast.actor_id from Filmes
RIGHT JOIN MovieCast ON MovieCast.movie_id = Filmes.id;

c. SELECT AVG(Rating.rate), Filmes.id, Filmes.titulo from Rating
RIGHT JOIN Filmes ON Filmes.id = Rating.movie_id
GROUP BY Filmes.id;

## Exercício 5

a. O primeiro JOIN une as tabelas Movie e MovieCast através do id dos filmes (porém só traz como resultado o que for comum nas duas). O segundo JOIN une a tabela Actor e MovieCast através do id do ator.

b. SELECT Filmes.id, Filmes.titulo, Actor.id, Actor.name FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.id
LEFT JOIN MovieCast ON MovieCast.movie_id = Filmes.id
JOIN Actor ON Actor.id = MovieCast.actor_id;

c. Deu erro, mas não sei porque.

d. SELECT Filmes.titulo, Rating.rate, Rating.comment, Actor.name as actor_name FROM Filmes
JOIN MovieCast ON MovieCast.movie_id = Filmes.id
JOIN Rating ON MovieCast.movie_id = Rating.movie_id
JOIN Actor ON MovieCast.actor_id = Actor.id;

