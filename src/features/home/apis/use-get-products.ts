import { axiosClient } from "@/lib/axios";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (category?: string) => {
  const query = useQuery({
    queryKey: ["products", category],
    enabled: !!category,
    queryFn: async () => {
      const response = await axiosClient.get(`/products?category=${category}`);
      return response.data as Product[];
    },
  });

  return query;
};
