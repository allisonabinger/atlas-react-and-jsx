import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="http://www.linkedin.com/in/allisonbinger" target="_blank">
        <img src={linkedin} alt="linkedin logo" />
      </a>
      <a href="http://www.github.com/allisonabinger" target="_blank">
        <img src={github} alt="github logo" />
      </a>
    </div>
  );
}

export default SocialLinks;
