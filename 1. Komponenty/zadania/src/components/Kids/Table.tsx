import { Kid } from "./data";
import style from "./kids.module.css";

interface KidProps {
  kids: Kid[];
}

export const KidsTable: React.FC<KidProps> = ({ kids }) => {
  return (
    <ul className={style.table}>
      {kids.map((kid, index) => (
        <li className={style.kid} key={`${name}${index}`}>
          {kid.name}, {kid.age}
        </li>
      ))}
    </ul>
  );
};
