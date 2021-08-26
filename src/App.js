import { Fragment } from "react";
import { Header } from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
