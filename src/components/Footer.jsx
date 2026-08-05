import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-about">

          <h2>PropertyPro</h2>

          <p>
            Modern property management software that helps landlords,
            agencies and property managers automate daily tasks.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>

          </div>

          <div>

            <h4>Resources</h4>

            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Documentation</a>
            <a href="#">Contact</a>

          </div>

          <div>

            <h4>Legal</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies</a>
            <a href="#">Licenses</a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 PropertyPro. All Rights Reserved.
        </p>

        <div className="socials">

          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;