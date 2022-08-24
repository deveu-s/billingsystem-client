import Plan from "../components/Plan";
import useGetPlan from "../hooks/useGetPlan";

function PlanShow(){
const [plan,error] = useGetPlan()
    
	return (<>
	{error ? <div className="text-center alert">{error}</div> :
		<Plan plan={plan?.name}  monthlyFee={plan?.monthly_fee}  features={plan?.features}/>}
	</>);
}
export default PlanShow;