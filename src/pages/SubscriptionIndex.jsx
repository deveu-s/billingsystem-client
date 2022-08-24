import axios from "axios";
import { useEffect, useState } from "react";
import Subscriptions from "../components/Subscriptions";
import {Link} from 'react-router-dom'

function SubscriptionIndex(){
  const [subscription,setSubscription]=useState([]);

  const getData = async() =>{
  try{
      const res=await axios.get(`http://localhost:3000/subscriptions.json`)
      setSubscription(res.data)
    }catch(error){
        alert(error.message);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (<>
  
  <div className="container">
    <h1 className="text-center">Listing Subscriptions</h1>
    <table className="table">
      <tr>
        <th>Buyer</th>
        <th>Plan</th>
        <th>Monthly Fee</th>
      </tr>
    {subscription.map((s)=>
      <Subscriptions 
      buyer={s.buyer.name} plan={s.plan.name} monthlyFee={s.plan.monthly_fee}
      />
    )}
    </table>
    <Link to={`/`} className="btn btn-success">Back</Link>
    </div>
  </>);
}
export default SubscriptionIndex;