import heroImage from "../images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg";

const HeroSection = () => {
    return (
        <div id="hero-section-container">
            <div id="hero-section-content">
                <div>
                    <h1> Little Lemon </h1>
                    <h4> Chicago </h4>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                </p>
                <button> Reserve a table </button>
            </div>
            <img src={heroImage} alt="hero-image" id="hero-image" />
        </div>
    );
};

export default HeroSection;
