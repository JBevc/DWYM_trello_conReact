import "./navBar.css";

export function NavBar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://trello.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png"
              alt="Logo"
            ></img>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons are-medium">
              <a className="button navbarButton"> Nueva Tarea </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
