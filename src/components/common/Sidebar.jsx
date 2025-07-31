import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
            <h1 id="colorlib-logo">
                <NavLink to="/">Home</NavLink>
            </h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => (isActive ? 'colorlib-active' : '')}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'colorlib-active' : '')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'colorlib-active' : '')}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <a href="pdf/VikramCV.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="colorlib-footer">
                <p>
                    &copy; {new Date().getFullYear()} Vikram Gangpariya | Node.js Developer
                </p>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/share/1M3zJfeVYU/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                            <i className="icon-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/vikram_gangpariya?igsh=cXE4eHQ2aWN0Z2ps" target="_blank" rel="noopener noreferrer">
                            <i className="icon-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vikram-gangpariya-056224261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <i className="icon-linkedin" />
                        </a>
                    </li>
                </ul>

            </div>
        </aside>
    );
}
