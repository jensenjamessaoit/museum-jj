import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <div className="mx-auto">
          <a
            href="https://github.com/jensenjamessaoit"
            style={{ color: "black", textDecoration: "none" }}
          >
            github
            <FaGithub
              style={{
                height: "20px",
                width: "20px",
                color: "#000000",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
