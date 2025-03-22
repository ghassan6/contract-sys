import React from "react";
import { Link, NavLink , useNavigate} from "react-router";
import { useState } from "react";
import axios from "axios";

const Register = () => {


  const [formErrors, setFormErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setFormErrors(validate(data));
    
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));



  navigate('/login');
    
      axios.post("http://localhost/API/reg.php", data)
      .then((result) => {
          console.log(result)
        });
    
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }

    const pregex = /^[0-9]*$/;

    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!pregex.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 7) {
      errors.password = "Password must be 8 characters or more";
    } else if (values.password.length > 12) {
      errors.password = "Password must be 12 characters or less";
    }
    // if(values.phone===true && values.email===true && values.password ===true ){
    //   navigate('/');
    // }
    return errors;
  };

  return (
    <div className="col-6" style={{ height: "100%" }}>
      <ul
        className="nav nav-pills nav-justified mb-3 mt-5 "
        id="ex1"
        role="tablist"
      >
        <li className="nav-item me-2" role="presentation">
          <NavLink
            className="nav-link bg-primary btn-lg text-white"
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item ms-2" role="presentation">
          <NavLink
            className="nav-link btn-lg bg-primary text-white"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
      <form onSubmit={submitForm}>
      <h6>Name</h6>
        <div class="form-floating mb-3">
          <input
            id="name"
            type="text"
            className="form-control"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={data.name}
            
          />  
        </div>
        <p className="errors">{formErrors.name}</p>
        <h6>Email</h6>
        <div class="form-floating mb-3">
          <input
            id="email"
            type="email"
            className="form-control @error('email') is-invalid @enderror"
            name="email"
            onChange={handleChange}
            value={data.email}
            autoComplete="email"
            placeholder="Email address"
          />
          
        </div>
        <p className="errors">{formErrors.email}</p>
<h6>phone</h6>
        <div class="form-floating mb-3">
          <input 
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            placeholder="phone"
            onChange={handleChange}
          />
        
        </div>
 
<h6>Password</h6>
        <div class="form-floating mb-3 mt-3">
          <input
            id="password"
            type="password"
            className="form-control @error('password') is-invalid @enderror"
            name="password"
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
            autoComplete="new-password"
          />
         
        </div>
        <p className="errors">{formErrors.password}</p>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block mb-4"
          >
            Register
          </button>
        </div>
        <div className="text-center">
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
