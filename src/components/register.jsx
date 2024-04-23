import { useState } from "react";
import { logo_primary } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/auth";
import AuthService from "../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response));
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="conteiner w-100 p-5">
      <form className="text-center w-25 mx-auto mt-5">
        <img className="mb-4" src={logo_primary} alt="logo" width="72" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <Input
          label={"Username"}
          type={"text"}
          state={name}
          setState={setName}
        />
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
          onClick={registerHandler}
          type="submit"
          style={{
            transition: "0.5s ease",
            opacity: `${isLoading ? "0.3" : "1"}`,
          }}
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
