import axios from 'axios'
const API = axios.create({baseURL: "http://localhost:5000"});

async function searchAPI(query){
    const res = await API.get(`/query/${query}`)
    .then(res=>res.json())
    .catch(err=>err)

    return res;
}

export {searchAPI}