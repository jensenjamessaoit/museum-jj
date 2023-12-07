import ProjectCard from "../components/ProjectsCard";

const projectList = [
  {
    id: 1,
    img: "/images/UtahRealEsateSS.PNG",
    title: "Utah Real Estate Keyword Search",
    repo: "https://github.com/Jelu113/Utah-Real-Estate-Keywords",
    deploy: "https://utah-real-estate-keywords-production.up.railway.app/",
  },
  {
    id: 2,
    img: "/images/doodleduelSS.PNG",
    title: "Doodle Duel",
    repo: "https://github.com/Leucisticboi/DoodleDuel",
    deploy: "https://doodle-duel-p2-32e9f10a2b67.herokuapp.com/",
  },
  {
    id: 3,
    img: "/images/skywatch.PNG",
    title: "Skywatch(flight tracker)",
    repo: "https://github.com/jensenjamessaoit/Skywatch",
    deploy: "https://jensenjamessaoit.github.io/Skywatch/",
  },
  {
    id: 4,
    img: "/images/blogsite.PNG",
    title: "CMS Blog Site(flight tracker)",
    repo: "https://github.com/jensenjamessaoit/CMS-blog-site",
    deploy: "https://cms-blog-site-production.up.railway.app/",
  },
];

const Projects = () => {
  const projectElements = projectList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        img={project.img}
        title={project.title}
        repo={project.repo}
        deploy={project.deploy}
      />
    );
  });

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
              <h1 className="card-title">Projects</h1>
              <div className="d-flex">{projectElements}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
