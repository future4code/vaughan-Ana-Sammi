type Pessoa = {
    name: string,
    email: string,
    role: string
}

export const listaPessoas: Pessoa[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

export const filtraAdmin = (listaPessoas: Pessoa[]): string[] => {
    let admins = listaPessoas.filter((pessoa) => {
        return pessoa.role === "admin"
    }).map((pessoa) => {
        return pessoa.email
    })

    return admins
}