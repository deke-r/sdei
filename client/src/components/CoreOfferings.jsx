import { Link } from "react-router-dom";
import img from '../assets/images/dirty-dumped-objects-arrangement-scaled.jpg';
import img2 from '../assets/images/output_image.jpg';
import img3 from '../assets/images/warehouse-decom-liquidation-7-1170x470_LE_auto_x2.jpg';

const coreOfferings = [
  {
    title: 'Scrap Dealing',
    img: img,
    desc: 'Unlock the value in your scrap with our expert Scrap Dealing service. From metal scraps to electronics, we provide efficient and eco-friendly solutions. Get top dollar for your recyclables while contributing to a sustainable future. Trust us to handle your scrap with care and professionalism. Contact us today to turn your clutter into cash.',
  },
  {
    title: 'Demolition Services',
    img: img2,
    desc: 'Experience top-notch industrial, commercial, or residential buildings demolition services backed by cutting-edge technology and skilled professionals. We deliver safe and efficient demolition solutions. Our expert team ensures compliance with regulations while maximizing sustainability. Contact us now for seamless demolition services tailored to your needs.',
  },
  {
    title: 'Facility Decommissioning',
    img: img3,
    desc: 'Streamline your facility decommissioning process with our expert services. From industrial plants to commercial spaces, we provide comprehensive solutions tailored to your needs. Our efficient approach ensures minimal downtime and maximum environmental responsibility. Contact us today to discuss your decommissioning needs.',
  },
];

const CoreOfferings = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2>Our Core Offerings</h2>
        <p>
          Discover our key services that cater to all your commercial scrap dealing and industrial
          demolition needs.
        </p>
      </div>

      <div className="row">
        {coreOfferings.map((item, index) => (
          <div className="col-md-4 mb-4 d-flex" key={index}>
            <div className="card h-100 w-100 d-flex flex-column">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.desc}</p>
                <Link to="/contact" className="btn btn-primary mt-auto">
                Contact SDEI for Professional Demolition Solutions and Scrap Material Handling
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreOfferings;
