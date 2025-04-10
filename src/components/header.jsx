import { Link } from "react-router";
import headerLogo from "../images/aa38384d3942a55696d8070552aed2f4c190fc14.jpg";
import Nav from "./nav";

const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <img
                    src={headerLogo}
                    alt="little-lemon-nav-logo"
                    width={300}
                    height={80}
                />
            </Link>
            <Nav />
        </header>
    );
};

export default Header;
