import { menuData, Menu } from "./data";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./menu.module.css";
import { MouseEventHandler, useState } from "react";

interface Props {
  data: Menu[];
}

export const SideMenu: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={style.menu}>
      <div className={style.toggle}>
        <GiHamburgerMenu
          onClick={(event: MouseEventHandler) => {
            setOpen((open) => !open);
          }}
          className={style.button}
        />
      </div>
      <ul className={`${style.container} ${!open && style.closed}`}>
        {data.map((item) => (
          <li>
            {item.icon}
            <a className={style.link} href={item.link}>
              {item.linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
