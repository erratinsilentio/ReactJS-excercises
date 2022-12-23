import { useState } from "react";
import "./App.css";
import { Wrapper } from "./components/cards/Cards";
import { cards } from "./components/cards/data";
import { menuData } from "./components/menu/data";
import { SideMenu } from "./components/menu/Menu";
import { CommentSection } from "./components/comments/Comments";
import { commentData } from "./components/comments/data";

function App() {
  type Option = 1 | 2;
  const [option, setOption] = useState<Option>(1);

  return (
    <>
      <SideMenu data={menuData} />
      <Wrapper cards={cards} />;
      <CommentSection data={commentData} />
    </>
  );
}

export default App;
