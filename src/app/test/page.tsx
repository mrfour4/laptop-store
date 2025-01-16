import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ProductsNav } from "./products-nav";

export default function TestPage() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <ListItem title="Home" href="/" />
        <ListItem title="FQA" href="/fqa" />
        <ProductsNav />
        <ListItem title="About Us" href="/about" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type ListItemProps = {
  title: string;
  href: string;
};

function ListItem({ title, href }: ListItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
