import { Link, useLocation } from 'react-router-dom';
import img from '../assets/images/photo-1536094627107-abf98dedaa8f.jpg';

const AboutUsSection = () => {
  const location = useLocation();

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img}
            className="img-fluid rounded"
            width="600"
            height="536"
            alt="SDEI is a leading provider of commercial scrap dealing and demolition services, offering a comprehensive range of solutions tailored to meet the specific needs of our clients."
          />
        </div>
        <div className="col-md-6">
          <h3>About us</h3>
          <p>
            SDEI is a leading provider of commercial scrap dealing and demolition services,
            offering a comprehensive range of solutions tailored to meet the specific needs
            of our clients.
          </p>
          <p>
            We are dedicated to providing top-quality demolition services, scrap dealing solutions,
            and facility decommissioning services in Delhi NCR. With years of experience and a team
            of skilled professionals, we have earned a reputation for excellence, reliability,
            and sustainability in the industry.
          </p>
          <p>
            <strong>Our Mission</strong>
            <br />
            Our mission is to deliver safe, efficient, and environmentally responsible solutions for
            demolition projects, scrap material handling, and facility decommissioning. We aim to exceed
            our clients’ expectations by prioritizing safety, quality, and customer satisfaction in
            every project we undertake.
          </p>
          {/* Conditionally render the button if not on the /about page */}
          {location.pathname !== '/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india' && (
            <Link to="/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india" className="btn btn-primary">Learn more about our company</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
