import React from "react";
import { MainButton } from "../../../components/MainButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/Input";
import { usePostCard } from "../../../api/cards";
import { InputFile } from "../../../components/InputFile";

interface CreateCardModalProps {
  onClose: () => void;
}

const schema = z.object({
  cardName: z.string().min(5, "Pelo menos 5 caracterres"),
  status: z.string(),
  image: z.instanceof(FileList).transform((fileList) => fileList[0]),
});

type Schema = z.infer<typeof schema>;

const CreateCardModal: React.FC<CreateCardModalProps> = ({ onClose }) => {
  const { mutateAsync } = usePostCard();

  const { handleSubmit, control } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const create = async (fields: Schema) => {
    await mutateAsync(fields);
    onClose();
  };

  return (
    <div className="absolute right-0 top-0 h-full w-full bg-white bg-opacity-70 ">
      <div className="h-full w-[400px] ml-auto p-5 rounded-sm bg-white border-l border-2 ">
        <span className="close" onClick={onClose} style={{ cursor: "pointer" }}>
          &times;
        </span>
        <h2 className="font-bold">Criar Card</h2>
        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-2" />
        <form
          className="flex flex-col items-end "
          onSubmit={handleSubmit(create)}
        >
          <Input
            control={control}
            name="cardName"
            label="Nome:"
            placeholder="Digite o nome do carro"
          />
          <Input
            control={control}
            name="status"
            label="Status: "
            placeholder="Digite o status do carro"
         />
          <InputFile
            control={control}
            name="image"
            label="Imagem:"
            accept="image/*"
            
          />
          <div className="w-full h-[1px] bg-gray-400 mt-2 mb-2" />
          <MainButton type="submit" text="Criar Card" />
        </form>
      </div>
    </div>
  );
};

export default CreateCardModal;
