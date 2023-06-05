const Details = ({ todo }) => {
  return (
    <div>
      <h2>{todo?.title}</h2>
      <h2>{todo?.description}</h2>
    </div>
  );
};
export default Details;
