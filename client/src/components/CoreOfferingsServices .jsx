import { Link } from 'react-router-dom';
import img from '../assets/images/photo-1650212603995-df1df24e01dc.jpg'
import img2 from '../assets/images/photo-1586335925967-cb6bea91856c.jpg'
import img3 from '../assets/images/photo-1536094627107-abf98dedaa8f.jpg'
import img4 from '../assets/images/concept-person-suffering-from-cybersickness-technology-addiction (1).webp'
const offerings = [
  {
    id: 1,
    title: "Scrap Dealing",
    prefix: "01",
    description:
      "Our professional scrap dealing services ensure efficient handling and recycling of various commercial scrap materials, contributing to sustainability and cost-effectiveness for your business.",
    image:
      img,
  },
  {
    id: 2,
    title: "Demolition Services",
    prefix: "02",
    description:
      "With expertise in industrial demolition, our services guarantee safe and efficient demolition processes, adhering to regulations and safety standards while clearing the path for new developments.",
    image:
      img2
  },
{
  id: 3,
  title: "E-Waste Services",
  prefix: "03",
  description:
    "We offer responsible and efficient e-waste collection, segregation, and recycling services, ensuring safe disposal of electronic waste in compliance with environmental regulations and sustainability standards.",
  image: img4
}
,
  {
    id: 4,
    title: "Facility Decommissioning",
    prefix: "04",
    description:
      "Streamline your facility decommissioning process with our expert services. From industrial plants to commercial spaces, we provide comprehensive solutions tailored to your needs. Our efficient approach ensures minimal downtime and maximum environmental responsibility.",
    image:
      img3
  },
];

const CoreOfferingsServices = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Core Offerings</h2>
          <p className="text-muted">
            Discover our key services that cater to all your commercial scrap dealing and industrial demolition needs.
          </p>
        </div>

        {offerings.map((item, index) => (
          <div
            className={`row align-items-center mb-5 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
            key={item.id}
          >
            <div className="col-md-6">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <div className="p-3">
                <span className="text-primary fw-bold">{item.prefix}</span>
                <h3 className="fw-bold mt-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
                <Link to="/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india" className="btn btn-primary">
                  Get in Touch with us
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreOfferingsServices;
