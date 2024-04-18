import { useState } from "react";
import { logo_primary } from "../constants";
import { Input } from "../ui";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="conteiner w-100 p-5">
      <form className="text-center w-50 mx-auto mt-5">
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
        <button className="btn btn-secondary w-100 py-2" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
