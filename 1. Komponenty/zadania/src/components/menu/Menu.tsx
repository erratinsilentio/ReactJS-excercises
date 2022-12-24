import { menuData, Menu } from "./data";
import style from "./menu.module.css";

interface Props {
  data?: Menu[];
}

export const SideMenu: React.FC<Props> = ({ data }) => {
  return (
    <ul className={style.container}>
      {data.map((item) => (
        <li>
          {item.icon}
          <a className={style.link} href={item.link}>
            {item.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
};
