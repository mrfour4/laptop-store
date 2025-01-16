import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CATEGORIES } from "./constants";

export const ProductsNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent className="grid grid-cols-[auto_1fr] p-6">
        <div className="border-r-2 border-r-gray-400">
          {CATEGORIES.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="w-full justify-start"
            >
              <category.icon />
              {category.name}
            </Button>
          ))}
        </div>
        <div>Productions</div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
