import { Brand, Product } from "@/types";
import { Inbox } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "brand" | "product";
  items: Brand[] | Product[];
};

export const ListItems = ({ type, items }: Props) => {
  if (items.length === 0) {
    return (
      <div className="space-y-2 text-sm">
        <h2 className="font-semibold capitalize text-primary">{type}</h2>
        <div className="flex items-center justify-start gap-x-2 text-muted-foreground">
          <Inbox className="size-4" />
          Empty
        </div>
      </div>
    );
  }

  const href = type === "brand" ? "/brands" : "/products";
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold capitalize text-primary">{type}</h2>
      <ul>
        {items?.map((item) => (
          <li key={item.id} className="py-1 text-sm">
            <Link href={`/${href}/${item.id}`} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
