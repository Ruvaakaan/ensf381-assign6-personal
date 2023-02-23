import Side from "./Side";
import Main from "./Main";

function App() {
  return (
    <>
      <div id="top">
        <div id="title">Lotion</div>
        <div id="subTitle">Like Notion, but worse.</div>
        <div id="icon">
          <button id="enableSide">&#9776;</button>
        </div>
      </div>
      <div id="middle">
        <Side></Side>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
