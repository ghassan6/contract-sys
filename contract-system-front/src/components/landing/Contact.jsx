import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function ContactForm() {
    let navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const submitForm = (e) => {
      e.preventDefault();
      setFormErrors(validate(data));
      if (Object.keys(validate(data)).length !== 0) {
        return;
      }
      axios.post("http://localhost/API/msg.php", data).then(() => {
        setData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        navigate("/")
  
      })
     
    };
  
    const validate = (values) => {
      const errors = {};
      const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
  
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!regex.test(values.email)) {
        errors.email = "Please enter a valid email";
      }
  
      // const pregex = /^[0-9]*$/;
  
      if (!values.message) {
        errors.message = "message is required";
      }
  
      if (!values.subject) {
        errors.subject = "subject is required";
      }
      if (!values.name) {
        errors.name = "name is required";
      }
  
      return errors;
    };
  
    return (
      <div>
        {/* Contact Start */}
        <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
          <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 ps-lg-0">
                  <h6 className="text-primary">Contact Us</h6>
                  <h1 className="mb-4">Feel Free To Contact Us</h1>
  
                  <form onSubmit={submitForm}>
                    <div className="row g-3">
                      <div className="col-md-6">
                      <label htmlFor="name">Your Name</label>

                        <div className="form-floating">
                          <input
                            name="name"
                            type="text"
                            onChange={handleChange}
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <p className="errors">{formErrors.name}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <label htmlFor="email">Your Email</label>

                        <div className="form-floating">
                          <input
                            name="email"
                            type="email"
                            onChange={handleChange}
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <p className="errors">{formErrors.email}</p>
                        </div>
                      </div>
                      <div className="col-12">
                      <label htmlFor="subject">Subject</label>

                        <div className="form-floating">
                          <input
                            name="subject"
                            type="text"
                            onChange={handleChange}
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <p className="errors">{formErrors.subject}</p>
                        </div>
                      </div>
                      <div className="col-12">
                      <label htmlFor="message">Message</label>

                        <div className="form-floating">
                          <textarea
                            name="message"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                          <p className="errors">{formErrors.message}</p>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
                <div className="position-relative h-100">
                  <iframe
                    className="position-absolute w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.0058614777877!2d35.742114075262435!3d32.04203277397949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca2aa6c9505af%3A0xc1d8fa75aade030f!2sSalt%20Institute%20for%20careers%20traditional%20crafts!5e0!3m2!1sen!2sjo!4v1742559075720!5m2!1sen!2sjo"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    title="d"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>
    );
}


