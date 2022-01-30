import React, { useState, useEffect } from 'react';

// Components
import Input from './input';
import { validate } from './validate';

// toast
import { ToastContainer} from 'react-toastify';
import { notify } from "./toast" ;
import 'react-toastify/dist/ReactToastify.css';

// css
import Styles from "./signUp.module.css"

// React-router-dom
import { Link } from "react-router-dom"



const SignUp = () => {

// States
    const [data, setData] = useState({
        Email:"",
        Password:"",
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})



    useEffect(() => {
        setErrors(validate(data))
    },[data])



    const changeHandler = e => {
            setData({...data, [e.target.name]: e.target.value})
    }

    const ShowErr = e => {
             setTouched({...touched, [e.target.name]: true})        
    }

    const Submited = e => {
        e.preventDefault()
        if (Object.keys(errors).length) {
              setTouched({
                Email:true,
                Password:true,
            })
            notify("Invalid Data!", "error")

        }else{
            notify("You Signed In Successfully", "success")
        }
    }


// jsx
    return (
        <div className={Styles.SignUp}>
            <h1 className={Styles.header}>Login</h1>
            <form className={Styles.formField} onSubmit={Submited}>
                <Input type="email" name="Email" value={data.Email} onChange={changeHandler} Touched={ShowErr} T={touched.Email} Err={errors.Email}/>
                <span>{touched.Email && errors.Email}</span>
                <Input type="password" name="Password" value={data.Password} onChange={changeHandler} Touched={ShowErr} T={touched.Password} Err={errors.Password}/>
                <span>{touched.Password && errors.Password}</span>
                <div className={Styles.BT}>
                    <Link to="/signup">SignUp</Link>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;