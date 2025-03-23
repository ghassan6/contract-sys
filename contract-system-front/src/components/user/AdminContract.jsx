import axios from 'axios';
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import { useAuth } from '../auth/auth';

const AdminContract = ({ contract, getContracts }) => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const [showDetails, setShowDetails] = useState(false);
    const handleCloseDetails = () => setShowDetails(false);
    const handleShowDetails = () => setShowDetails(true);


    const date = new Date();
    const contractDate = new Date(contract.exprtion_date);
    const diffTime = (contractDate - date);

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value, contract_id: contract.contract_id }));
        console.log(inputs)
    };

    const updateStatus = (e) => { 
        e.preventDefault();
        console.log(inputs.status);
        axios.put(`http://localhost/API/contract.php?status=${inputs.status}&contract_id=${inputs.contract_id}`)
        .then(function (response) {
            console.log(response.data);
            handleCloseEdit();
            getContracts();
        })
    }





    let badge = '';
    if (contract.status === "APPROVED") {
        badge = 'badge-soft-success';
    } else if (contract.status === "WAITING" && !(diffTime < 0)) {
        badge = 'badge-soft-warning';
    } else if (contract.status === "EXPIRED" || diffTime < 0) {
        badge = 'badge-soft-info';
    } else {
        badge = 'badge-soft-danger';
    }


    const delete_Contract = (contract_id) => {

        axios.delete(`http://localhost/API/contract.php?contract_id=${contract_id}`)
        .then(function (response) {
            // handleContracts();
            console.log(response.data);
            handleCloseDelete()
            getContracts();
            navigate('/dashboard'); 
        })

    }

    return (
        // <>
        //     <div className="col-xl-3 col-sm-6">
        //         <div className="card">
        //             <div className="card-body">
        //                 <div className="dropdown float-end">

        //                 </div>
        //                 <div className="d-flex align-items-center">
        //                     <div className="flex-1 ms-3">
        //                         <h5 className="font-size-16 mb-1">
        //                             <a href="#" className="text-dark">
        //                                 {contract.contract_name}
        //                             </a>
        //                         </h5>
        //                         <span className={`badge ${badge} mb-0`}>
        //                             {diffTime < 0 ? "Expired" : contract.status}
        //                         </span>
        //                     </div>
        //                 </div>
        //                 <div className="mt-3 pt-1">
        //                     <p className="text-muted mb-0">
        //                         <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary" />{" "}
        //                         {contract.company_phone}
        //                     </p>
        //                     <p className="text-muted mb-0 mt-2">
        //                         <i className="mdi mdi-home font-size-15 align-middle pe-2 text-primary" />{" "}
        //                         {contract.company_name}
        //                     </p>
        //                     <p className="text-muted mb-0 mt-2">
        //                         <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary" />{" "}
        //                         {contract.address}
        //                     </p>
        //                 </div>

        //                 {/* this section is for the two buttons */}
        //                 <div className="d-flex gap-2 pt-4">
                            
        //                     <Button variant="primary" 
        //                     onClick={handleShowEdit}
        //                     disabled={contract.status != "PENDING"}
        //                     >
        //                         <i className="bx bx-user me-1" /> Edit Contract 
        //                     </Button>



        //                     <Button variant="info" onClick={handleShowDetails}>
        //                         <i className="bx bx-message-square-dots me-1" /> Contract Details
        //                     </Button>

        //                     <Button variant="danger" onClick={handleShowDelete} >
        //                         <i className="bx bx-message-square-dots me-1" /> Delete Contract
        //                     </Button>
        //                     </div>
        //             </div>
        //         </div>

        //     </div>

        //                 {/* this section is for the modal */}
        //     <Modal show={showDelete} onHide={handleCloseDelete}>
        //         <Modal.Header closeButton>
        //             <Modal.Title> Delete {contract.contract_name}</Modal.Title>
        //         </Modal.Header>
        //         <form >
        //             <Modal.Body>
        //                 <p>Are you sure you want to delete this contract?</p>

        //             </Modal.Body>
        //             <Modal.Footer>
        //                 <Button variant="danger" onClick={()=> delete_Contract(contract.contract_id)}>
        //                     Delete
        //                 </Button>
        //                 <Button variant="secondary" onClick={handleCloseDelete}>
        //                     Close
        //                 </Button>

        //             </Modal.Footer>
        //         </form>
        //     </Modal>

        //     {/* edit the contract modal */}
        //     <Modal show={showEdit} onHide={handleCloseEdit} >
        //         <Modal.Header closeButton>
        //             <Modal.Title> {contract.contract_name}</Modal.Title>
        //         </Modal.Header>
        //         <form onSubmit={updateStatus}  >
        //             <Modal.Body >
        //                 <div className="form-group mb-3">
        //                     <label htmlFor="exampleInputEmail1">contract status:</label>

        //                     <select onChange={handleChange} name="status" className="form-control" aria-label="Default select example" style={{ backgroundColor: "white" }}>
        //                         <option selected disabled>Change the status</option>
        //                         <option value="APPROVED">APPROVED</option>
        //                         <option value="REJECTED">REJECTED</option>
        //                     </select>
        //                 </div>
                        
        //             </Modal.Body>
        //             <Modal.Footer>
        //             <Button variant="secondary" onClick={handleCloseEdit}>
        //                 Close
        //             </Button>

        //             <Button variant="primary" type="submit" onClick={() => updateStatus}>
        //                 Save Changes
        //             </Button>

        //         </Modal.Footer>
        //         </form>
        //     </Modal>

        //     {/* contract details */}
        //     <Modal show={showDetails} onHide={handleCloseDetails} >
        //         <Modal.Header closeButton>
        //             <Modal.Title>{contract.contract_name}</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body >
        //             <p>Contract Signing date: {contract.signing_date}</p>
        //             <p>Contract Exprtion date: {contract.expiration_date}</p>
        //             <p>Contract Total cost: ${contract.total_cost}</p>
        //             <p>Items: {contract.items}</p>
        //             <p>Legal officer name: {contract.Legal_officer_name}</p>
        //             <p>Warranty start date: {contract.warranty_start_date}</p>
        //             <p>Warranty end date: {contract.warranty_end_date}</p>
        //             <p>Address: {contract.address}</p>
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button variant="secondary" onClick={handleCloseDetails}>
        //                 Close
        //             </Button>

        //         </Modal.Footer>
        //     </Modal>


        // </>
        <>
             <tr key={contract.contract_id}>
                                        <td>{contract.contract_name}</td>
                                        <td>{contract.starting_date}</td>
                                        <td>{contract.expiration_date}</td>
                                        <td>{contract.total_cost } </td>
                                        <td>{contract.items}</td>
                                        <td>
                                            <span className={`badge ${badge} mb-0`}>
                                                     {diffTime < 0 ? "Expired" : contract.status}
                                            </span>
                                        </td>
                                        <td className='d-flex gap-2'>
                                            <Button variant="" onClick={handleShowDelete}
                                                disabled={contract.status != "PENDING"}
                                            >
                                                <i className="bx bx-trash me-1 bx-md" style={{ color: '#fc0101' }}  ></i>
                                            </Button>

                                            <Button variant=""
                                                onClick={handleShowEdit}
                                                disabled={contract.status != "PENDING"}
                                            >
                                                <i className='bx bx-edit-alt bx-md' style={{color: '#04c412'}}  ></i>
                                            </Button>


                                                <Button variant="" onClick={handleShowDetails}>
                                                <i class='bx bxs-info-circle bx-md' style={{color: '#cfcf03'}}  ></i>
                                                </Button>

                                        </td>
                                    </tr>


                                     {/* contract details */}
                    <Modal show={showDetails} onHide={handleCloseDetails} className='text-dark' >
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
                            <p>Terms: {contract.contract_terms}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDetails}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                     {/* edit the contract modal */}
                <Modal show={showEdit} onHide={handleCloseEdit} >
                    <Modal.Header closeButton>
                        <Modal.Title> {contract.contract_name}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={updateStatus}  >
                        <Modal.Body >
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">contract status:</label>
                                <select onChange={handleChange} name="status" className="form-control" aria-label="Default select example" style={{ backgroundColor: "white" }}>
                                    <option selected disabled>Change the status</option>
                                    <option value="APPROVED">APPROVED</option>
                                    <option value="REJECTED">REJECTED</option>
                                </select>
                            </div>
                        
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEdit}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={() => updateStatus}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                    </form>
                </Modal>

             <Modal show={showDelete} onHide={handleCloseDelete}>
                 <Modal.Header closeButton>
                     <Modal.Title> Delete {contract.contract_name}</Modal.Title>
                 </Modal.Header>
                 <form >
                     <Modal.Body>
                         <p>Are you sure you want to delete this contract?</p>
                     </Modal.Body>
                     <Modal.Footer>
                         <Button variant="danger" onClick={()=> delete_Contract(contract.contract_id)}>
                             Delete
                         </Button>
                         <Button variant="secondary" onClick={handleCloseDelete}>
                             Close
                         </Button>
                     </Modal.Footer>
                 </form>
             </Modal>
        </>



    )
}

export default AdminContract