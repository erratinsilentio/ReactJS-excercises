import {
  BsFillPeopleFill,
  BsFillBagCheckFill,
  BsFillFileEarmarkRuledFill,
  BsFillHddRackFill,
} from "react-icons/bs";

export interface Menu {
  linkName: string;
  link: string;
  icon: React.ReactNode;
}

export const menuData: Menu[] = [
  {
    linkName: "Clients",
    link: "/clients",
    icon: <BsFillPeopleFill />,
  },
  {
    linkName: "Orders",
    link: "/orders",
    icon: <BsFillBagCheckFill />,
  },
  {
    linkName: "Facture",
    link: "/invoices",
    icon: <BsFillFileEarmarkRuledFill />,
  },
  {
    linkName: "Posts",
    link: "/posts",
    icon: <BsFillHddRackFill />,
  },
];
