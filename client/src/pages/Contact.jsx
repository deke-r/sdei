
const Contact = () => {
  return (
    <div className="container my-5">
      <div className="container d-flex flex-colomn justify-content-center">
        {/* Google Maps */}
        <div className="div ">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864981378914!2d-122.40148158468143!3d37.793617179756364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e81a4ab9%3A0x6f7eafaa50c7c845!2sGoogle!5e0!3m2!1sen!2sus!4v1648240320663!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="div shadow-lg rounded">

          <h4 className="mb-4">Contact Us</h4>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
          </div>

        </div>
      </div>
    
  );
};

export default Contact;
