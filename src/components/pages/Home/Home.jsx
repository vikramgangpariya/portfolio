import { NavLink } from "react-router-dom";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";

export default function Home() {
    return (
        <>
            <div id="colorlib-page">

                <Sidebar></Sidebar>
                {/* END COLORLIB-ASIDE */}
                <div id="colorlib-main">
                    <div
                        className="hero-wrap js-fullheight"
                        style={{ backgroundImage: "url(images/bggg.jpg)" }}
                        data-stellar-background-ratio="0.5"
                    >
                        <div className="overlay" />
                        <div className="js-fullheight d-flex justify-content-center align-items-center">
                            <div className="col-md-8 text text-center">
                                {/* Profile Image */}
                                <div
                                    className="img mb-4 mt-4"
                                    style={{
                                        backgroundImage: "url(images/author.jpg)",
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "50%",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        margin: "0 auto",
                                    }}
                                />

                                {/* Intro Text */}
                                <div className="desc">
                                    <h2 className="subheading">Hi, I'm</h2>
                                    <h1 className="mb-4">hello</h1>
                                    <p className="mb-4">
                                        A Node.js backend developer from India with a passion for building fast, secure, and scalable APIs using JavaScript and TypeScript.
                                    </p>

                                    {/* Action Buttons */}
                                    <p className="d-flex justify-content-center gap-3">
                                        <NavLink to="/contact" className="btn btn-primary px-4 py-2 mr-2">
                                            Contact Me
                                        </NavLink>
                                        <NavLink to="/about" className="btn btn-primary px-4 py-2">
                                            About Me
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>

                {/* END COLORLIB-MAIN */}
            </div>
            {/* END COLORLIB-PAGE */}
        </>
    );
};