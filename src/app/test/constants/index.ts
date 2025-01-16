import {
  BriefcaseBusiness,
  Gamepad2Icon,
  Laptop,
  LucideIcon,
} from "lucide-react";

type Category = {
  name: string;
  icon: LucideIcon;
};

export const CATEGORIES: Category[] = [
  {
    name: "Ultrabook",
    icon: Laptop,
  },
  {
    name: "Gaming",
    icon: Gamepad2Icon,
  },
  {
    name: "Workstation",
    icon: BriefcaseBusiness,
  },
];
