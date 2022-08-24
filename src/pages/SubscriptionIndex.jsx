import Subscriptions from "../components/Subscriptions";
import {Link} from 'react-router-dom'
import useGetSubscriptions from "../hooks/useGetSubscriptions";

function SubscriptionIndex(){
  const [subscription,error] = useGetSubscriptions()
  return (<>
  {error ? <div className="text-center alert">{error}</div> :
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
  </div>}
  </>);
}
export default SubscriptionIndex;