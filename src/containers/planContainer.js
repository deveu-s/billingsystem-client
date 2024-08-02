import Plan from "../components/Plan";
import { useEffect, useState } from "react";
import { API_BASE } from "../constants/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import Errors from "../shared/Errors";

function PlanContainer() {
  const [plan, setPlan] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getPlan = async () => {
      try {
        const res = await axios.get(`${API_BASE}/plans/${id}.json`);
        setPlan(res.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getPlan();
  }, [id]);

  return (
    <>
      {error ? (
        <Errors error={error} />
      ) : (
        <Plan
          plan={plan?.name}
          monthlyFee={plan?.monthly_fee}
          features={plan?.features}
        />
      )}
    </>
  );
}
export default PlanContainer;
