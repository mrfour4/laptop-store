import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export const Card = () => {
  return (
    <Button variant="ghost" size="icon">
      <ShoppingCart />
    </Button>
  );
};
