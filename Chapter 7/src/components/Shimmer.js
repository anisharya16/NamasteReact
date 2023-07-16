const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e) => {
          return <div className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
