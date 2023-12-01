const Contact = () => {
  return (
    <>
      <div className="container-fluid" style={{ height: "90vh" }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className="card border-dark"
            style={{ width: "95%", height: "95%" }}
          >
            <div className="card-body">
              <h1 className="card-title">Contact</h1>
              <div>
                <h5>Email: saoitjensen@gmail.com</h5>
                <h5>GitHub: jensenjamessaoit</h5>
                <h5>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/jensen-saoit-4108b1299/"
                    style={{ textDecoration: "none" }}
                  >
                    JJ Saoit
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
