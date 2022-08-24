import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { API_BASE } from '../constants/api';

function useGetPlan(){
    const [plan,setPlan]=useState([]);
    const [error,setError] = useState(false)
	const {id} = useParams()


	useEffect(()=>{
		const getData = async() =>{
			try{
				const res = await axios.get(`${API_BASE}/plans/${id}.json`)
				setPlan(res.data)
			}catch(error){
				setError(error.message);
			}
		}
			getData()
	},[id])
    return [plan,error]
}

export default useGetPlan