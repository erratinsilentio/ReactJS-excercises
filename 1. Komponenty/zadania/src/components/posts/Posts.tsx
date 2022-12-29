import style from "./posts.module.css";
import { useFetch } from "../../utils/useFetch";
import { useEffect, useState } from "react";

interface Post {
  UserId: number;
  id: number;
  title: string;
  body: string;
}

type PostProps = {
  item: Post;
};

const Post: React.FC<PostProps> = ({ item }) => {
  return (
    <article className={style.post}>
      <p>{item.title}</p>
      <p>{item.body}</p>
    </article>
  );
};
export const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setPosts((posts) => data);
  }, [data]);

  const prevPage = () => (page > 1 ? setPage((page) => page - 1) : null);
  const nextPage = () => (page < posts.length / 4 ? setPage((page) => page + 1) : null);

  if (posts) {
    const forCurrentPage = (page - 1) * 4;

    return (
      <section className={style.container}>
        <Post item={posts[forCurrentPage]} />
        <Post item={posts[forCurrentPage + 1]} />
        <Post item={posts[forCurrentPage + 2]} />
        <Post item={posts[forCurrentPage + 3]} />
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
        <p>page: {page}</p>
      </section>
    );
  }
  return <p>loading...</p>;
};
