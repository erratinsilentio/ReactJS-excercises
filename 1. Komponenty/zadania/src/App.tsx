import { useState } from "react";
import "./App.css";
import { Wrapper } from "./components/cards/Cards";
import { cards } from "./components/cards/data";
import { menuData } from "./components/menu/data";
import { SideMenu } from "./components/menu/Menu";
import { CommentSection } from "./components/comments/Comments";
import { commentData } from "./components/comments/data";
import { KidsSection } from "./components/Kids/Kids";
import { kids } from "./components/Kids/data";
import { Posts } from "./components/posts/Posts";
import { Title } from "./components/title/Title";
import { Click } from "./components/click/Click";

function App() {
  type Option = 1 | 2;
  const [option, setOption] = useState<Option>(1);

  return (
    <>
      <SideMenu data={menuData} />
      <Wrapper cards={cards} />;<Title>COMMENT SECTION</Title>
      <CommentSection data={commentData} />
      <Title>KIDS FORM</Title>
      <KidsSection kids={kids} />
      <Title>POSTS</Title>
      <Posts />
      <Title>CLICK OUTSIDE</Title>
      <Click />
    </>
  );
}

export default App;
