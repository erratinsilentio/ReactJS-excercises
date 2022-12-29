import { Comment } from "./data";
import style from "./comments.module.css";
import { SyntheticEvent, useState } from "react";

interface Props {
  data: Comment[];
}

// type Style = {
//   [key: string]: React.CSSProperties;
// };

export const CommentSection: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <section className={style.container}>
      {data.map((item) => (
        <article
          style={{ height: `${!open ? "10px" : "0"}` }}
          className={style.comment}
          key={item.id}
        >
          <button
            onClick={(event: SyntheticEvent) => {
              setOpen((open) => !open);
            }}
          >
            {open ? "hide" : "show"}
          </button>
          <h3 className={style.user}>{item.username}</h3>
          <p className={style.text}>{item.comment}</p>
          {item.subComments && (
            <CommentSection key={item.id} data={item.subComments} />
          )}
        </article>
      ))}
    </section>
  );
};
