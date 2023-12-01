import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ img, title, repo, deploy }) => {
  return (
    <div
      className="card"
      style={{
        margin: "64px",
        width: "18rem",
        height: "15rem",
        borderColor: "#000000",
      }}
    >
      <img
        src={img}
        className="card-img-top"
        alt="screenshot"
        style={{ maxHeight: "140px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={repo}>
          <FaGithub />
        </a>
        <a href={deploy}>
          <FaLink />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
