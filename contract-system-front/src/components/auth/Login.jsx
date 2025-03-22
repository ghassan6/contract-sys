
import React, { useState } from "react";
import { Link, NavLink,  useNavigate } from 'react-router'
import axios from 'axios';

import { useAuth } from "../auth/auth";


const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost/API/log.php', data)
            

            .then((result) => {

                if (result.data.length == 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data[0].role === 'user') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('user_id', result.data[0].id);

                    auth.login({
                        email: result.data[0].email,
                        name: result.data[0].name,
                        role: result.data[0].role,
                        id: result.data[0].id,
                    });


                    navigate('/', { replace: true });

                } else if (result.data.length !== 0 && result.data[0].role === 'admin') {
                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('user_id', result.data[0].id);
                    auth.login({
                        email: result.data[0].email,
                        name: result.data[0].name,
                        role: result.data[0].role,
                        id: result.data[0].id,
                    });
                    navigate('/dashboard', { replace: true });

                } else {

                    navigate('/Register');
                }
            })




    }




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


        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }
        return errors;
    };

    return (
        <>
            <div className='col-6' style={{ height: "100%" }}>
                <ul className="nav nav-pills nav-justified mb-3 mt-5 " id="ex1" role="tablist">
                    <li className="nav-item me-2" role="presentation">
                        <NavLink className="nav-link bg-primary btn-lg text-white" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item ms-2" role="presentation">
                        <NavLink className="nav-link bg-primary btn-lg text-white" to="/register">Register</NavLink>
                    </li>
                </ul>

                <div className="tab-content" >
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">

                        <form className='mt-5' onSubmit={submitForm}>
                            <div class="mb-3">
                                <label htmlFor="floatingInput">Email address</label>
                                <input id="floatingInput" type="email"
                                    className="form-control form-control-lg" name="email" required
                                    onChange={handleChange}
                                    value={data.email}
                                    autocomplete="email" />
                            </div>
                            <p className="errors">{formErrors.email}</p>

                            <label htmlFor="floatingPassword">Password</label>
                            <br />
                            <div class="mb-3">
                                <input id="floatingPassword" type="password"
                                    className="form-control form-control-lg"
                                    name="password" required
                                    onChange={handleChange}
                                    value={data.password}
                                    autocomplete="new-password" />

                            </div>
                            <p className="errors">{formErrors.password}</p>


                            <div className='d-grid'>
                                <button type="submit" className="btn-lg btn btn-primary btn-block mb-4" >Sign in</button>
                            </div>
                            <div className="text-center">
                                <p>Not a member? <Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </>

    )
}

export default Login