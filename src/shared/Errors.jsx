function Errors({ error }) {
  return (
    <div style={{ color: "red" }} className="text-center alert">
      {error}
    </div>
  );
}
export default Errors;
