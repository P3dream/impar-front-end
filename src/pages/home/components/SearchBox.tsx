import React from "react";
import searchIcon from "../../../assets/lupa-busca.png";

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Digite aqui sua busca...",
  
}) => {
  return (
    <div className="bg-white flex items-center rounded-lg shadow-md opacity-100 P-8">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow py-2 px-4 focus:outline-none rounded-l-lg"
        style={{ minWidth: "300px", maxWidth: "90%", width: "auto" }}
      />
      <button className="text-white p-2 rounded-full pr-5">
        <img src={searchIcon} alt="Ícone de busca" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBox;
