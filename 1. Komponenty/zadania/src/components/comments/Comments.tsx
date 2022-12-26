import { Comment } from "./data";
import style from "./comments.module.css";
import { SyntheticEvent, useState } from "react";

interface Props {
  data: Comment[];
}
export const CommentSection: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(true);

  type Style = {
    [key: string]: React.CSSProperties;
  };

  // const hidden: React.CSSProperties = () => {
  //   // height: !open && '10px';
  //   return { display: !open && "none" };
  // };

  return (
    <section className={style.container}>
      {data.map((item) => (
        <article style={{ height: !open && "10px" }} className={style.comment}>
          <button
            onClick={(event: SyntheticEvent) => {
              setOpen(!open);
            }}
          >
            {open ? "hide" : "show"}
          </button>
          <h3 className={style.user}>{item.username}</h3>
          <p className={style.text}>{item.comment}</p>
          {item.subComments && <CommentSection data={item.subComments} />}
        </article>
      ))}
    </section>
  );
};
