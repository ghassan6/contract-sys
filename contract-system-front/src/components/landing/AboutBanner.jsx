import React from "react";
import { Link } from "react-router";

export default function AboutBanner() {
    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                <div className="position-relative h-100">
                  <img className="position-absolute img-fluid w-100 h-100" src="img/about-banner.webp" style={{ objectFit: "cover" }} alt="Property Contract" />
                </div>
              </div>
              <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 pe-lg-0">
                  <h6 className="text-primary">About Us</h6>
                  <h1 className="mb-4">Over 25 Years of Experience in Property Contract Management</h1>
                  <p>
                    We are a leading company specializing in managing property contracts, whether residential or commercial. 
                    With over 25 years of experience, we help property owners and investors streamline their contract processes 
                    and ensure transparency and efficiency in managing agreements.
                  </p>
    
                  <Link to="/contracts" className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                    check all contracts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }