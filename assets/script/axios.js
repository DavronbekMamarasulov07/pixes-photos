const instance = axios.create({ 
    baseURL: "https://api.pexels.com/v1",
    headers:{
        "Content-Type" : "application/json", 
        "Authorization" : localStorage.getItem("key")
    }
})
export default instance
