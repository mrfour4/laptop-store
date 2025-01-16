"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useGetBrands } from "../apis/use-get-brands";
import { useGetProducts } from "../apis/use-get-products";
import { CATEGORIES } from "../constants";
import { ListItems } from "./list-item";

export const ProductsNav = () => {
  const [category, setCategory] = useState("");
  const products = useGetProducts(category);
  const brands = useGetBrands();

  const isLoading = products.isLoading || brands.isLoading;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent className="grid grid-cols-[auto_1fr] gap-4 p-4">
        <div className="flex">
          <div>
            {CATEGORIES.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-start"
                onPointerEnter={() => setCategory(category.name)}
              >
                <category.icon />
                {category.name}
              </Button>
            ))}
          </div>
          <Separator orientation="vertical" className="ml-2" />
        </div>

        <div className="grid w-60 grid-cols-2 gap-1">
          {isLoading ? (
            <div className="flex size-full items-center justify-center gap-x-2 text-muted-foreground">
              <Loader className="size-4 animate-spin" />
              <p className="text-sm">Loading</p>
            </div>
          ) : (
            <>
              <ListItems type="brand" items={brands.data || []} />
              <ListItems type="product" items={products.data || []} />
            </>
          )}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
