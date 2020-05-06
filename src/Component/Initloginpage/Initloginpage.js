import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navigationmenu from '../Navigationmenu/Navigationmenu';
import Header from '../Header/Header';
import './Initloginpage.css';
import Footer from '../Footer/Footer';


class Initloginpage extends React.Component {
    authenticated = false;

    render() {
        return (
            <div>
                <Header />
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={values => {
                        let errors = {};
                        if (values.email === "") {
                            errors.email = "Email address is required";
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = "Invalid email address!";
                        }
                        if (values.password === "") {
                            errors.password = "Password is required";
                        } else if (values.password.length < 6) {
                            errors.password = "Password must have at least 6 characters";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.authenticated = true;
                        values.email = "";
                        values.password = "";
                        setSubmitting(false);
                    }}
                >
                    {(touched, errors, isSubmitting, ) => (

                        <Form className='formlayout'>
                            {this.authenticated ? null : (
                                <div>
                                    <div className='h33'>
                                        <h3> Are you ready for your Holidays!</h3>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="email"></label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="Generic"
                                            placeholder='Email address'
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className={`form-control errormessage ${
                                                touched.email && errors.email ? "is-invalid" : ""
                                                }`}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"></label>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder='Password'
                                            className="Generic"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            className={`form-control errormessage ${
                                                touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                        />
                                    </div>
                                    <button
                                        type="submit">
                                        Sign in
                                </button>
                                    <br />
                                </div>
                            )}
                        </Form>
                    )}
                </Formik>
                <Footer />
            </div>
        )
    }
}

export default Initloginpage;   
