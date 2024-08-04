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
import { GoHomeFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const dispatch = useDispatch();
  let navigator = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    <div className="flex px-2  items-center justify-between  w-full absolute bg-gradient-to-b from-black md:px-4 md:py-4 z-50 md:flex md:justify-between md:items-center md:flex-row">
      <img src={netflix_Logo} alt="Netflix_Logo" className=" w-28 md:w-36 " />

      {user && (
        <dir className="flex items-center justify-center md:gap-10">
          <div
            className="flex bg-red-600 hover:bg-opacity-80 text-white cursor-pointer font-semibold py-1 px-2 md:py-2 md:px-2 rounded-lg items-center justify-center md:gap-3"
            onClick={handleGptClick}
          >
            {!showGptSearch ? (
              <RiRobot3Fill className="text-base md:text-xl " />
            ) : (
              <GoHomeFill className="text-base md:text-xl" />
            )}
            <p className="text-xs md:text-lg">
              {!showGptSearch ? "GPT Search" : "Home"}{" "}
            </p>
          </div>
          <div className="flex  items-center justify-center md:gap-3">
            <img
              src={user.photoURL || netflix_Prifile_img}
              alt="netflix profile pictures "
              className="w-14 hidden md:flex"
            />
            <CgProfile className="text-white m-2 text-3xl md:hidden" />

            <p
              className=" hover:bg-opacity-80 text-white font-semibold md:py-2 md:px-2  text-xs md:text-lg"
              onClick={handelSignOut}
            >
              Sign Out
            </p>
          </div>
        </dir>
      )}
    </div>
  );
};

export default Header;
