import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useAuth } from "../auth/auth";
import { useNavigate } from "react-router";

export default function ContractsList() {
    const [contracts, setContracts] = useState([]);
    const [showSignContract, setShowSignContract] = useState(false);
    const navigate = useNavigate();
    const closeButton = useRef(null);
    const auth = useAuth();
    const [currentContract, setCurrentContract] = useState({
        contract_id: "",
        employee_id: "",
        contract_name: "",
        starting_date: "",
        expiration_date: "",
        cost: 0,
        items: "",
        contract_terms: "",
        owner: "",
        warranty_start_date: "",
        warranty_end_date: "",
        company_name: "",
        address: "",
        company_phone: "",
        contract_file: "",
        status: "",
        signed_by: "",
    });

    const fetchCurrentContract = (contract_id) => {
        axios.get(`http://localhost/API/contract.php?contract_id=${contract_id}`)
            .then((response) => { 
                setCurrentContract(response.data[0]);
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
        const newCost = currentContract.cost * ((new Date(currentContract.expiration_date) - new Date(currentContract.starting_date)) / (1000 * 60 * 60 * 24));
        const updatedContract = {
            ...currentContract,
            cost: newCost,
            signed_by: user_id
        };
        
        axios.post("http://localhost/API/contract.php", updatedContract)
        .then((response) => {
            console.log(response.data);
            closeButton.current.click();
            fetchContracts();
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const createSignedContract = (event) => {
        event.preventDefault();
        console.log('Signed Contract');
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

                                        <strong> Cost:</strong> {contract.cost}<br />
                                        <strong>Legal Officer:</strong> {contract.owner}<br />
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
                                            // onClick={() => {handleSignContract(contract.contract_id)}}
                                            data-bs-toggle="modal"
                                            data-bs-target={`#signModal${contract.contract_id}`}
                                            onClick={() => {fetchCurrentContract(contract.contract_id)}}
                                        >
                                            Sign Contract
                                        </button>
                                    )}


                                </div>
                            </div>

                            {/* Modal for details */}
                            <div
                                className="modal fade"
                                id={`contractModal${contract.contract_id}`}
                                tabIndex="-1"
                                aria-labelledby={`contractModalLabel${contract.contract_id}`}
                                aria-hidden="true"
                            >
                                <div className="modal-dialog text-dark">
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
                                            <p><strong>Owner:</strong> {contract.owner}</p>
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

                            {/* Modal for sign */}
                            <div
                                className="modal fade"
                                id={`signModal${contract.contract_id}`}
                                tabIndex="-1"
                                aria-labelledby={`contractModalLabel${contract.contract_id}`}
                                aria-hidden="true"
                            >
                                <div className="modal-dialog text-dark">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`contractModalLabel${contract.contract_id}`}>
                                                {contract.contract_name} - Sign
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body text-dark">
                                            <p>Are you sure you want to sign this contract?</p>
                                            {/* add input for strating data, expiration date and disabled input for tatal cost */}
                                            <form onSubmit={createSignedContract}>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Starting Date"
                                                    value={contract.starting_date}
                                                    onChange={(event) => {setCurrentContract({...currentContract, starting_date: event.target.value})}}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    required
                                                />
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Expiration Date"
                                                    onChange={(event) => {setCurrentContract({...currentContract, expiration_date: event.target.value})}}
                                                    value={contract.expiration_date}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Total Cost"
                                                    disabled
                                                    value={contract.cost * ((new Date(currentContract.expiration_date) - new Date(currentContract.starting_date)) / (1000 * 60 * 60 * 24))}
                                                />
                                            </form>

                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => {handleSignContract(contract.contract_id)}}
                                            >
                                                Sign
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                                ref={closeButton}
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