import axios from "./axios.js"
import { renderPhotosInGrid } from "./render.js"



const API_KEY = "ANa4eIPiTU503c7K0bekbxbvLeGCYCK5QieDSIEGkznJKFm9xCeWl5sV"
localStorage.setItem("key" , JSON.stringify(API_KEY))

const loadPhotos = async  () => {
    try {
        const response = await axios("/search?query=nature&per_page=80" ,{
            headers:{
                "Authorization" : "ANa4eIPiTU503c7K0bekbxbvLeGCYCK5QieDSIEGkznJKFm9xCeWl5sV"
            }
        })
        console.log(response);

    if(!response.status || response.status !== 200){
        throw new Error (response)
    }
    
    const data = response.data
    renderPhotosInGrid(data.photos);
    } catch (error) {
        console.log(error.message);
    }
}



loadPhotos() 











