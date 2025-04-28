import { Link } from 'react-router-dom';
import img from '../assets/images/photo-1650212603995-df1df24e01dc.jpg'


const WhyChooseUsSection = () => {
  return (
    <div className="container py-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2>Why Choose Us</h2>
        <p className="mb-0">
          Experience unparalleled service quality, innovative solutions, and trustworthy partnerships when you collaborate with us.
        </p>
      </div>

      {/* Main Content */}
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img}
            alt="Why Choose us"
            className="img-fluid rounded"
            width="600"
            height="500"
          />
        </div>

        {/* Description Box */}
        <div className="col-md-6">
          <div className="p-4 bg-light rounded">
            <h3>Why Choose us</h3>
            <p>
              Choose us for all your demolition, decommissioning, and scrap dealing needs because we
              offer unmatched expertise and reliability. Our experienced team ensures safe and efficient
              handling of projects, whether it’s tearing down buildings, decommissioning facilities, or
              recycling scrap materials.
            </p>
            <p>
              We prioritize environmental sustainability and compliance with regulations in every job we
              undertake. With a commitment to excellence, we guarantee minimal disruption and maximum
              satisfaction. Trust us for seamless services tailored to your specific requirements.
            </p>
            <Link to="/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india" className="btn btn-primary">Learn more about our company</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
