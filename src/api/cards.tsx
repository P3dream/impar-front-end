import { CardData } from "../@types/cardData";
import api from "../utils/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetCards = (searchString? : String) => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const result = await api.get<CardData[]>(`/Card?searchString=${searchString}`);
      
      return result.data;
    },
  });
};

type Card = {
  cardName: string;
  status: string;
  image?: File | null;
};

export const usePostCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["cards"],
    mutationFn: async (card: Card) => {
      const formData = new FormData();
      formData.append("CarName", card.cardName);
      formData.append("Status", card.status);
      if (card.image) {
        formData.append("Image", card.image);
      }

      await api.post("/Card", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
};

export const usePatchCard = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`cards`],
    mutationFn: async (card: Card) => {
      const formData = new FormData();
      formData.append("carName", card.cardName);
      formData.append("status", card.status);
      if (card.image) {
        formData.append("image", card.image);
      }

      await api.put(`/Card/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
};

export const useDeleteCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["cards"],
    mutationFn: async (id: number) => {
      await api.delete(`/Card/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
};
