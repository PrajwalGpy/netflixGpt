import React, { useRef, useState } from "react";
import Header from "./Header";
import netflix_Banner from "../assets/netflix-Login-BG-img.jpg";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/FireBase";

const Login = () => {
  const [userSignIn, setUserSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const message = checkValidate(email, password);
    setErrorMessage(message);

    if (message) return;

    if (!userSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setErrorMessage(
            <div className="font-medium text-lg text-green-700">
              User created successfully
            </div>
          );
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            `Error creating user: ${errorCode} - ${errorMessage}`
          );
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setErrorMessage(
            <div className="font-medium text-lg text-green-700">
              User signed in successfully
            </div>
          );
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error signing in: ${errorMessage}`);
        });
    }
  };

  const toggleSign = () => {
    setUserSignIn((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflix_Banner} alt="Netflix Banner" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute bg-black bg-opacity-90 text-white w-3/12 my-40 mx-auto left-0 right-0 flex flex-col gap-5 p-10 rounded-lg"
      >
        <div className="text-3xl font-bold ">
          {userSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!userSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-900 py-3 px-2 rounded-md"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or mobile number"
          className="bg-slate-900 py-3 px-2 rounded-md"
        />
        <input
          ref={passwordRef}
          type="password" // Changed to type password for security
          placeholder="Password"
          className="bg-slate-900 py-3 px-2 rounded-md"
        />
        {errorMessage && (
          <div className="font-medium text-lg text-red-700">{errorMessage}</div>
        )}
        <button
          type="submit"
          className="bg-red-700 w-full py-2 rounded-md font-semibold"
        >
          {userSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="cursor-pointer" onClick={toggleSign}>
          {userSignIn ? "New to Netflix?" : "Already Registered?"}
          <span className="underline underline-offset-2">
            {userSignIn ? " Sign up now." : " Sign in now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
