import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

import sendRequest from '../../utils/fetchRequest';
import Errors from '../Errors';

const Register = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (e) => {
        let updatedUser = { ...newUser, [e.target.name]: e.target.value };
        setNewUser(updatedUser);
    };

    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let response = await sendRequest('/api/auth/register', 'POST', false, JSON.stringify(newUser));
            let resJson = await response.json();
            setErrors([]);
            setLoading(false);
            if (!response.ok) {
                if (response.status === 422) {
                    setErrors(resJson);
                }
            } else {
                navigate('/activate');
            }
        } catch (error) {
            console.error(error);
            setErrors([{ msg: 'SomeThing went wrong.' }]);
            setLoading(false);
        }
    };

    return (
        <div className="card-body">
            <h4 className="card-title">Register</h4>
            <form onSubmit={registerUser}>
                <Errors errors={errors}></Errors>
                <div className="row form-group">
                    <label className="col-sm-4 control-label">Full Name *</label>
                    <div className="col-sm-8">
                        <input name="fullName" type="text" className="form-control" placeholder='Your Full Name' value={newUser.fullName} onChange={onChangeHandler} required />
                    </div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-4 control-label">Email *</label>
                    <div className="col-sm-8">
                        <input name="email" type="email" className="form-control" placeholder='Email Address' value={newUser.email} onChange={onChangeHandler} required />
                    </div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-4 control-label">Password *</label>
                    <div className="col-sm-8">
                        <input name="password" type="password" className="form-control" placeholder='Password' value={newUser.password} onChange={onChangeHandler} required />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-sm-8 offset-sm-4">
                        <button type="submit" className="btn btn-primary" disabled={loading?'disabled':''}>{ loading ? 'Registering User' : 'Register User' }</button>
                        <span> OR </span>
                        <Link to="/login">Already have an Account?</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;