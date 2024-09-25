import "./columna.css";
import { Tarea } from "../tarea";

export function Columna(prop) {
  return (
    <div className="box">
      <h1 className="title is-4"> {prop.titulo} </h1>
      {prop.tareas.map((task) => (
        <Tarea
          id={task.id}
          tag={task.tag}
          titulo={task.titulo}
          descripcion={task.descripcion}
        />
      ))}
    </div>
  );
}
