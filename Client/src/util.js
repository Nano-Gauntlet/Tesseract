import axios from 'axios'
const API = axios.create({baseURL: "http://4.240.72.94:8080/"});

async function searchAPI(query){
    const res = await API.get(`/query/${query}`)
    .then(res=>res.data)
    .catch(err=>err)

    return res;
}

export {searchAPI}