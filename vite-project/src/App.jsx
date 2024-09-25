import "./App.css";
import { Columna } from "./componentes/columna";
import { NavBar } from "./componentes/navBar";

let tareas = [
  {
    id: 0,
    titulo: "tarea",
    descripcion: "hola",
    color: "is-danger",
    tag: "tag is-danger",
  },
];

function App() {
  return (
    <>
      <NavBar> </NavBar>
      <div className="appBody">
        <h1 className="title is-1"> Mi tablero </h1>
        <div className="columns">
          <div className="column">
            <Columna titulo="Backlog" tareas={tareas} />
          </div>
          <div className="column">
            <Columna titulo="To do" tareas={tareas} />
          </div>
          <div className="column">
            <Columna titulo="In progress" tareas={tareas} />
          </div>
          <div className="column">
            <Columna titulo="Blocked" tareas={tareas} />
          </div>
          <div className="column">
            <Columna titulo="Done" tareas={tareas} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
