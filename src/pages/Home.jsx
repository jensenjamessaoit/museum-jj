const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{ height: "80vh" }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="card mx-auto" style={{ width: "90%", height: "98%" }}>
            <div className="card-body">
              <h1 className="card-title">Welcome to my Museum</h1>
              <h3 className="card-subtitle">By JJ Saoit</h3>
              <p>
                Passionate web developer with a keen enthusiasm for the
                limitless possibilities of the web. Skilled in managing and
                creating both relational (MySQL) and non-relational (MongoDB)
                back-end/server-side databases. Experienced in developing
                dynamic and responsive user interfaces using front-end
                frameworks like React. I&apos;ve successfully completed projects
                ranging from a weather dashboard that utilizes the openweather
                API to a web app that helps Utah real estate lawyers cite laws
                much more efficiently, where I utilized technologies such as
                express, graphql, apollo, mongoose, and react. With a dedication
                to clean and efficient code, I believe in the transformative
                power of technology to elevate user experiences and solve
                real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
