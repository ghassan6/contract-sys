import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Address</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Salt, jordan</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+962777777777</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@rentsign.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light btn-social" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href="https://www.linkedin.com/in/bara-abusaleem-b38a96201/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link" href="/">Home</a>
                        <a className="btn btn-link" href="/about">About Us</a>
                        <a className="btn btn-link" href="/contact">Contact Us</a>
                        <a className="btn btn-link" href="/contracts">Contracts</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Sign up</h5>
                        <p>Start sign or deploying cotracts today!</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                            <Link  to='/register' className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="/ ">RentSign</a>, Sofix company.
                        </div>
                        <div className="col-md-6 text-center text-md-end">



                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

