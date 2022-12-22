import { Comment } from "./data";
import style from "./comments.module.css";

export const CommentSection: React.FC<Comment[]> = ({ data }) => {
  return (
    <section className={style.container}>
      {data.map((item) => {
        <article className={style.comment}>
          <h3>{item.username}</h3>
          <p>{item.comment}</p>
        </article>;
      })}
    </section>
  );
};
