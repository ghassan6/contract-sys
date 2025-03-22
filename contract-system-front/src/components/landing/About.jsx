import React from 'react'

const About = () => {
    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container about px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute img-fluid w-100 h-100" src="img/electronic-contract.jpg" style={{ objectFit: "cover" }} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 pe-lg-0">
                            <h6 className="text-primary">About Us</h6>
                            <h1 className="mb-4">More than 25+ years in contract management</h1>
                            <p>We are a company interested in concluding contracts for major companies, and we are working to attract all beneficiaries by providing them with facilities</p>

                            <a href="http://localhost:3000/about" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About