import {useEffect, useState} from 'react' 
import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {getData()}, [url])

    const getData = () => {
        axios.get(url, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data)
            getData()
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return [data, getData]
}

export default useRequestData