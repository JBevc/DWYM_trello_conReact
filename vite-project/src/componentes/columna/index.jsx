import "./columna.css";

export function Columna(prop) {
  return (
    <div className="box">
      <span className="icon-text is-flex">
        <h1 className="title is-4"> {prop.titulo} </h1>
        <button className="button boxButton is-rounded"> + </button>
      </span>
    </div>
  );
}
