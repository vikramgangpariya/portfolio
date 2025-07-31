import { useRef, useState } from "react";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            "service_s4uik6y",
            "template_vmpsn6m",
            form.current,
            "1veXMNrzoaUMaq2kD"
        ).then(
            () => {
                setIsSending(false);
                form.current.reset();
                setShowModal(true); // show success modal
            },
            (error) => {
                console.error(error);
                setIsSending(false);
                alert('Failed to send message. Please try again.');
            }
        );
    };

    return (
        <>
            <div id="colorlib-page">
                <Sidebar />

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
                                    <p><span>Address:</span> Bikaner, Rajasthan, India</p>
                                </div>
                                <div className="col-md-4">
                                    <p><span>Phone:</span> <a href="tel:+918386059147">+91 83860 59147</a></p>
                                </div>
                                <div className="col-md-4">
                                    <p><span>Email:</span> <a href="mailto:vikramgangpariya27@gamil.com">vikramgangpariya27@gamil.com</a></p>
                                </div>
                            </div>

                            <div className="row block-9">
                                <div className="col-md-6 order-md-last pr-md-5">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
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
                                            <button
                                                type="submit"
                                                className="btn btn-primary py-3 px-5"
                                                disabled={isSending}
                                            >
                                                {isSending ? "Sending..." : "Send Message"}
                                            </button>
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

                    <Footer />
                </div>
            </div>

            {/* ✅ Success Modal */}
            {showModal && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1050,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onClick={() => setShowModal(false)}
                >
                    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Message Sent</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your message has been sent successfully.</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
