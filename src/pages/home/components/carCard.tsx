import { useEffect, useRef, useState } from "react";
import DeleteCardModal from "./DeleteCardModal";
import { CardData } from "../../../@types/cardData";
import UpdateCardModal from "./UpdateCardModal";

type Params = {
  carData: CardData;
};

const CarCard = ({ carData }: Params) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    imgRef.current.src = "data:image/png;base64," + carData.photo.base64;
  }, [carData, imgRef]);

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col items-center">
        <img ref={imgRef} className="h-20" alt={carData.car.name} />
        <div className="h-[1px] bg-slate-200 my-4 w-full" />
        <div className="p-3">
          <div className="font-bold text-xl mb-2">{carData.car.name}</div>
          <p className="text-gray-700 text-base">{carData.car.status}</p>
        </div>
        <div className="h-[1px] bg-slate-200 w-full" />
        <div className="flex justify-center w-full bg-slate-100 p-3">
          <button
            className="grow"
            onClick={() => {
              setShowDeleteModal(true);
            }}
          >
            Excluir
          </button>
          <button
            className="grow"
            onClick={() => {
              setShowEditModal(true);
            }}
          >
            Editar
          </button>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteCardModal
          id={carData.car.id}
          onClose={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
      {showEditModal && (
        <UpdateCardModal
          cardData={carData}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};

export default CarCard;
