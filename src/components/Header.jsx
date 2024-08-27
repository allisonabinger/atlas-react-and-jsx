import Greeting from "./Greeting.jsx";
import SocialLinks from "./SocialLinks.jsx"

function Header() {
    return (
        <nav className="navbar">
            <Greeting /><SocialLinks/>
        </nav>
    )
}

export default Header;
