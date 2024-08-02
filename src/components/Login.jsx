import React, { useRef, useState } from "react";
import Header from "./Header";
import netflix_Banner from "../assets/netflix-Login-BG-img.jpg";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/FireBase";
import netflix_Prifile_img from "../assets/netflix-profile-pictures.webp";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/useSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [userSignIn, setUserSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const message = checkValidate(email, password);
    setErrorMessage(message);

    if (message) return;

    if (!userSignIn) {
      const name = nameRef.current.value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: netflix_Prifile_img,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              setErrorMessage(
                <div className="font-medium text-lg text-green-700">
                  User created successfully
                </div>
              );
            })
            .catch((error) => {
              setErrorMessage(`Error updating profile: ${error.message}`);
            });
        })
        .catch((error) => {
          setErrorMessage(`Error creating user: ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setErrorMessage(
            <div className="font-medium text-lg text-green-700">
              User signed in successfully
            </div>
          );
        })
        .catch((error) => {
          setErrorMessage(`Error signing in: ${error.message}`);
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
            ref={nameRef}
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
          type="password"
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
