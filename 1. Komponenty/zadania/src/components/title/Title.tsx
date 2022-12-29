import style from "./title.module.css";

export const Title = ({ children }: { children: React.ReactChild }) => {
  return <p className={style.title}>{children}</p>;
};
