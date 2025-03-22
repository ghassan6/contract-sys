import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import AdminContract from './AdminContract';
import { useAuth } from '../auth/auth';

const Dashboard = () => {

    const navigate = useNavigate();
    const auth = useAuth();
    const [showModal, setShowModal] = useState(false);
    const closeButtonRef = useRef(null);

    const [newCotractData, setNewContractData] = useState({
        contract_name: "",
        starting_date: new Date().toISOString().split('T')[0],
        expiration_date: "",
        signing_date: null,
        total_cost: "",
        items: "",
        contract_terms : "",
        Legal_officer_name: auth.user.name,
        warranty_start_date: "",
        warranty_end_date: "",
        company_name: "",
        address: "",
        company_phone: "",
        contract_file: "",
        employee_id: auth.user.id,
        status: "WAITING",
    });

    const updateNewContractData = (e) => {
        setNewContractData({ ...newCotractData, [e.target.name]: e.target.value });
    }

    const id = sessionStorage.getItem("user_id");


  
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        getContracts();
    }, []);

    function getContracts() {
        axios.get(`http://localhost/API/contract.php?admin_id=${auth.user.id}`).then(function (response) {
            setContracts(response.data);
        });
    }

    // this function for creating a new contract
    const createContract = (e) => { 
        e.preventDefault();
        console.log(newCotractData);
        axios.post("http://localhost/API/contract.php", newCotractData)
        .then((result) => {
            console.log("response" + result.data)
            
            if(closeButtonRef.current) {
                closeButtonRef.current.click();
            }
            getContracts();
            navigate('/dashboard');
        });
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <h5 className="card-title">
                                    Contact List{" "}
                                    <span className="text-muted fw-normal ms-2">{contracts.length}</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#createModal"
                            >
                                add new contract
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {contracts.map(contract => ( 
                             <AdminContract key={contract.contract_id} contract={contract} getContracts={getContracts}  /> )
                        )}
                    </div>
                </div>


                 

            </div>
                        
            <form  onSubmit={createContract}>
                <div
                className="modal fade"
                id="createModal"
                tabIndex={-1} // this is for the tab index which means the order of the tab when you press the tab key, FOR EXAMPLE if you have 3 elements and you want to press the tab key to go to the second element you should put the second element tabindex to 0 and the other elements tabindex to -1
                aria-labelledby="createModalLabel"
                aria-hidden="true"
                >
                <div className="modal-dialog">

                    <div className="modal-content">

                    <div className="modal-header">

                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add new Contract
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ref={closeButtonRef} 
                        />
                    </div>
                    <div className="modal-body">

                        <div className="form-group">
                        <label htmlFor="contractName">contract name:</label>
                        <input
                            type="text"
                            name="contract_name"
                            className="form-control"
                            id="contractName"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.contract_name}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="startingDate">starting date</label>
                        <input
                            type="date"
                            name="starting_date"
                            className="form-control"
                            id="startingDate"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.starting_date}
                            disabled

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="expirationDate">expiration date:</label>
                        <input
                            type="date"
                            name="expiration_date"
                            className="form-control"
                            id="expirationDate:"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.expiration_date}
                            min={newCotractData.starting_date}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="totalCost">total cost</label>
                        <input
                            type="number"
                            name="total_cost"
                            className="form-control"
                            id="totalCost"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.total_cost}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="contract_terms">contract terms</label>
                        <input
                            type="text"
                            name="contract_terms"
                            className="form-control"
                            id="contract_terms"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.contract_terms}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="items">items type</label>
                        <input
                            type="text"
                            name="items"
                            className="form-control"
                            id="items"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.items}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="LegalOfficerName">Legal officer name</label>
                        <input
                            type="text"
                            name="Legal_officer_name"
                            className="form-control"
                            id="LegalOfficerName"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.Legal_officer_name}
                            disabled

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="warranty_start_date">
                            warranty start date
                        </label>
                        <input
                            type="date"
                            name="warranty_start_date"
                            className="form-control"
                            id="warranty_start_date"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.warranty_start_date}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="warranty_start_date">warranty end date</label>
                        <input
                            type="date"
                            name="warranty_end_date"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.warranty_end_date}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="company_name">company name</label>
                        <input
                            type="text"
                            name="company_name"
                            className="form-control"
                            id="company_name"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.company_name}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="address">address</label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            id="address"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}

                            value={newCotractData.address}

                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="company_phone">company phone</label>
                        <input
                            type="text"
                            name="company_phone"
                            className="form-control"
                            id="company_phone"
                            aria-describedby="emailHelp"
                            onChange={updateNewContractData}
                            value={newCotractData.company_phone}

                        />
                        </div>

                        <input type="hidden" name="employee_id" value={id} />
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal" ref={close}
                        >
                        Close
                        </button>
                        <button type="submit" className="btn btn-primary"
                        >
                        Add
                        </button>

                    </div>
                    </div>
                </div>
                </div>
            </form>
        </>
    )
}

export default Dashboard