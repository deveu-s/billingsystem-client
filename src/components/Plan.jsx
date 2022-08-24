import Features from "./Features"
import {Link} from 'react-router-dom'


function Plan({plan,monthlyFee,features}){
	return <>
    <div class="container">
      <strong>Name:</strong>
        <h1>
        {plan}
        </h1>
      <p>
        <strong>Monthly Fee:</strong>
        {monthlyFee}
      </p>
      <h2 class="text-center">Features</h2>
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Unit Price</th>
          <th>Max limit</th>
        </tr>
      {features?.map((val)=>
        <Features featureName={val.name} code={val.code} unitPrice={val.unit_price} maxUnitLimit={val.max_unit_limit}/>
      )}
      </table>
      <Link to={`/`} className="btn btn-success">Back</Link>
    </div>
	</>
}
export default Plan