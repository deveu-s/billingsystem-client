import axios from "axios";
import { useEffect, useState } from "react";
import Plan from "../components/Plan";
import { useParams } from "react-router-dom";

function PlanShow(){
	const [plan,setPlan]=useState([]);
	const {id} = useParams()

	const getData = async() =>{
		try{
			const res = await axios.get(`http://localhost:3000/plans/${id}.json`)
			setPlan(res.data)
		}catch(error){
				alert(error.message);
		}
	}
	useEffect(()=>{
			getData()
	},)
    
	return (<>
		<Plan plan={plan?.name}  monthlyFee={plan?.monthly_fee}  features={plan?.features}/>
	</>);
}
export default PlanShow;