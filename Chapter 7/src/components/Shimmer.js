const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e) => {
          return (
            <div
              key={Math.floor(Math.random() * 100)}
              className="shimmer-card"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
