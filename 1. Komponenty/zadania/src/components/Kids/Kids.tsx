import { useState } from "react";
import { Kid, kids } from "./data";
import { KidsForm } from "./Form";
import { KidsTable } from "./Table";
import style from "./kids.module.css";

interface KidProps {
  kids: Kid[];
}

export const KidsSection: React.FC<KidProps> = ({ kids }) => {
  const [list, setList] = useState(kids);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(e.target.value)) {
      setAgeInput(e.target.value);
    } else {
      setNameInput(e.target.value);
    }
  };

  const addKid = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if name contains more than letters - return error
    let newKid = {
      name: nameInput,
      age: ageInput,
    };

    setList([...list, newKid]);
    setNameInput("");
    setAgeInput("");
  };
  return (
    <section className={style.container}>
      <KidsForm
        addKid={addKid}
        nameInput={nameInput}
        ageInput={ageInput}
        handleChange={handleChange}
      />
      <KidsTable kids={list} />
    </section>
  );
};
