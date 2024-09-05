"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <FontAwesomeIcon
          icon={faBasketball}
          className="text-3xl 
          sm:w-16 sm:h-16 
          md:w-20 md:h-20 
          lg:w-24 lg:h-24 
          xl:w-28 xl:h-28  animate-spin-medium text-orange-600 "
        />
      </div>
    </div>
  );
};

export default Preloader;
