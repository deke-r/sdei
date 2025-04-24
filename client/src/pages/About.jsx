import AboutUsSection from "../components/AboutUsSection"
import BannerTop from "../components/BannerTop"
import Contact from "../components/Contact"

const About = () => {
  return (
    <>
    <BannerTop page='About'/>
    <AboutUsSection/>

    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What Sets Us Apart</h2>
        <ol className="ps-3">
          <li className="mb-4">
            <strong>Expertise:</strong> Our team comprises experienced professionals with expertise in various demolition techniques, scrap handling processes, and facility decommissioning procedures.
          </li>
          <li className="mb-4">
            <strong>Safety First:</strong> We prioritize safety at every step of the project, ensuring compliance with industry standards and regulations to protect our employees, clients, and the environment.
          </li>
          <li className="mb-4">
            <strong>Sustainability:</strong> We are committed to sustainable practices, including recycling and responsible disposal of scrap materials, to minimize environmental impact and promote resource conservation.
          </li>
          <li className="mb-4">
            <strong>Client-Centric Approach:</strong> Our client-centric approach means we tailor our services to meet the unique needs and goals of each client, delivering personalized solutions and exceptional results.
          </li>
        </ol>

        <h2 className="text-center my-5">Our Services</h2>
        <ol className="ps-3">
          <li className="mb-4">
            <strong>Demolition Services:</strong> Whether it’s residential, commercial, or industrial demolition, we have the expertise and equipment to handle projects of any size and complexity. From site assessment to debris removal, we ensure a smooth and efficient demolition process.
          </li>
          <li className="mb-4">
            <strong>Scrap Dealing:</strong> We buy and sell various types of scrap materials, including metal, concrete, wood, and more. Our transparent and fair pricing, coupled with prompt services, make us a preferred choice for scrap dealing solutions.
          </li>
          <li className="mb-4">
            <strong>Facility Decommissioning:</strong> Our facility decommissioning services encompass the safe and systematic shutdown of industrial plants, warehouses, and other facilities. We handle equipment dismantling, waste management, and site cleanup with precision and care.
          </li>
        </ol>

        <h2 className="text-center my-5">Why Choose Us</h2>
        <ol className="ps-3">
          <li className="mb-4">
            <strong>Quality Assurance:</strong> We maintain strict quality control measures throughout our operations to deliver superior results and exceed industry standards.
          </li>
          <li className="mb-4">
            <strong>Reliability:</strong> Clients trust us for our reliability, punctuality, and commitment to meeting project deadlines without compromising quality.
          </li>
          <li className="mb-4">
            <strong>Affordability:</strong> Our competitive pricing ensures that clients receive value for their investment, without compromising on the quality of services.
          </li>
          <li className="mb-4">
            <strong>Customer Support:</strong> Our dedicated customer support team is available to address any queries, provide updates, and ensure a seamless experience from start to finish.
          </li>
        </ol>
      </div>
    </section>


    <Contact/>
    </>
  )
}

export default About