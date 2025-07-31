export default function Footer() {
    return (
        <>
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container px-md-1">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Skills</h2>
                                <ul className="list-unstyled categories">
                                    <li><a href="#">Node.js, Nest.js</a></li>
                                    <li><a href="#">Express.js</a></li>
                                    <li><a href="#">Sequelize / MySQL, MongoDB, PostgreSQL</a></li>
                                    <li><a href="#">React.js</a></li>
                                    <li><a href="#">REST API Development</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Projects</h2>
                                <ul className="list-unstyled categories">
                                    <li><a href="#">Shopspot – Local Services App</a></li>
                                    <li><a href="#">Women Empowerment Platform</a></li>
                                    <li><a href="#">F&F Sales & Inventory System</a></li>
                                    <li><a href="#">Tugonn – Social Media App</a></li>
                                    <li><a href="#">Church Info App (SMIOC Bahrain)</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Contact</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon icon-map-marker" />
                                            <span className="text">Bikaner, Rajasthan, India</span>
                                        </li>
                                        <li>
                                            <a href="tel:+918386059147">
                                                <span className="icon icon-phone" />
                                                <span className="text">+91 83860 59147</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:vikramgangpariya27@gamil.com">
                                                <span className="icon icon-envelope" />
                                                <span className="text">vikramgangpariya27@gamil.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                &copy; {new Date().getFullYear()} Vikram Gangpariya | Node.js Developer
                                <br />
                                Built with ❤️ using React & Express
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};