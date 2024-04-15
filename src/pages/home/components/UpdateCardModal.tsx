import React from "react";
import { MainButton } from "../../../components/MainButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/Input";
import { usePatchCard } from "../../../api/cards";
import { InputFile } from "../../../components/InputFile";
import { CardData } from "../../../@types/cardData";

interface CreateCardModalProps {
  onClose: () => void;
  cardData: CardData;
}

const schema = z.object({
  cardName: z.string().min(5, "Pelo menos 5 caracterres"),
  status: z.string(),
  image: z
    .instanceof(FileList)
    .transform((fileList) => {
      if (!fileList) return undefined;

      return fileList[0];
    })
    .optional(),
});

type Schema = z.infer<typeof schema>;

const UpdateCardModal: React.FC<CreateCardModalProps> = ({
  onClose,
  cardData,
}) => {
  const { mutateAsync } = usePatchCard(cardData.car.id);

  const { handleSubmit, control } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      cardName: cardData.car.name,
      status: cardData.car.status,
    },
  });

  const create = async (fields: Schema) => {
    await mutateAsync(fields);
    onClose();
  };

  return (
    <div className="absolute right-0 top-0 h-full w-full bg-white bg-opacity-70 ">
      <div className="h-full w-[400px] ml-auto p-5 rounded-sm bg-white border-l border-2 ">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="font-bold">Atualizar Card</h2>
        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-2" />
        <form
          className="flex flex-col items-end "
          onSubmit={handleSubmit(create)}
        >
          <Input
            control={control}
            name="cardName"
            label="DIGITE UM NOME PARA O CARD:"
            placeholder="Digite o Título"
          />
          <Input control={control} name="status" label="Status:" />
          <InputFile
            control={control}
            name="status"
            label="Imagem:"
            accept="image/*"
          />
          <div className="w-full h-[1px] bg-gray-400 mt-2 mb-2" />
          <MainButton type="submit" text="Atualizar Card" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCardModal;
