import React from 'react';
import {withFormik, Form, Field, FormikState} from 'formik';
import { Redirect } from 'react-router-dom';
import './assets/css/register.css';
import {CenterLayout} from "../../layouts/layout";
import {YearOptionListProps} from "./types/register";
import {Link} from "react-router-dom";
import authService from './authService';
import { register } from "../../app/actions/profile";
import { getUserTagName } from '../profile/controller/Profile'

const DaysOptionList = () => {
    let days: Array<string | number> = ["Day"];
    for(let day = 1; day <= 31; day++){
        days.push(day);
    }
    return <>
        {
            days.map((dayItem) =>  <option key={dayItem} value={dayItem === "Year"? "none": dayItem}>{dayItem}</option>)
        }
    </>
}

const MonthOptionList = () => {
    let months: Array<string> =  ["Month", "January", "February", "March",
        "April", "May", "June", "July", "August", "September", "October",
        "November", "December"];
    return <>
        {
            months.map((monthItem) => <option key={monthItem} value={monthItem === "Month"? "none": monthItem}>{monthItem}</option>)
        }
    </>
}

const YearOptionList = ({be, end}: YearOptionListProps) => {
    let years: Array<string | number> = ["Year"] ;
    for(let year = end; year >= be; year--){
        years.push(year);
    }
    return <>
        {
            years.map((yearItem) => <option key={yearItem} value={yearItem === "Year"? "none": yearItem}>{yearItem}</option>)
        }
    </>
}

const RegisterForm = ({
    values,
    errors,
    isSubmitting
}: FormikState<any>) => (
    <CenterLayout>
    <div className='register-from-main'>
        <CenterLayout>
        <Form className='register-from'>
            <div className='row'>
                <h3>Register</h3>
                <p>Already have an account? <Link to='/auth/login'>Log in</Link></p>
            </div>
            <div className='row'>
                <label>E-mail</label>
                <Field name='email' type='email' placeholder='E-mail' value={values.email} className={`form-control ${errors.email? 'is-invalid': ''}`}/>
            </div>
            <label className='row'>Birthday</label>
            <div className='row'>
                <Field name='birthdayDay' component='select' className={`form-control col ${errors.birthdayDay? 'is-invalid': ''}`}>
                    <DaysOptionList />
                </Field>
                <Field name='birthdayMonth' component='select' value={values.birthdayMonth}  className={`form-control col mx-2 ${errors.birthdayMonth? 'is-invalid': ''}`}>
                    <MonthOptionList />
                </Field>
                <Field name='birthdayYear' component='select' value={values.birthdayYear}  className={`form-control col ${errors.birthdayYear? 'is-invalid': ''}`}>
                    <YearOptionList be={1980} end={2015}/>
                </Field>
            </div>
            <div className='row'>
                  <button className='btn btn-danger col mt-3' disabled={isSubmitting}>Register</button>
            </div>
            {errors.success && <Redirect to={`/${getUserTagName()}`} />}
        </Form>
        </CenterLayout>
    </div>
    </CenterLayout>
);

const RegisterFormApp = withFormik({
    mapPropsToValues({ email, birthdayDay, birthdayMonth, birthdayYear}: any){
        return {
            email: email || '',
            birthdayDay: birthdayDay || '',
            birthdayMonth: birthdayMonth || '',
            birthdayYear: birthdayYear || ''
        }
    },
    handleSubmit(values, { setFieldError, setSubmitting, resetForm }){
        setSubmitting(false);
        const valuesKeys = Object.keys(values);
        let canSubmit: Boolean = true ;
        valuesKeys.filter((key) => {
            if(!values[key] || values[key] === "none"){
                setFieldError(key, "error");
                canSubmit = false ;
            }
        });

        if(!canSubmit) return;

        setSubmitting(true);

        //request Register

        authService.post('register', {
            email: values.email
        }).then((res) => res.json())
            .then( data => {
                console.log(data);
                register(data.user);
                setSubmitting(false);
                localStorage.setItem("user", JSON.stringify(data.user));
                resetForm();
                setFieldError("success", "yup");
            }).catch(err => {
                setSubmitting(false);
                localStorage.removeItem("user");
        })


        setTimeout(() => {

        }, 3000);

    }
})(RegisterForm);

export default RegisterFormApp;

