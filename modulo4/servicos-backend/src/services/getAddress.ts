import axios from 'axios'
import { Address } from '../types/Address'

const baseURL = "https://viacep.com.br/ws"

export const getAddress = async(zipcode: string) => {
    try {
        const response = await axios.get(`${baseURL}/${zipcode}/json/`)
        const address: Address = {
            street: response.data.logradouro,
            district: response.data.bairro, 
            city: response.data.localidade,
            state: response.data.uf
        }
        return address
    }
    catch(e) {
        console.error("Erro no serviço getAddress", e)
        return null
    }
}