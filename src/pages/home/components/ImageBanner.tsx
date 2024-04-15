import React from "react";
import imageUrl from "../../../assets/fundo-busca.png";
import SearchBox from "./SearchBox";

const ImageBanner: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-60 relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-x-0 top-20 flex justify-center">
        <SearchBox />
      </div>
    </div>
  );
};

export default ImageBanner;
