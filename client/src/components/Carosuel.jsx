import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Carousel.css';
import { Link } from 'react-router-dom';
import img from '../assets/images/output_image-2-scaled.jpg';
import img2 from '../assets/images/istockphoto-466548585-612x612.jpg';
import img3 from '../assets/images/is.jpg';
const slides = [
    {
        src: img,
        title: 'Demolish with Precision: Expert Scrap & Demolition Services at Your Service',
        desc: 'Discover seamless website creation for your scrap dealing and demolition business with SDEI',
    },
    {
        src: img2,
        title: 'Building the Future: Reliable Solutions for Your Demolition Needs',
        desc: 'Transform your demolition projects with cutting-edge strategies and professional support from SDEI',
    },
    {
        src: img3,
        title: 'Innovative Scrap Management: Turning Waste into Opportunity',
        desc: 'Maximize your business potential with sustainable scrap management and demolition services powered by SDEI',
    },
];



const Carousel = () => {
    return (
        <div className="container-fluid p-0">
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                {/* Indicators */}
                {/* <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div> */}

                {/* Slides */}
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            data-bs-interval="4000"
                            key={index}
                            style={{ position: 'relative' }}
                        >
                            <img
                                src={slide.src}
                                className="d-block w-100"
                                alt={`Slide ${index + 1}`}
                                style={{
                                    height: '100vh',
                                    objectFit: 'cover',
                                }}
                            />

                            {/* Caption */}
                            <div
                                className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center"
                                style={{
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    position: 'absolute',
                                    background: 'rgba(0, 0, 0, 0.4)',
                                    color: '#fff',
                                    padding: '0 20px',
                                    fontFamily: 'Poppins',

                                }}
                            >
                                <h1 className="carousel-text-title" style={{ zIndex: 2 }}>{slide.title}</h1>
                                <p className="carousel-text-desc" style={{ zIndex: 2, color: 'lightgray', fontWeight: 600 }}>{slide.desc}</p>
                                <Link to='/contact' style={{textDecoration:'none',color:'white'}}>  <div className="carousel-text-button btn rounded-pill text-light" style={{ border: '2px solid #134377', zIndex: 2, padding: '12px 40px' }}>
                              
                                Get in touch with SDEI
                                </div></Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                    style={{ zIndex: 2 }}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                    style={{ zIndex: 2 }}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};

export default Carousel;
