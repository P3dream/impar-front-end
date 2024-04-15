import React from "react";
import { useDeleteCard, usePostCard } from "../../../api/cards";

type Params = {
  onClose: () => void;
  id: number;
};

const DeleteCardModal = ({ onClose, id }: Params) => {
  const { mutateAsync } = useDeleteCard();

  const deleteCard = async () => {
    await mutateAsync(id);
    onClose();
  };

  return (
    <div className="absolute right-0 top-0 h-full w-full bg-white bg-opacity-70 ">
      <div className="absolute h-70 w-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-sm bg-white border-l border-2 ">
        <h3 className="text-xl font-bold">Excluir</h3>
        <p>Tem certeza que deseja excluir o card?</p>
        <div className="flex justify-center w-full bg-slate-100 p-3">
          <button className="grow" onClick={deleteCard}>
            Excluir
          </button>
          <button className="grow" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCardModal;
