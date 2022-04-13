## Exercício 1
a. Quando usamor o raw, a resposta vem exatamente como o MySQL envia (array de arrays de objetos).

b. const getActorsName = async(name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name="${name}"
    `)
    return result[0][0]
};

c. const getGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) from Actor WHERE gender = "${gender} 
    `)
    return result[0][0].count
};

## Exercício 2
a. const updateActor = async(
    id: string,
    salary: number
): Promise<void> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where("id", id)
};

b. const deleteActor = async(
    id: string
): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

c. const getAvgSalary = async(gender: string): Promise<void> => {
    await connection("Actor")
        .avg("salary")
        .where("gender", gender)
};

## exercício 3

a. app.get("/actor/:id", async (req, res) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (e:any) {
        res.status(400).send(e.message)
    }
});

b. app.get("/actor", async(req, res) => {
    try {
        const gender = req.query.gender as string
        const count = await getGender(gender)
        res.status(200).send(count)
    } catch(e:any) {
        res.status(400).send(e.message)
    }
});

## Exercício 4
a. app.put("/actor", async(req, res) => {
    try {
        await updateSalary(
            req.body.id,
            req.body.salary
        );
        res.status(200).end()
    } catch(e:any) {
        res.status(400).send(e.message)
    }
});

b. app.delete("/actor/:id", async(req, res) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).end()
    } catch(e: any) {
        res.status(400).send(e.message)
    }
});

## Exercício 5
const createMovie = async(
    id: string,
    titulo: string,
    sinopse: string,
    data_lancamento: Date,
    playing_limit_date: Date,
    avaliacao: number
): Promise<void> => {
    await connection("Filmes")
    .insert({
        id: id,
        titulo: titulo,
        sinopse: sinopse,
        data_lancamento: data_lancamento,
        playing_limit_date: playing_limit_date,
        avaliacao: avaliacao
    })
    .into("Filmes")
};

app.post("/movie", async(req, res) => {
    try {
        await createMovie(
            Date.now().toString(),
            req.body.titulo,
            req.body.sinopse,
            req.body.data_lancamento,
            req.body.playing_limit_date,
            req.body.avaliacao
        )
        res.status(201).send("Filme criado com sucesso")
    }
    catch(e:any) {
        res.status(400).send(e.message)
    }
})

## Exercício 6
const getAllMovies = async (): Promise<any> => {
  const result = await connection("Filmes").select().limit(15); 
    return result
};


app.get("/movie/all", async (req, res) => {
  try {
    const filmes = await getAllMovies()
    res.status(200).send(filmes)
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

## Exercício 7
const searchMovie = async(busca: string): Promise<any> => {
    const result = await connection("Filmes").select().where(`titulo, like, "${busca}"`);
    return result; 
};

app.get("/movie/search", async(req, res) => {
    try {
        const resultado = await searchMovie(req.query.busca as string);
        res.status(200).send(resultado)
       
    } catch(e:any){
        res.status(400).send(e.message)
    }
});