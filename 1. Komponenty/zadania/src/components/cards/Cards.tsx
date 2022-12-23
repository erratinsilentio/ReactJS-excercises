import { Data } from "./data";
import style from "./cards.module.css";

interface Props {
  data?: Data;
  cards?: Data[];
}
export const Card: React.FC<Data> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.left}>
        <img className={style.avatar} src={data.imgSrc} alt="avatar" />
      </div>
      <div className={style.right}>
        <p>
          {data.name} {data.surname}
        </p>
        <p>{data.postCode}</p>
        <p>{data.street}</p>
        <p>{data.town}</p>
        <p>{data.subRegion}</p>
        <p>{data.phoneNumber}</p>
      </div>
    </div>
  );
};

export const Wrapper: React.FC<Props> = ({ cards }) => {
  return (
    <ul className={style.cardcontainer}>
      {cards.map((card) => (
        <Card data={card} key={card.id} />
      ))}
    </ul>
  );
};
