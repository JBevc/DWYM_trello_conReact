import "./tarea.css";

export function Tarea(tarea) {
  return (
    <>
      <div
        className="card cardTask js-modal-trigger"
        //data-target="taskModal"
        id={tarea.id}
      >
        <div class="media-content">
          <span class={tarea.tag}> </span>
          <p class="title is-6"> {tarea.titulo} </p>
        </div>

        <div class="content">
          <p> {tarea.descripcion} </p>
        </div>
      </div>
    </>
  );
}
