import React, { useEffect, useRef } from "react";
import "../../styles/usercontracts.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/auth";
import SingleContract from "./SingleContract";

export default function UserContracts(props) {

  const navigate = useNavigate();
  const auth = useAuth();
  const close = useRef(null)

  const id = sessionStorage.getItem("user_id");

  const [contracts, setContracts] = useState([]);


  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value, employee_id: id }));
    console.log(inputs)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/API/contract.php", inputs)
      .then(function (response) {
        console.log(response.data);
        close.current.click()
        getContracts();
        navigate("/contracts");
      });
  };


  useEffect(() => {
    getContracts();
  }, []);

  function getContracts() {
    axios.get(`http://localhost/API/contract.php?user_id=${id}`).then( (response) => {
      const contractsData = Array.isArray(response.data) ? response.data : [];
      setContracts(contractsData);
    });
  }

  return (
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
        </div>
        <div className="row">

          {contracts.map((contract, key) => { return contract.status === "APPROVED" ? <SingleContract key={key} contract={contract} /> : null }
          )}
        </div>
      </div>



    </div>
  );
}
