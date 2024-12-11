import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetData = (url) => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([])
    const [error,setError] = useState(null);
    const token = JSON.parse(localStorage.getItem('authToken'))?.token
    const textUrl = "https://masjid-life-studentportal-backend.onrender.com/api/v1"
    // const serverUrl = "https://pu-server-side.onrender.com/api/v1"
    
    useEffect(()=>{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        setLoading(true);
            axios
            .get(`${textUrl}${url}`,{headers})
            .then((response)=>{
                setData(response.data.data);
            })
            .catch((error)=>{
                setError(error);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[url,token])
    return {data,setData,loading,error}
};

export default useGetData;