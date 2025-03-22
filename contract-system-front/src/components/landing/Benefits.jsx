import React from "react";

export default function App() { 

    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="p-lg-5 ps-lg-0">
                  <h6 className="text-primary">Why Choose Our Property Management System?</h6>
                  <h1 className="mb-4">Complete Property & Contract Management Solutions</h1>
                  <p className="mb-4 pb-2">
                    We offer a comprehensive system to manage property contracts, rentals, and agreements efficiently. 
                    Our solution ensures seamless handling of your properties with ease and security.
                  </p>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle">
                          <i className="fa fa-check text-white"></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-0">Efficiency</p>
                          <h5 className="mb-0">Contract Management</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle">
                          <i className="fa fa-lock text-white"></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-0">Secure</p>
                          <h5 className="mb-0">Data Protection</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle">
                          <i className="fa fa-cogs text-white"></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-0">Customizable</p>
                          <h5 className="mb-0">Flexible Features</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle">
                          <i className="fa fa-users text-white"></i>
                        </div>
                        <div className="ms-4">
                          <p className="mb-0">24/7</p>
                          <h5 className="mb-0">Customer Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
                <div className="position-relative h-100">
                  <img className="position-absolute img-fluid w-100 h-100" src="img/banner-img.webp" style={{ objectFit: "cover" }} alt="Property Management" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
