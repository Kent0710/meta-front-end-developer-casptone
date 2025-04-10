import greekSalad from "../images/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg";
import bruchetta from "../images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg";
import pasta from "../images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg";

const Highlights = () => {
    return (
        <div>
            <div id="highlights-header-container">
                <h3> Specials </h3>
                <button> Order online </button>
            </div>

            <div id="highlights-section">
                <ProductCard
                    srcImage={greekSalad}
                    alt={"Greek Salad"}
                    title={"Greek Salad"}
                    price={"$14.99"}
                    description="The famous greek salad of crispy lettuce, peppers, olives and
                    our Chicago style feta cheese, garnished with crunchy galic and
                    rosemary croutons."
                />
                <ProductCard
                    srcImage={bruchetta}
                    alt={"Greek Salad"}
                    title={"Greek Salad"}
                    price={"$14.99"}
                    description="The famous greek salad of crispy lettuce, peppers, olives and
                    our Chicago style feta cheese, garnished with crunchy galic and
                    rosemary croutons."
                />
                <ProductCard
                    srcImage={pasta}
                    alt={"Greek Salad"}
                    title={"Greek Salad"}
                    price={"$14.99"}
                    description="The famous greek salad of crispy lettuce, peppers, olives and
                    our Chicago style feta cheese, garnished with crunchy galic and
                    rosemary croutons."
                />
            </div>
        </div>
    );
};

export default Highlights;

const ProductCard = ({ srcImage, alt, title, price, description }) => {
    return (
        <figure>
            <img src={srcImage} alt={alt} className="highlights-images" />
            <div id="highlights-article-header">
                <h5> {title} </h5>
                <p> {price} </p>
            </div>
            <p>{description}</p>
            <button id="order-delivery">
                {" "}
                Order delivery
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd2sjxFQjvIeJHrB6h01ODTyCuzYmEwvy1w&s"
                    alt="order-icon"
                    width={20}
                    height={20}
                    color="white"
                />
            </button>
        </figure>
    );
};
