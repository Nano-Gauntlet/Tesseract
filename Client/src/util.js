import axios from 'axios'
const API = axios.create({baseURL: "https://e47a-103-210-202-201.ngrok.io"});

async function searchAPI(query){
    const res = await API.get(`/query/${query}`)
    .then(res=>res.data)
    .catch(err=>err)

    return res;
}

export {searchAPI}