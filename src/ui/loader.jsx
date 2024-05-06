const Loader = () => {
  return (
    <div
      className="spinner-border d-block mx-auto"
      style={{ width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
