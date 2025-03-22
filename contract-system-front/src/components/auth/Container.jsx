import React from 'react'


export default function Container(props) {
    
    return (
        <div className='container'>
            <div className='row mt-5 md-5'>
                <div className='col-6' >
                    <img src="img/employee.jpg" alt="employee" style={{ height: "100%" }} className="img-fluid" />
                </div>

                {props.children}
            </div>

        </div>
    )
}