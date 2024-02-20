import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://github.com/Charliethesage/Weather-Forecast-"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://rubancharles.vercel.app/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-user-tie"></i> <span>Portfolio</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ruban-charles-aa1239165/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-linkedin"></i> <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/charli_e_963/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
