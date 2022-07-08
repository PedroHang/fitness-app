import React, { useState, useEffect} from 'react'
import {Link} from "react-router-dom";

function initialState() {
    return { user: '', password: '' };
}

const LoginForm = () => {
    const [values, setValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        })
    }

const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
}

useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).lenght === 0 && isSubmit){
        console.log(values);
    }
}, [formErrors])
const validate = (values1) =>{
    const errors = {}
    if (!values1.user){
        errors.user = "You need to enter your username"
    }

    if (!values1.password){
        errors.password = "You need to enter your password"
    }

    if(values1.user == "jonas@s2pro.fit" && values1.password == "123456"){
        alert("successfully logged in")
    } else{
        errors.generic = "Wrong email or password"
    }
    return errors;
}

    return (
        <>
            <section className="space-ptb">
                {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <ul className="nav nav-pills mb-3 nav-tabs nav-tabs-02 justify-content-center text-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Log in</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <form onSubmit={handleSubmit} className="form-row row mt-4 align-items-center">
                                        <div className="form-group col-sm-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                name="user"
                                                onChange={onChange}
                                                value={values.user} />  {/*USERNAME*/}
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <input
                                                type="Password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                onChange={onChange}
                                                value={values.password} /> {/*PASSWORD*/}
                                        </div>
                                        <div className="col-6 d-grid">
                                            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                                                <li className="me-1"><a className="text-dark"><b>{formErrors.user}</b></a></li>
                                                <li className="me-1"><a className="text-dark"><b>{formErrors.password}</b></a></li>
                                                <li className="me-1"><a className="text-dark"><b>{formErrors.generic}</b></a></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                <div className="login-social-media border ps-4 pe-4 pb-4 pt-0 rounded mt-5">
                                    <div className="mb-4 d-block text-center"><b className="bg-white ps-2 pe-2 mt-3 d-block">Login or Sign in with</b></div>
                                    <form className="row">
                                        <div className="col-sm-12">
                                            <a className="btn bg-facebook d-block mb-3 text-white" href="#"><span><i className="fab fa-facebook-f"></i>Login with Facebook</span></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm;
