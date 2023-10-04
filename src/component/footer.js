import React from "react";
import "../css/footer.css";
import Instagram from "../icone/instagram.png";
import Facebook from "../icone/facebook.png";
import X from "../icone/x.jpg";
import Linkedin from "../icone/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="reseau-social">
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="https://www.x.com/">
            <img src={X} alt="x" />
          </a>
        </div>
        <div className="copyright">
          <p>Copyright &copy; Team 5 </p>
        </div>
        <div className="footer-link">
          <a href="#">Contact</a>

          <a href="#">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
