const Resume = () => {
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
              <h1 className="card-title">Resume</h1>
              <div>
                <h4>Languages:</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div>
                <h4>Front-End:</h4>
                <ul>
                  <li>React</li>
                  <li>Handlebars</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div>
                <h4>Back-End:</h4>
                <ul>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>GraphQl</li>
                  <li>MySql</li>
                  <li>sequelize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
