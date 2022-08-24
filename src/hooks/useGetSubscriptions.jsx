import {useState,useEffect} from 'react'
import axios from 'axios'
import { API_BASE } from '../constants/api';

function useGetSubscriptions() {
  const [subscription,setSubscription]=useState([]);
  const [error,setError] = useState(false)
  const getData = async() =>{
  try{
      const res = await axios.get(`${API_BASE}/subscriptions.json`)
      setSubscription(res.data)
    }catch(error){
        setError(error.message);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return [subscription,error]
}

export default useGetSubscriptions