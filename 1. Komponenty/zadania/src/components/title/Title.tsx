import style from "./title.module.css";

export const Title: React.FC = ({ children }) => {
  return <p className={style.title}>{children}</p>;
};
