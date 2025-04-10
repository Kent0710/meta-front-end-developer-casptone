import profileImage from "../images/655c6883100932e9fcc96f7a_11.jpeg";

import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div>
            <h3>Hear from our customers!</h3>

            <div id="testimonial-section">
                <TestimonalCard
                    ratings={4}
                    title={"Hello, world!"}
                    content={"This is fantastic! Keep it up."}
                    img={profileImage}
                    name={"John Doe"}
                    date={"12/15/1029"}
                />
                <TestimonalCard
                    ratings={4}
                    title={"Hello, world!"}
                    content={"This is fantastic! Keep it up."}
                    img={profileImage}
                    name={"John Doe"}
                    date={"12/15/1029"}
                />
                <TestimonalCard
                    ratings={4}
                    title={"Hello, world!"}
                    content={"This is fantastic! Keep it up."}
                    img={profileImage}
                    name={"John Doe"}
                    date={"12/15/1029"}
                />
            </div>
        </div>
    );
};

export default Testimonials;

const TestimonalCard = ({ ratings, title, content, img, name, date }) => {
    return (
        <section id="testimonial-section-container">
            <img src={profileImage} alt="profile-image" id="profile-image" />

            <div className="col-items" id="testimonial-card-content">
                <div>
                    <h5> Adalane Lovelace </h5>
                    <small> 2 days ago </small>
                </div>
                <div className="stars-container">
                    {/* Filled stars */}
                    {[...Array(ratings)].map((_, index) => (
                        <span key={`filled-${index}`}>
                            {" "}
                            <FaStar size={27} color="yellow" />{" "}
                        </span>
                    ))}
                    {/* Empty stars */}
                    {[...Array(5 - ratings)].map((_, index) => (
                        <span key={`empty-${index}`}>
                            {" "}
                            <FaStar size={27} color="grey" />{" "}
                        </span>
                    ))}
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </section>
    );
};
