const Navbar = () => {
  const style = { color: "#000000" };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ borderBottomStyle: "solid", borderBottomWidth: "1px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={style}>
            Museum JJ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#000000", borderColor: "#000000" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/projects" style={style}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume" style={style}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact" style={style}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
