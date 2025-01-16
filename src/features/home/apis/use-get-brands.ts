import { axiosClient } from "@/lib/axios";
import { Brand } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetBrands = () => {
  const query = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const response = await axiosClient.get(`/brands`);
      return response.data as Brand[];
    },
  });

  return query;
};
