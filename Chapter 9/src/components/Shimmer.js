const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map(() => {
          return (
            <div
              className="shimmer-card"
              id={Math.floor(Math.random() * 100)}
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
