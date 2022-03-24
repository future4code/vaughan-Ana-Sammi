let lista = ["Ler um livro", "Comprar leite"];

let novaTarefa = process.argv[2]

const addTarefa = () => {
    lista.push(novaTarefa)
}
addTarefa()

console.log(`Tarefa adicionada com sucesso! Tarefas: ${lista}`)