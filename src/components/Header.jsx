import React, { useEffect } from "react";
import netflix_Logo from "../assets/Netflix_Logo_RGB.png";
import netflix_Prifile_img from "../assets/netflix-profile-pictures.webp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/useSlice";
import { RiRobot3Fill } from "react-icons/ri";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  let navigator = useNavigate();

  const user = useSelector((store) => store.user);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigator("/Browse");
      } else {
        dispatch(removeUser());
        navigator("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="w-full absolute bg-gradient-to-b from-black px-4 py-4 z-50 flex justify-between items-center">
      <img src={netflix_Logo} alt="Netflix_Logo" className="w-36" />

      {user && (
        <dir className="flex items-center justify-center gap-10">
          <div
            className="flex bg-red-600 hover:bg-opacity-80 text-white cursor-pointer font-semibold py-2 px-2 rounded-lg items-center justify-center gap-3"
            onClick={handleGptClick}
          >
            <RiRobot3Fill className="text-xl" />
            <p> GPT Search</p>
          </div>
          <div className="flex  items-center justify-center gap-3">
            <img
              src={user.photoURL || netflix_Prifile_img}
              alt="netflix profile pictures "
              className="w-14"
            />

            <button
              className=" hover:bg-opacity-80 text-white font-semibold py-2 px-2 rounded-lg"
              onClick={handelSignOut}
            >
              Sign Out
            </button>
          </div>
        </dir>
      )}
    </div>
  );
};

export default Header;
