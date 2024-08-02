import Plans from "../components/Plans";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_BASE } from "../constants/api";
import axios from "axios";
import Errors from "../shared/Errors";

function PlansContainer() {
  const [plan, setPlan] = useState([]);
  const [error, setError] = useState(false);
  const getPlans = async () => {
    try {
      const res = await axios.get(`${API_BASE}/plans.json`);
      setPlan(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <div className="row">
        {error ? (
          <Errors error={error} />
        ) : (
          plan.map((p) => (
            <Plans
              key={p.id}
              id={p?.id}
              planName={p.name}
              monthlyFee={p.monthly_fee}
            />
          ))
        )}
      </div>
      <Link to={"/subscriptions"} className="btn btn-secondary">
        Subscriptions
      </Link>
    </>
  );
}
export default PlansContainer;
