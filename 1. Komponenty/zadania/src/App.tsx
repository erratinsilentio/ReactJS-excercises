import { useState } from "react";
import "./App.css";

interface Data {
  id?: number;
  data?: any;
  imgSrc: string;
  name: string;
  surname: string;
  street: string;
  postCode: string;
  town: string;
  subRegion: string;
  phoneNumber: string | number;
}
const singleData: Data = {
  imgSrc:
    "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  name: "Adam",
  surname: "Jochemczyk",
  street: "TestStreet",
  postCode: "00-123",
  town: "Town",
  subRegion: "Region",
  phoneNumber: "+48 123 456 789",
};

// type CardFunction = function(data: Data) => JSX.element;
const cards: Data[] = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Zigniew",
    surname: "Herbert",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Henryk",
    surname: "Sienkiewicz",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Wisława",
    surname: "Szymborska",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
];

const Card: React.FC<Data> = ({ data }) => {
  return (
    <div className="card">
      <div className="left">
        <img className="avatar" src={data.imgSrc} alt="avatar" />
      </div>
      <div className="right">
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

const Wrapper: React.FC<Data[]> = ({ cards }) => {
  return (
    <ul className="card-container">
      {cards.map((card) => (
        <Card data={card} key={card.id} />
      ))}
    </ul>
  );
};

function App() {
  type Option = 1 | 2;
  const [option, setOption] = useState<Option>(1);

  return (
    <>
      <section className="buttons">
        <article className="one">ONE</article>
        <article className="two">TWO</article>
      </section>
      <Wrapper cards={cards} />;
    </>
  );
}

export default App;
