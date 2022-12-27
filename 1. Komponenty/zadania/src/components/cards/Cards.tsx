import { Data } from "./data";
import style from "./cards.module.css";
import { JSXElementConstructor, ReactNode, SyntheticEvent, useState } from "react";

interface Props {
  data?: Data;
  cards?: Data[];
}

interface CardProps {
  data: Data;
  inputValue: string;
}
interface Form {
  inputValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CardForm: React.FC<Form> = ({ inputValue, handleChange }) => {
  return (
    <form>
      <input name="text" value={inputValue} onChange={handleChange} placeholder="search..." />
    </form>
  );
};

export const Card: React.FC<CardProps> = ({ data, inputValue }) => {
  const checkName = (input: string) => {
    const name = data.name + data.surname;
    if (name.toLowerCase().includes(input.toLowerCase()) && input != "") {
      return true;
    }
    return false;
  };

  return (
    <div className={`${style.card} ${checkName(inputValue) && style.chosen}`}>
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
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  return (
    <ul className={style.cardcontainer}>
      <CardForm inputValue={inputValue} handleChange={handleChange} />
      {cards.map((card) => (
        <Card data={card} key={card.id} inputValue={inputValue} />
      ))}
    </ul>
  );
};
