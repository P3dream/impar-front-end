import React, { useState } from "react";
import Header from "./components/Header";
import ImageBanner from "./components/ImageBanner";
import SearchResults from "./components/SearchResults";
import CreateCardModal from "./components/CreateCardModal";

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div>
        <Header />
        <ImageBanner handleSearch={handleSearch} />
        <SearchResults openModal={openModal} searchTerm={searchTerm} />
      </div>

      {isModalOpen && <CreateCardModal onClose={closeModal} />}
    </div>
  );
};

export default HomePage;
