const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#693213" }}
      >
        <div className="container-fluid" style={{ background: "#693213" }}>
          <a className="navbar-brand" href="/" style={{ color: "#000000" }}>
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
            style={{ color: "#000000" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/projects"
                  style={{ color: "#000000" }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/resume"
                  style={{ color: "#000000" }}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="contact"
                  style={{ color: "#000000" }}
                >
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
