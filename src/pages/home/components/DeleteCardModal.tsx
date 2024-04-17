import { useDeleteCard } from "../../../api/cards";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-80 p-6 rounded-lg shadow-xl text-center">
        <h3 className="text-xl font-bold mb-4">Confirmação</h3>
        <p className="text-gray-700 mb-6">Tem certeza que deseja excluir o card?</p>
        <div className="flex justify-center">
          <button
            className="mr-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={deleteCard}
          >
            Excluir
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};  

export default DeleteCardModal;
