import Features from "./Features";
import { Link } from "react-router-dom";

function Plan({ plan, monthlyFee, features }) {
  return (
    <>
      <div className="container">
        <strong>Name:</strong>
        <h1>{plan}</h1>
        <p>
          <strong>Monthly Fee:</strong>
          {monthlyFee}
        </p>
        <h2 className="text-center">Features</h2>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Unit Price</th>
            <th>Max limit</th>
          </tr>
          {features?.map((val) => (
            <Features
              key={val.id}
              featureName={val.name}
              code={val.code}
              unitPrice={val.unit_price}
              maxUnitLimit={val.max_unit_limit}
            />
          ))}
        </table>
        <Link to={"/"} className="btn btn-success">
          Back
        </Link>
      </div>
    </>
  );
}
export default Plan;
