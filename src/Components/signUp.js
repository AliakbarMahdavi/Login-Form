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
        Name:"",
        Email:"",
        Password:"",
        ConfirmPassword:"",
        isAccepted:false
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})



    useEffect(() => {
        setErrors(validate(data, "signup"))
    },[data])



    const changeHandler = e => {
        if(e.target.name === "isAccepted") {
            setData({...data,isAccepted: e.target.checked})
           
        }else{
            setData({...data, [e.target.name]: e.target.value})
        }
    }

    const ShowErr = e => {
             setTouched({...touched, [e.target.name]: true})
        
    }

    const Submited = e => {
        e.preventDefault()
        if (Object.keys(errors).length) {
              setTouched({
                Name:true,
                Email:true,
                Password:true,
                ConfirmPassword:true,
                isAccepted:true
            })
            notify("Invalid Data!", "error")

        }else{
            notify("You Signed In Successfully", "success")
        }
    }


// jsx
    return (
        <div className={Styles.SignUp}>
            <h1 className={Styles.header}>Sign Up</h1>
            <form className={Styles.formField} onSubmit={Submited}>
                <Input type="text" name="Name" value={data.Name} onChange={changeHandler} Touched={ShowErr} T={touched.Name} Err={errors.Name}/>
                <span>{touched.Name && errors.Name}</span>
                <Input type="email" name="Email" value={data.Email} onChange={changeHandler} Touched={ShowErr} T={touched.Email} Err={errors.Email}/>
                <span>{touched.Email && errors.Email}</span>
                <Input type="password" name="Password" value={data.Password} onChange={changeHandler} Touched={ShowErr} T={touched.Password} Err={errors.Password}/>
                <span>{touched.Password && errors.Password}</span>
                <Input type="password" name="ConfirmPassword" value={data.ConfirmPassword} onChange={changeHandler} Touched={ShowErr} T={touched.ConfirmPassword} Err={errors.ConfirmPassword}/>
                <span>{touched.ConfirmPassword && errors.ConfirmPassword}</span>
                <div className={Styles.CheckBox}>
                    <label>I Accept terms of privacy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}/>
                    <span>{touched.isAccepted && errors.isAccepted}</span>
                </div>
                <div className={Styles.BT}>
                    <Link to="/login">Login</Link>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;