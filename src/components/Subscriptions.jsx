
function Subscriptions({buyer,plan,monthlyFee}){
  return <>
    <tr>
      <td>{buyer}</td>
      <td>{plan}</td>
      <td>{monthlyFee}</td>
    </tr>
  </>
}
export default Subscriptions
