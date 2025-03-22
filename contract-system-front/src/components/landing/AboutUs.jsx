import React from "react";
import '../../styles/about.css'

export default function AboutUs() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-lg-12">
          <h2 className="display-4 text-primary mb-4">About Us</h2>
          <p className="lead mb-4">
            We are a trusted property contract management platform, dedicated to simplifying the way property contracts are handled. With our years of expertise, we provide property owners, managers, and investors with an intuitive and secure solution for managing contracts and agreements.
          </p>
          <p className="mb-4">
            Our system ensures efficiency, security, and transparency in managing contracts, helping our clients save time and reduce the complexity of property management. Whether residential or commercial, our platform is designed to support all your property-related contract needs.
          </p>
          <p>
            Join hundreds of satisfied users who trust us to streamline their property contract management today!
          </p>
        </div>
      </div>
    </div>
  );
}
