import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field, withFormik, FormikState } from "formik";
import * as Yup from 'yup';
import './assets/css/login.css';
import Footer from "../footer/footer";
import { CenterLayout } from "../../layouts/layout";
import { LoginBodyProps } from "./types/login";
import { login } from "./controller/login";
import LoginModal from "./Login-from-modal";
import authService from './authService';

const LoginBody = ({ logInPopUp }: LoginBodyProps) => {
    return (<section className='Login'>
        <CenterLayout>
            <div className='Login-form mt-5'>
                <h2 className=''>askFm</h2>
                <p className='mt-4'>Curious? Just ask!<br/>
                    Openly or anonymously.</p>
                <div className='row'>
                    <button className='btn w-100 my-2'><Link to='/auth/register'>Sign up</Link></button>
                 </div>
                <div className='row'>
                    <button className='btn w-100 login-btn' onClick={ login }>login</button>
                </div>
            </div>
            <LoginModal LoginFormApp={ LoginFormApp } logInPopUp={ logInPopUp }/>
        </CenterLayout>
        {/*<Footer login={ true }/>*/}
    </section>)
}

const loginForm = ({ errors, touched, isSubmitting }: FormikState<any>) => (
    <CenterLayout>
        <div className='login-form'>
            <Form className='form-group'>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type='email' name='email' placeholder='Enter your email' className='form-control'/>
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type='password' name='password' placeholder='Enter your password' className='form-control mt-2'/>
                </div>
                {errors.userNotFound && <p>{ errors.userNotFound }</p>}
                <button disabled={isSubmitting} className='btn btn-success form-login-btn'>Submit</button>
            </Form>
        </div>
    </CenterLayout>
)

const LoginFormApp = withFormik({
    mapPropsToValues({email, password}: any){
        return {
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(10).required()
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }){
        console.log(values);
        setSubmitting(true);
        authService.post("login", {
            email: values.email,
            password: values.password
        }).then((res: any) => res.json())
            .then((data:any) => {
                console.log(data);
            setSubmitting(false);
            resetForm();
        }).catch((err: any) => {
            setErrors(err);
        });
    }
})(loginForm);

const mapPropsToState = (state: any) => {
    return {
        logInPopUp: state.Login.logInPopUp,
    }
}

export default connect(mapPropsToState)(LoginBody);