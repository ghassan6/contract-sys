import React from 'react';

const Slider = () => {
    return (
        <div className="container-fluid p-0 pb-5 wow fadeIn">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/Wriin.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="display-2 text-white animated slideInDown">A smart contract management system</h1>
                            <p className="fs-5 fw-medium text-white mb-4 pb-3">A Contract Management System (CMS), sometimes called Control Lifecycle Management manages the production and management of contracts, Service Level Agreements (SLA) and Procurement Master Agreements. Features of a good Contract Management System includes: Storage of the company’s standardized contracts.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/single.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="display-2 text-white animated slideInDown">A smart contract management system</h1>
                            <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;