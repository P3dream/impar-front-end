// App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import ImageBanner from "./components/ImageBanner";
import SearchResults from "./components/SearchResults";
import CreateCardModal from "./components/CreateCardModal";

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <Header />
        <ImageBanner />
        <SearchResults openModal={openModal} />
      </div>

      {isModalOpen && <CreateCardModal onClose={closeModal} />}
    </div>
  );
};
