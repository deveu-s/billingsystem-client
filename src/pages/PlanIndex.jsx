import Plans from "../components/Plans";
import {Link} from 'react-router-dom'
import useGetPlans from "../hooks/useGetPlans";

function PlanIndex(){
  const [plan,error] = useGetPlans()

  return (<>
  {error ? <div className="text-center alert">{error}</div> :<div className="row">
  {plan.map((p)=>
    <Plans 
    key={p.id}
      id={p?.id}
      planName={p.name}
      monthlyFee={p.monthly_fee}
    />
  )}
  </div>}
  <Link to={`/subscriptions`} className="btn btn-secondary">Subscriptions</Link>
  </>);
}
export default PlanIndex;