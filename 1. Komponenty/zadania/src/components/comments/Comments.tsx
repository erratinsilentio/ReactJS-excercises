import { Comment } from "./data";
import style from "./comments.module.css";

interface Props {
  data: Comment[];
}
export const CommentSection: React.FC<Props> = ({ data }) => {
  return (
    <section className={style.container}>
      {data.map((item) => (
        <article className={style.comment}>
          <h3 className={style.user}>{item.username}</h3>
          <p className={style.text}>{item.comment}</p>
          {item.subComments && <CommentSection data={item.subComments} />}
        </article>
      ))}
    </section>
  );
};
