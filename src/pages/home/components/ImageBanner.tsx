import React from "react";
import imageUrl from "../../../assets/fundo-busca.png";
import SearchBox from "./SearchBox";

const ImageBanner: React.FC<{ handleSearch: (term: string) => void }> = ({ handleSearch }) => {
  return (
    <div
      className="bg-cover bg-center h-60 relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-x-0 top-20 flex justify-center">
        <SearchBox handleSearch={handleSearch} />
      </div>
    </div>
  );
};


export default ImageBanner;