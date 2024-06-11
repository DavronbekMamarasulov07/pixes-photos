import axios from "./axios.js"
import { renderPreviewImage } from "./render.js"


const URL = location.search
const IMAGE_ID = new  URLSearchParams(URL).get("image-id")

const loadPrerewImg = async (id) => {
    try {
        const response = await axios(`/photos/${id}`, {
            headers:{
                "Authorization" : "ANa4eIPiTU503c7K0bekbxbvLeGCYCK5QieDSIEGkznJKFm9xCeWl5sV"
            }
        })
        renderPreviewImage(response.data)
    } catch (error) {
        console.log(error);
    }
}
loadPrerewImg(IMAGE_ID)