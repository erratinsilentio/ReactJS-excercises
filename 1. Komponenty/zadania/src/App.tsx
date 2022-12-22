import { useState } from "react";
import "./App.css";
import { Wrapper } from "./components/cards/Cards";
import { cards } from "./components/cards/data";

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
