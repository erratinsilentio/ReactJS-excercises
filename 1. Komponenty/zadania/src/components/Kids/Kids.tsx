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

  return (
    <section className={style.container}>
      <KidsForm />
      <KidsTable kids={list} />
    </section>
  );
};
