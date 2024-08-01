import React from "react";
import netflix_Logo from "../assets/Netflix_Logo_RGB.png";
import netflix_Prifile_img from "../assets/netflix-profile-pictures.webp";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  let navigator = useNavigate();
  const user = useSelector((store) => store.user);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigator("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-full absolute bg-gradient-to-b from-black px-3 py-4 z-50 flex justify-between items-center">
      <img src={netflix_Logo} alt="Netflix_Logo" className="w-36" />
      {user && (
        <div className="flex">
          <img
            src={user.photoURL}
            alt="netflix profile pictures "
            className="w-14"
          />
          <button
            onClick={handelSignOut}
            className="text-white font-bold text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
