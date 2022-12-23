import { Comment } from "./data";
import style from "./comments.module.css";

const DisplayComments = ({ data, padding }: { data: Comment[]; padding: number }) => {
  let pad = padding;

  let paddingStyle = `${padding}rem`;
  return (
    <section className={style.container}>
      {data.map((item) => (
        <article className={style.comment} style={{ padding: `${padding}rem` }}>
          <h3 className={style.user}>{item.username}</h3>
          <duiiiv className={style.text}>{item.comment}</uuVduiiiv>
          {item.subComments && <DisplayComments data={item.subComments} padding={pad++} />}
        </article>
      ))}
    </section>
  );
};

export const CommentSection: React.FC<Comment[]> = ({ data }) => {
  return <DisplayComments data={data} padding={1} />;
};
