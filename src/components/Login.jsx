import React, { useRef, useState } from "react";
import Header from "./Header";
import netflix_Bnner from "../assets/netflix-Login-BG-img.jpg";
import { checkValiata } from "../utils/Validate";

const Login = () => {
  let [userSignIn, setUserSignIn] = useState(true);
  const [errorMessage, letErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = () => {
    let message = checkValiata(email.current.value, password.current.value);
    letErrorMessage(message);
  };

  function toggleSign() {
    setUserSignIn(!userSignIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflix_Bnner} alt="netflix_Bnner" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute bg-black bg-opacity-90 text-white w-3/12 my-40 mx-auto left-0 right-0 flex flex-col gap-5 p-10 rounded-lg"
      >
        <div className="text-3xl font-bold ">
          {userSignIn ? "Sign In" : "Sign Up"}
        </div>
        {userSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-900 py-3 px-2 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="bg-slate-900 py-3 px-2 rounded-md"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="bg-slate-900 py-3 px-2  rounded-md"
        />
        <div className="font-medium text-lg text-red-700">{errorMessage}</div>
        <button
          className="bg-red-700 w-full py-2 rounded-md font-semibold"
          onClick={handleSubmit}
        >
          {userSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="cursor-pointer" onClick={toggleSign}>
          {!userSignIn ? "New to Netflix?" : "Already Rigistered"}
          <span className="underline underline-offset-2">
            {userSignIn ? " Sign up now." : " Sign In now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
