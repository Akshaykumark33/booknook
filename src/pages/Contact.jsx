import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting BookNook! We will get back to you soon."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };


  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-hero">

        <div className="container text-center">

          <span className="contact-label">
            CONTACT BOOKNOOK
          </span>

          <h1>
            We'd Love to Hear From You
          </h1>

          <p>
            Have a question, suggestion, or need help
            with your order? Get in touch with us.
          </p>

        </div>

      </section>


      <section className="contact-section">

        <div className="container">

          <div className="row g-5">


            {/* Contact Information */}
            <div className="col-lg-5">

              <h2>
                Get in Touch
              </h2>

              <p className="contact-description">
                Our team is happy to help you with
                questions about books, stationery,
                orders, and more.
              </p>


              <div className="contact-info-card">

                <div className="contact-info-item">

                  <div className="contact-icon">
                    📍
                  </div>

                  <div>
                    <h5>Location</h5>
                    <p>
                      BookNook Store, Bengaluru, India
                    </p>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-icon">
                    📞
                  </div>

                  <div>
                    <h5>Phone</h5>
                    <p>
                      +91 98765 43210
                    </p>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-icon">
                    ✉️
                  </div>

                  <div>
                    <h5>Email</h5>
                    <p>
                      support@booknook.com
                    </p>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-icon">
                    🕐
                  </div>

                  <div>
                    <h5>Working Hours</h5>
                    <p>
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Contact Form */}
            <div className="col-lg-7">

              <div className="contact-form-card">

                <h2>
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="mb-3">

                    <label className="form-label">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Email */}
                  <div className="mb-3">

                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Subject */}
                  <div className="mb-3">

                    <label className="form-label">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Message */}
                  <div className="mb-4">

                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;