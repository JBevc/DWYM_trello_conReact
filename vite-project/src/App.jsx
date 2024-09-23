import "./App.css";
import { Columna } from "./componentes/columna";
import { NavBar } from "./componentes/navBar";

function App() {
  return (
    <>
      <NavBar> </NavBar>
      <div className="appBody">
        <h1 className="title is-1"> Mi tablero </h1>

        <div className="columns">
          <div className="column">
            <Columna titulo="Backlog" />
          </div>
          <div className="column">
            <Columna titulo="To do" />
          </div>
          <div className="column">
            <Columna titulo="In progress" />
          </div>
          <div className="column">
            <Columna titulo="Blocked" />
          </div>
          <div className="column">
            <Columna titulo="Done" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
