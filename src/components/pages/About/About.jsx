import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";

export default function About() {
    return (
        <>
            <div id="colorlib-page">
                <Sidebar />

                <div id="colorlib-main">
                    {/* About Me Section */}
                    <section className="ftco-section bg-light">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-8 text-center heading-section">
                                    <h2 className="mb-4">About Me</h2>
                                    <p>
                                        I'm <strong>Vikram Gangpariya</strong>, a passionate backend developer from Bikaner, India with 2+ years of professional experience in building scalable APIs and robust server-side solutions.
                                        I specialize in <strong>Node.js</strong>, working across multiple industries like e-commerce, SaaS, and social platforms.
                                    </p>
                                    <p>
                                        I love turning ideas into reality with clean code, solid architecture, and performance-driven design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="ftco-section" id="skills">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-8 text-center heading-section">
                                    <h2 className="mb-4">Skills</h2>
                                    <p>
                                        My daily toolkit includes a wide range of languages, frameworks, databases, and DevOps tools that help me deliver efficient backend systems.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h5>Operating Systems</h5>
                                    <ul>
                                        <li>Windows 7 / 8 / 10</li>
                                        <li>Ubuntu</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Programming Languages</h5>
                                    <ul>
                                        <li>HTML, CSS</li>
                                        <li>JavaScript, TypeScript</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Node.js Frameworks / Tools</h5>
                                    <ul>
                                        <li>Express</li>
                                        <li>NestJS</li>
                                        <li>Sequelize ORM</li>
                                        <li>TypeORM</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Database Management</h5>
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>PostgreSQL</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Caching</h5>
                                    <ul>
                                        <li>Redis</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Developer Tools</h5>
                                    <ul>
                                        <li>Git</li>
                                        <li>Postman</li>
                                        <li>Swagger</li>
                                        <li>Docker (basic)</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Automation / Deployment</h5>
                                    <ul>
                                        <li>CI/CD with GitHub Actions</li>
                                        <li>Server Management with PM2</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Others</h5>
                                    <ul>
                                        <li>JWT, OAuth2</li>
                                        <li>Socket.io</li>
                                    </ul>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <h5>Communication Tools</h5>
                                    <ul>
                                        <li>Skype</li>
                                        <li>Slack</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="ftco-section bg-light" id="projects">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-8 text-center heading-section">
                                    <h2 className="mb-4">My Projects</h2>
                                    <p>
                                        Below are some of the meaningful projects I've contributed to — focused on solving real-world problems with clean architecture and efficient backend logic.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                {/* Shopspot */}
                                <div className="col-md-6 col-lg-3 d-flex mb-4">
                                    <div className="project-entry p-4 border rounded shadow-sm w-100 bg-white">
                                        <h4 className="mb-2">Shopspot</h4>
                                        <p className="text-muted">
                                            A one-stop app to find local stores and services using Google Maps location APIs and filters. Built using React, Express.js, Sequelize, and MySQL
                                        </p>
                                    </div>
                                </div>

                                {/* Women Empowerment */}
                                <div className="col-md-6 col-lg-3 d-flex mb-4">
                                    <div className="project-entry p-4 border rounded shadow-sm w-100 bg-white">
                                        <h4 className="mb-2">Women Empowerment</h4>
                                        <p className="text-muted">
                                            Admin and coach applications to empower women through mentorship and milestone tracking. Built using React, Express.js, Sequelize, and PostgreSQL
                                        </p>
                                    </div>
                                </div>

                                {/* SMIOC Bahrain */}
                                <div className="col-md-6 col-lg-3 d-flex mb-4">
                                    <div className="project-entry p-4 border rounded shadow-sm w-100 bg-white">
                                        <h4 className="mb-2">SMIOC Bahrain</h4>
                                        <p className="text-muted">
                                            A church information portal with prayer timings, events, and news for the Bahrain-based community.Built using React, Express.js, Sequelize, and MySQL
                                        </p>
                                    </div>
                                </div>

                                {/* Restaurant Management with Device Monitoring */}
                                <div className="col-md-6 col-lg-3 d-flex mb-4">
                                    <div className="project-entry p-4 border rounded shadow-sm w-100 bg-white">
                                        <h4 className="mb-2">Hy-Genius</h4>
                                        <p className="text-muted">
                                            Developed a restaurant management system with TheThingsNetwork-based temperature monitoring,
                                            role-based access, subscription plans, and hourly device data capture. Built using Flutter, Angular, Express.js, Sequelize, and MySQL.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>

    );
};