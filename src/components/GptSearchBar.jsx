import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" className="w-1/2 grid grid-cols-12 bg-black">
        <input
          type="text"
          name="q"
          placeholder="Search"
          className="p-4 m-4 col-span-9"
        />
        <button
          type="submit"
          className="col-span-3 m-4 py-2 bg-red-600 px-4 rounded-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
