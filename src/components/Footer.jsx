import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "100" }}
      >
        <a
          href="https://github.com/jensenjamessaoit"
          style={{
            color: "black",
            textDecoration: "none",
            marginLeft: "16px",
            marginRight: "16px",
          }}
        >
          jensenjamessaoit
          <FaGithub
            style={{
              height: "20px",
              width: "20px",
              color: "#000000",
              marginLeft: "2px",
            }}
          />
        </a>
        <a
          href="mailto:https://github.com/jensenjamessaoit"
          style={{
            color: "black",
            textDecoration: "none",
            marginLeft: "16px",
            marginRight: "16px",
          }}
        >
          saoitjensen@gmail.com
          <MdEmail
            style={{
              height: "20px",
              width: "20px",
              color: "#000000",
              marginLeft: "2px",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jensen-saoit-4108b1299/"
          style={{
            color: "black",
            textDecoration: "none",
            marginLeft: "16px",
            marginRight: "16px",
          }}
        >
          JJ Saoit
          <FaLinkedin
            style={{
              height: "20px",
              width: "20px",
              color: "#000000",
              marginLeft: "2px",
            }}
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
