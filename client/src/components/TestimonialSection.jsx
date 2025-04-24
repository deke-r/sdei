
const TestimonialSection = ({ image, quote, name }) => {
  return (
    <div className="container-fluid container-test py-5 position-relative">
      {/* Dark Overlay */}
      <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>

      {/* Testimonial Section */}
      <div className="row mt-5 py-5 justify-content-center testimonial-content position-relative" style={{ zIndex: 2 }}>
        <div className="col-md-8 text-center">
          <img
            src={image}
            alt={name}
            className="rounded-circle mb-3"
            width="64"
            height="64"
          />
          <p className="lead text-light fst-italic">"{quote}"</p>
          <h6 className="mb-0 text-light">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
