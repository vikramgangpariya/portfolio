import { useRef } from "react";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_9aey0ff",//'your_service_id',
            "template_vmpsn6m",//'your_template_id',
            form.current,
            "1veXMNrzoaUMaq2kD"//'your_public_key'
        ).then(
            () => {
                alert('Message sent successfully!');
                form.current.reset();
            },
            (error) => {
                console.error(error);
                alert('Failed to send message. Please try again.');
            }
        );
    };
    return (
        <>
            <div id="colorlib-page">
                <Sidebar></Sidebar>

                {/* END COLORLIB-ASIDE */}
                <div id="colorlib-main">
                    <section className="ftco-section contact-section">
                        <div className="container">
                            <div className="row d-flex mb-5 contact-info">
                                <div className="col-md-12 mb-4">
                                    <h2 className="h4 font-weight-bold">Contact Information</h2>
                                </div>
                                <div className="w-100" />
                                <p className="mb-4">
                                    Thanks for stopping by! I'm Vikram, a passionate Node.js developer with a love for clean code and efficient backend architecture.
                                    If you're looking to build something amazing — or just want to say hello — drop me a message below.
                                    I’ll get back to you as soon as possible.
                                </p>

                                <div className="col-md-4">
                                    <p>
                                        <span>Address:</span> Bikaner, Rajasthan, India
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p>
                                        <span>Phone:</span>{" "}
                                        <a href="tel:+918386059147">+91 83860 59147</a>
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <p>
                                        <span>Email:</span>{" "}
                                        <a href="mailto:vikramgangpariya27@gamil.com">vikramgangpariya27@gamil.com</a>
                                    </p>
                                </div>

                            </div>
                            <div className="row block-9">
                                <div className="col-md-6 order-md-last pr-md-5">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="from_name"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="from_email"
                                                className="form-control"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                cols={30}
                                                rows={7}
                                                className="form-control"
                                                placeholder="Message"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                value="Send Message"
                                                className="btn btn-primary py-3 px-5"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-6">
                                    <img
                                        src="images/contact.jpg"
                                        alt="Location"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>

                        </div>
                    </section>

                    <Footer></Footer>
                </div>
                {/* END COLORLIB-MAIN */}

            </div>
            {/* END COLORLIB-PAGE */}
        </>

    );
};