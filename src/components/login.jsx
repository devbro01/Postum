import { useEffect, useState } from "react";
import { logo_primary } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.user));
      toast.success("Logged In!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
      toast.error("Error Login!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // rejact login
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="conteiner w-100 p-5">
        <form className="text-center w-25 mx-auto">
          <img className="mb-4" src={logo_primary} alt="logo" width="72" />
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <ValidationError />
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
              (isLoading ? "btn-warning" : "btn-secondary",
              loggedIn ? "btn-success" : "btn-secondary")
            }`}
            onClick={loginHandler}
            type="submit"
            style={{
              transition: "0.5s ease",
              opacity: `${isLoading ? "0.3" : "1"}`,
            }}
            disabled={isLoading || loggedIn}
          >
            {isLoading ? (
              <i className="fa-solid fa-spinner fa-spin" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
