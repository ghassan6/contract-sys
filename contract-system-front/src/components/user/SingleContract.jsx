import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SingleContract({ contract }) {

    // const [showCompany, setShowCompany] = useState(false);
    const [showContract, setShowContract] = useState(false);
    // const handleCloseCompany = () => setShowCompany(false);
    // const handleShowCompany = () => setShowCompany(true);
    const handleCloseContract = () => setShowContract(false);
    const handleShowContract = () => setShowContract(true);
    const today = new Date();
    const expiration_date = new Date(contract.expiration_date);
    const diffTime = (expiration_date - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <>
            <div className="col-xl-3 col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="dropdown float-end">

                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-1 ms-3">
                                <h5 className="font-size-16 mb-1">
                                    <a href="#" className="text-dark">
                                        {contract.contract_name}
                                        {diffDays > 10 ? (
                                            <span className="badge badge-soft-success mb-0">{diffDays} days left</span>
                                        ) : diffDays > 4? (
                                            <span className="badge badge-soft-warning mb-0">{diffDays} days left</span>
                                        ) : (
                                            <span className="badge badge-soft-danger mb-0">{diffDays} days left</span>
                                        )}
                                    </a>
                                </h5>
                                <span className="badge badge-soft-success mb-0">
                                    {contract.status}

                                </span>

                            </div>
                        </div>
                        <div className="mt-3 pt-1">
                            <p className="text-muted mb-0">
                                <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.Legal_officer_name} : {contract.company_phone}
                            </p>
                            <p className="text-muted mb-0 mt-2">
                                <i className="mdi mdi-home font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.company_name}
                            </p>
                            <p className="text-muted mb-0 mt-2">
                                <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.address}
                            </p>
                        </div>
                        <div className="d-flex gap-2 pt-4">
                            <Button variant="primary" onClick={handleShowContract}>
                                <i className="bx bx-user me-1" /> Contract Details
                            </Button>
                        </div>

                    </div>
                </div>

            </div>
            <Modal show={showContract} onHide={handleCloseContract} >
                <Modal.Header closeButton>
                    <Modal.Title>{contract.contract_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Contract Signing date: {contract.signing_date}</p>
                    <p>Contract Exprtion date: {contract.expiration_date}</p>
                    <p>Contract Total cost: ${contract.total_cost}</p>
                    <p>Items: {contract.items}</p>
                    <p>Legal officer name: {contract.Legal_officer_name}</p>
                    <p>Warranty start date: {contract.warranty_start_date}</p>
                    <p>Warranty end date: {contract.warranty_end_date}</p>
                    <p>Address: {contract.address}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseContract}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
 }

