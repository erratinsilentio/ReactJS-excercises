import { Kid } from "./data";
import style from "./kids.module.css";

interface KidProps {
  kids: Kid[];
}

export const KidsTable: React.FC<KidProps> = ({ kids }) => {
  return (
    <ul className={style.table}>
      {kids.map((kid) => (
        <li className={style.kid}>
          {kid.name}, {kid.age}
        </li>
      ))}
    </ul>
  );
};
