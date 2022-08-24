function Features({featureName,code,unitPrice,maxUnitLimit}){
	return (<>
		<tr>
			<td>{featureName}</td>
			<td>{code}</td>
			<td>{unitPrice}</td>
			<td>{maxUnitLimit}</td>
			<button className="btn btn-outline-danger"> Remove Feature </button>
		</tr></>);
}
export default Features;