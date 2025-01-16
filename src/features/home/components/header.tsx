import { Logo } from "@/components/logo";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Account } from "./account";
import { Card } from "./card";
import { NavItem } from "./nav-item";
import { ProductsNav } from "./products-nav";
import { Search } from "./search";

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1330px] items-center justify-between px-4">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavItem title="Home" href="/" />
            <ProductsNav />
            <NavItem title="FQA" href="/fqa" />
            <NavItem title="About Us" href="/about" />
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-x-2">
          <Search />
          <Card />
          <Account />
        </div>
      </div>
    </div>
  );
};
