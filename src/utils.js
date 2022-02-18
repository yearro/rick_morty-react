import axios from 'axios'

const API = 'https://rickandmortyapi.com/api/character'

const getData = async id => {
    const apiUrl = id ? `${API}/${id}` : API
    try {
        const rsp = await axios.get(apiUrl)
        const { data } = rsp
        return data
    } catch (error) {
        console.log('Fetch error ', error);
    }
}

export default getData;