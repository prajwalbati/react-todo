import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="card-body">
            <h4 className="card-title">Register</h4>
            <form>
                <div className="row form-group">
                    <label className="col-sm-4 control-label">Full Name *</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder='Your Full Name' required />
                    </div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-4 control-label">Email *</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" placeholder='Email Address' required />
                    </div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-4 control-label">Password *</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" placeholder='Password' required />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-sm-8 offset-sm-4">
                        <button className="btn btn-primary">Register User</button>
                        <span> OR </span>
                        <Link to="/login">Already have an Account?</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;