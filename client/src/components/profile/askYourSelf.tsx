import React, {useState} from 'react';
import {withFormik, Form, Field, FormikState, Formik} from 'formik';
import './assets/css/askYourSelf.css';
import { handlePostLengthLabel, getUserId, setUserTagName } from './controller/Profile';
import authService from '../auth/authService';

const AskPostForm = ({
     values,
     errors,
     isSubmitting
}: FormikState<any>) => {
    const [textLength, setTextLength] = useState(values.textLength);
    return <div className='card askPost'>
        <div className='card-header'><span className='askSelf text-danger'>Ask {
            setUserTagName()
        }
        </span>
        </div>
        <div className='card-body'>
            <Form>
                <div className='form-group'>
                    <Field placeholder='What, when, why... ask'
                           component='textarea'
                           name='askPost'
                           className={`ask-text form-control ${errors.askPost ? "is-invalid": ""}`}
                           maxLength={values.textLength}
                           onInput={handlePostLengthLabel(setTextLength, values.textLength)}
                    />
                    <div className='invalid-feedback'>{errors.askPost}</div>
                </div>
                <div className='form-group form-submit'>
                    <label>{textLength}</label>
                    <button className='btn btn-danger' disabled={isSubmitting}>Ask</button>
                    <div className='clearfix'> </div>
                </div>
            </Form>
        </div>
    </div>
};

const AskPost = withFormik({
    mapPropsToValues({ askPost, textLength }: any) {
        return {
            askPost: askPost || '',
            textLength: textLength || 300
        }
    },
    handleSubmit(values, { setSubmitting, setFieldError, resetForm }) {
        setSubmitting(true);
        let canSubmit = true ;
        if(!values.askPost){
            canSubmit = false;
            setFieldError("askPost", "fill the post body");
            setSubmitting(false);
        }

        if(!canSubmit) return;

        authService.post("ask-post", {
            text: values.askPost,
            author: getUserId()
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setSubmitting(false);
                alert("your post has been published");
                resetForm();
            }).catch((err) => {
                setSubmitting(false);
        });

        // setTimeout(() => {
        //     setSubmitting(false);
        // }, 2000)
    },
})(AskPostForm);

export default AskPost;