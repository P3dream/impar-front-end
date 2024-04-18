import { useMutation} from "@tanstack/react-query";
import { User } from "../@types/user";
import api from "../utils/axios";

export const usePostLogin = () => {  
    return useMutation({
      mutationKey: ["users"],
      mutationFn: async (user: User) => {
        const result = await api.post("/User/login",{
          "Username": user.username,
          "Password": user.password
        });
        return {jwt: result.data, response: result.status}   
      }
    });
};

export const usePostRegister = () => {  
  return useMutation({
    mutationKey: ["registerUsers"],
    mutationFn: async (user: User) => {
      const result = await api.post("/User/register",{
        "Username": user.username,
        "Password": user.password
      });
      return {jwt: result.data.username, response:result.status}
    }
  });
};