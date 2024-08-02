import Subscriptions from "../components/Subscriptions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../constants/api";
import Errors from "../shared/Errors";

function SubscriptionContainer() {
  const [subscription, setSubscription] = useState([]);
  const [error, setError] = useState(false);
  const getSubscriptions = async () => {
    try {
      const res = await axios.get(`${API_BASE}/subscriptions.json`);
      setSubscription(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getSubscriptions();
  });
  return (
    <>
      {error ? (
        <Errors error={error} />
      ) : (
        <div className="container">
          <h1 className="text-center">Listing Subscriptions</h1>
          <table className="table">
            <tr>
              <th>Buyer</th>
              <th>Plan</th>
              <th>Monthly Fee</th>
            </tr>
            {subscription.map((s) => (
              <Subscriptions
                key={s.id}
                buyer={s.buyer.name}
                plan={s.plan.name}
                monthlyFee={s.plan.monthly_fee}
              />
            ))}
          </table>
          <Link to={"/"} className="btn btn-success">
            Back
          </Link>
        </div>
      )}
    </>
  );
}
export default SubscriptionContainer;
