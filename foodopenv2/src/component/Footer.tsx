import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import "./Footer.css";

 

const Footer = () => {
  return (
<div className="footer">
<div className="container">
<div className="col"></div>
<div className="col">
<h5>Developers</h5>
<span className="bar"> </span>
<a href="/">Amel MOKDADI</a>
</div>
<div className="col">
<h5>Company</h5>
<span className="bar"> </span>
<a href="/">ECOLE-IT</a>
</div>
<div className="col">
<h5>Social Media</h5>
<span className="bar"> </span>
<a href="https://www.linkedin.com/">
<FaLinkedin className="icon" />
https://www.linkedin.com/{" "}
</a>
<a href="https://github.com/AMZALLiza/EducGouvReact">
<FaGithub className="icon" />
https://github.com/MOKDADIAmel/EducGouvReact
</a>
</div>
</div>
</div>
  );
};

 

export default Footer;