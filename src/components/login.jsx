import { useState } from "react";
import { logo_primary } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  console.log(isLoading);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="conteiner w-100 p-5">
      <form className="text-center w-25 mx-auto">
        <img className="mb-4" src={logo_primary} alt="logo" width="72" />
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <Input
          label={"Email address"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />
        <button
          className={`btn w-100 py-2 ${
            isLoading ? "btn-warning" : "btn-secondary"
          }`}
          onClick={loginHandler}
          type="submit"
          style={{
            transition: "0.5s ease",
          }}
          disabled={isLoading}
        >
          {isLoading ? "Wait..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
