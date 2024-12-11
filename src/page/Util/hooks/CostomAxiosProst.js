import axios from "axios";

const testUrl = `https://masjid-life-studentportal-backend.onrender.com/api/v1`
    // const mainUrl = `https://pu-server-side.onrender.com/api/v1`
    const token = JSON.parse(localStorage.getItem('authToken'))?.token
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
   
const CustomAxiosPost = async (url, data) => {
    
    try {
        const response = await axios.post(`${testUrl}${url}`,JSON.stringify(data) , {headers});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default CustomAxiosPost;