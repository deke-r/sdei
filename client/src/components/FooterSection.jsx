import { Link } from 'react-router-dom';
const FooterSection = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Left Section - About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">About Us</h5>
            <p>
              We specialize in delivering high-quality solutions tailored to your needs.
              With years of experience and a team of dedicated professionals, we ensure
              the highest standards of performance and customer satisfaction.
              Our innovative approach and expertise help us provide exceptional value for every project.
            </p>
          </div>

          {/* Middle Section - Contact Information */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact Information</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                UGF Pocket 2 Jasola Delhi – 110025
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                +91-9319154610
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                info@sdei.in
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li>
                <Link to="#" target="_blank" className="text-white me-3" aria-label="Facebook">
                  <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="text-white me-3" aria-label="Twitter">
                  <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="text-white me-3" aria-label="LinkedIn">
                  <i className="bi bi-linkedin" style={{ fontSize: '24px' }}></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="text-white me-3" aria-label="YouTube">
                  <i className="bi bi-youtube" style={{ fontSize: '24px' }}></i>
                </Link>
              </li>
              <li>
                <a
                  href="https://web.whatsapp.com/send?phone=919319154610&text="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp" style={{ fontSize: '24px' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col-12 text-center">
            <hr className="border-light" />
            <p className="mb-0">&copy; {new Date().getFullYear()} SDEI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
