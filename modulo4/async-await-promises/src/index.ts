import axios from "axios"
import { baseURL } from "./baseURL"

//Exercício 1
// a. get subscribers
// b. Promise<any[]>

// const getSubscribers = ():Promise<any[]> => {
//     return axios
//     .get(`${baseURL}/subscribers`)
//     .then(res => res.data)
    
// }

//Exercício 2
// a. A diferença é que na arrow function o async vai antes do nome da função.

//Exercício 3
// a. Não.
// b. Sim, pois daí seria possível colocar um tipo definido na Promise.

type user = {
	id: string;
	name: string;
	email: string;
};

const getAllSubscribers = async():Promise<user[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data.map((user: any) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        } as user
    }) as user[]
    };

    const getSubscribersDaId = (users: any): string[] => {
        return users.map((user:any) => {
            return user.id    
        })
    };

//Exercício 4
//a. Função assíncrona, pois ela espera outras funções finalizarem antes de iniciar.
type News = {
    title: string,
    content: string,
    date: number
};

const news: News = {
    title: "Homem morde cachorro",
    content: "Homem raivoso morde cachorro tranquilo",
    date: Date.now()
};

const createNews = async(news:News):Promise<void> => {
    return axios.put(`${baseURL}/news`, news)  
};

// Exercício 5


// const notifyAllSubscribers = (users:user[], message:string) => {
//     for (const id of users) {
//         axios.post(`${baseURL}/notifications`, {
//             subscriberId: id.id,
// 	        message
//         })
//         .then(() => console.log("Deu certo", id))
//         .catch(() => console.log("Erro", id))
//     }
// }

//Exercício 6
//a. O Promise.all evita que haja uma queda na performance do código esperando uma requisição antes de enviar outra.

const notifyAllSubscribers = async(ids:string[]): Promise<void> => {
    try {
        const result = ids.map((id) => { axios
        .post(`${baseURL}/notifications`, {
            subscriberId: id,
            message: "Hello subscribers"
        } )})
        console.log(await Promise.all(result))
    }
    catch (e) {
        console.log(`Erro ao notificar os assinantes`)
    } 
};


const main = async (): Promise<void> => {
    try {
        await createNews(news)
        const users = await getAllSubscribers()
        const ids = getSubscribersDaId(users)
        await notifyAllSubscribers(ids)
    } catch (error: any) {
        console.log(error.response?.data || error.message)
    }
};

main()