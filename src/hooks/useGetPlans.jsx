import {useState,useEffect} from 'react'
import axios from 'axios'
import { API_BASE } from '../constants/api';

function useGetPlans() {
    const [plan,setPlan]=useState([]);
    const [error,setError] = useState(false)
    const getData = async() =>{
      try{
          const res = await axios.get(`${API_BASE}/plans.json`)
          setPlan(res.data)
        }catch(error){
            setError(error.message);
      }
    }
    useEffect(()=>{
        getData()
    },[])
    return [plan,error]
}

export default useGetPlans