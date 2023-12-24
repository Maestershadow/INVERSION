import { useFormik } from 'formik';
import {
    useNavigate
  } from "react-router-dom";


type FormValues = {
    email: string;
    password: string;
};


const validate = (values: FormValues) => {
    const errors: FormValues = {
        email: '',
        password: '',
    };

    if (!values.email) {
        errors.email = 'Please enter email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = "Please enter password";
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
        errors.password = "Please enter valid password";
    }

   

    return Object.values(errors).every(value => value.trim().length === 0) ? {} : errors;
};

export default function SigninSection() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className='auth-section' onSubmit={formik.handleSubmit}>
            <h1 className="bold uppercase fs-md mg-bl-400">Sign IN</h1>
            <div className="col gp-100">
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {<div className='error-section'>{formik.touched.email && formik.errors.email ? formik.errors.email : ''}</div>}
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {<div className='error-section'>{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</div>}
                </div>
            </div>

            <button type="submit" className="ht-200 bg-black text-white">Sign In</button>
            <div className="center">
                <div className="row gp-200">
                    <p>Not a member?</p>
                    <button className="bold fs-xxsm underline" onClick={()=>{
                        navigate("/auth/signup",{replace: true})
                    }}>SIGN UP</button>
                </div>
            </div>
        </form>
    );
}