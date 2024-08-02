import { Link } from "react-router-dom";

function Plans({ planName, monthlyFee, id }) {
  return (
    <>
      <div className="col text-center m-4 w-25 outer-card row justify-content-center">
        <h5 className="card-header ">{planName}</h5>
        <div className="card-body">
          <p className="card-text ">{monthlyFee}$</p>
          <Link to={`/plans/${id}`} className="btn btn-success">
            Show
          </Link>
        </div>
      </div>
    </>
  );
}

export default Plans;
