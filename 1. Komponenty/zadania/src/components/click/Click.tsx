import { useState } from "react";
import { useClickOutside } from "../../utils/useClickOutside";
import style from "./click.module.css";

export const Click = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount((count) => count + 1);
  const handleClickOutside = () => setCount((count) => 0);

  const ref = useClickOutside(handleClickOutside);

  return (
    <section className={style.container}>
      <button className={style.btn} ref={ref} onClick={handleClick}>
        COUNT: {count}
      </button>
    </section>
  );
};
