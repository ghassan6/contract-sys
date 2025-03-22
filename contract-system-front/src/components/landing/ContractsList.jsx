import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../auth/auth";
import { useNavigate } from "react-router";

export default function ContractsList() {
    const [contracts, setContracts] = useState([]);
    const navigate = useNavigate();
    const auth = useAuth();

    const fetchContracts = () => {
        axios.get("http://localhost/API/contract.php")
        .then((response) => {
            setContracts(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        fetchContracts();
    }, [])

    const handleSignContract = (contract_id) => { 
        const user_id = sessionStorage.getItem('user_id');
        console.log(contract_id, user_id);
        axios.put(`http://localhost/API/contract.php?contract_id=${contract_id}&user_id=${user_id}`)
            .then((response) => {
                console.log(response.data);
                fetchContracts();
                
            })
            .catch((error) => {
                console.log(error);
    })
    }

    return (
        <div className="container">
            <div className="row">
                {contracts
                    .filter((contract) => contract.signed_by === null)
                    .map((contract) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={contract.contract_id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{contract.contract_name}</h5>
                                    <p className="card-text">
                                        <strong>Starting Date:</strong> {contract.starting_date}<br />
                                        <strong>Expiration Date:</strong> {contract.expiration_date}<br />
                                        <strong>Total Cost:</strong> {contract.total_cost}<br />
                                        <strong>Legal Officer:</strong> {contract.Legal_officer_name}<br />
                                        <strong>Address:</strong> {contract.address}
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#contractModal${contract.contract_id}`}
                                    >
                                        View Details
                                    </button>
                                    {auth.user && auth.user.role === "user" && (
                                        <button
                                            className="btn btn-success ms-4"
                                            onClick={() => {handleSignContract(contract.contract_id)}}
                                        >
                                            Sign Contract
                                        </button>
                                    )}


                                </div>
                            </div>

                            {/* Modal */}
                            <div
                                className="modal fade"
                                id={`contractModal${contract.contract_id}`}
                                tabIndex="-1"
                                aria-labelledby={`contractModalLabel${contract.contract_id}`}
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`contractModalLabel${contract.contract_id}`}>
                                                {contract.contract_name} - Details
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <p><strong>Items:</strong> {contract.items}</p>
                                            <p><strong>Owner:</strong> {contract.Legal_officer_name}</p>
                                            <p><strong>Warranty Start Date:</strong> {contract.warranty_start_date}</p>
                                            <p><strong>Warranty End Date:</strong> {contract.warranty_end_date}</p>
                                            <p><strong>Company Name:</strong> {contract.company_name}</p>
                                            <p><strong>Company Phone:</strong> {contract.company_phone}</p>
                                            <p><strong>Terms:</strong> {contract.contract_terms}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}