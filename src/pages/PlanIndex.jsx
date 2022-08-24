import axios from "axios";
import { useEffect, useState } from "react";
import Plans from "../components/Plans";
import {Link} from 'react-router-dom'

function PlanIndex(){
  const [plan,setPlan]=useState([]);
  const getData = async() =>{
    try{
        const res = await axios.get(`http://localhost:3000/plans.json`)
        setPlan(res.data)
      }catch(error){
          alert(error.message);
    }

  }
  useEffect(()=>{
      getData()
  },[])

  return (<>
  <div className="row">
  {plan.map((p)=>
    <Plans 
      id={p?.id}
      planName={p.name}
      monthlyFee={p.monthly_fee}
    />
  )}
  </div>
  <Link to={`/subscriptions`} className="btn btn-secondary">Subscriptions</Link>
  </>);
}
export default PlanIndex;