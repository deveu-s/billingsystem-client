function Features({ featureName, code, unitPrice, maxUnitLimit }) {
  return (
    <tr>
      <td>{featureName}</td>
      <td>{code}</td>
      <td>{unitPrice}</td>
      <td>{maxUnitLimit}</td>
    </tr>
  );
}
export default Features;
