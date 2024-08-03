import React from "react";
import { img_Cdn } from "../utils/constencs";

export const MovieCards = ({ phosterPath }) => {
  return (
    <div>
      <div className="w-48 px-2">
        <img src={img_Cdn + phosterPath} alt="photster" />
      </div>
    </div>
  );
};
