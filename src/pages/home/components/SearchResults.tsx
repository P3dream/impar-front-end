import { useState, useEffect } from "react";
import CarCard from "./carCard";
import { useGetCards } from "../../../api/cards";
import { MainButton } from "../../../components/MainButton";

type Params = {
  openModal: () => void;
};

const SearchResults = ({ openModal }: Params) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: cards, isLoading, refetch } = useGetCards(currentPage);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Resultados de busca</h2>
        <MainButton onClick={openModal} text="Criar Card" />
      </div>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards?.map((car, index) => (
              <CarCard key={index} carData={car} />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded`}
            >
              Anterior
            </button>
            <button
              onClick={nextPage}
              disabled={!cards || cards.length < 9}
              className={`${
                !cards || cards.length < 9
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded`}
            >
              Próxima
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
