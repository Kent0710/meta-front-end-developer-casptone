const About = () => {
    return (
        <div id="about-container">
            <section className="col-items" id="about-content">
                <div>
                    <h3> Little Lemon </h3>
                    <h5> Chicago </h5>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </section>

            <section id="images-container">
                <img src="https://images.squarespace-cdn.com/content/v1/5e90c89d550b83096e2ac92a/1671324467404-XS6EFGX4WBX60H04GR6Q/lacroix-limoncello_can-lemon-still-life_leslie-grow_157_WEB.jpeg?format=1000w" alt="about-second-image" id="about-second-image" />
                <img src="https://5.imimg.com/data5/KG/FD/DN/ANDROID-77228894/product-jpeg.jpg" alt="about-first-image" id="about-first-image" />
            </section>
        </div>
    );
};

export default About;
