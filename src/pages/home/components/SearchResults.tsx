import CarCard from "./carCard";
import { useGetCards } from "../../../api/cards";
import { MainButton } from "../../../components/MainButton";

type Params = {
  openModal: () => void;
};

const SearchResults = ({ openModal }: Params) => {
  const { data: cards, isLoading } = useGetCards();

  return (
    
    <section className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Resultados de busca</h2>
        <MainButton onClick={openModal} text="Criar Card" />
      </div>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards?.map((car, index) => (
            <CarCard key={index} carData={car} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
