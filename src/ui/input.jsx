const Input = ({ label, state, setState, type = "text" }) => {
  return (
    <div className="form-floating my-3">
      <input
        type={type}
        className="form-control"
        placeholder={label}
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
