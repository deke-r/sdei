import { useForm } from "react-hook-form";
import '../styles/Contact.css';
import axios from 'axios';
import { useState } from "react";


const Contact = () => {

    const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null); 


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit =async (data) => {
    setLoading(true);
    setResponseMsg(null);
    console.log(data);

    const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl,':apiurl');




    try {
        let res=await axios.post(`${import.meta.env.VITE_API_URL}/contact-form-data`,data);
        if (res.data.success) {
          setResponseMsg({ type: 'success', text: 'Message sent successfully!' });
          reset();
        } else {
          setResponseMsg({ type: 'error', text: 'Something went wrong. Please try again.' });
        }
      } catch (error) {
        console.error('Submission error:', error);
        setResponseMsg({ type: 'error', text: 'Server error. Please try later.' });
      } finally {
        setLoading(false);
      }



  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        {/* Google Maps */}
        <div className="col-md-6">
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864981378914!2d-122.40148158468143!3d37.793617179756364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e81a4ab9%3A0x6f7eafaa50c7c845!2sGoogle!5e0!3m2!1sen!2sus!4v1648240320663!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <div className="contact-form-container shadow-lg rounded p-4">
            <h4 className="mb-4">Contact Us</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                  placeholder="Enter your mobile number"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                />
                {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
              </div>

              <div className="mb-3">
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  rows="4"
                  placeholder="Write your message here"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary text-light f_14 fw-semibold" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {responseMsg && (
              <div className={`mt-3 alert ${responseMsg.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {responseMsg.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
