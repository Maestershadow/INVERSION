import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../providers/authProvider';
import Spinner from './common/Spinner';

type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
};

function isOver18(dateString: string) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInMillis = currentDate.getTime() - inputDate.getTime();
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const differenceInYears = differenceInMillis / millisecondsInYear;
    return differenceInYears > 10;
}

const validate = (values: FormValues) => {
    const errors: FormValues = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        dateOfBirth: ''
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

    if (!values.confirmPassword) {
        errors.confirmPassword = "Please confirm password";
    }
    else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password doesn't match";
    }

    if (!values.firstName) {
        errors.firstName = 'Enter first name';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Enter last name';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Please select a valid date"
    }
    else if (!isOver18(values.dateOfBirth)) {
        errors.dateOfBirth = "Must be over 10 years"
    }



    return Object.values(errors).every(value => value.trim().length === 0) ? {} : errors;
};

export default function SignupSection() {
    const navigate = useNavigate();
    const auth = useAuthentication();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
        },
        validate,
        onSubmit: async (values) => {
            await auth.signup(values, () => {
                navigate("/", { replace: true })
            })
        },
    });
    return (
        <form className='auth-section' onSubmit={formik.handleSubmit}>
            <h1 className="bold uppercase fs-md mg-bl-400">Sign Up</h1>
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
                    <div className="mg-bl-200 col gp-100">
                        <p>Minimum of 8 Characters</p>
                        <p>Uppercase, lowercase letters and one number</p>
                        <p>At least 1 special character</p>
                    </div>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword} />
                    {<div className='error-section'>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}</div>}

                </div>
                <div className="row gp-200">
                    <div className="wd-p-400">
                        <label htmlFor='firstName'>First Name*</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {<div className='error-section'>{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}</div>}

                    </div>

                    <div className="wd-p-400">
                        <label htmlFor='lastName'>Last Name*</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {<div className='error-section'>{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}</div>}

                    </div>

                </div>

                <div >
                    <label htmlFor='dateOfBirth'>Date of Birth(MM/DD/YYYY)*</label>
                    <input type="date" name="dateOfBirth" id="dateOfBirth"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth}
                    />
                    {<div className='error-section'>{formik.touched.dateOfBirth && formik.errors.dateOfBirth ? formik.errors.dateOfBirth : ''}</div>}
                </div>

            </div>

            {
              formik.isSubmitting &&  <div className='center ht-200'>
                    <Spinner />
                </div> 
            }

            <button type="submit" className="ht-200 bg-black text-white">Sign Up</button>
            <div className="center">
                <div className="row gp-200">
                    <p>Already a member?</p>
                    <button onClick={(e) => {
                        e.preventDefault();
                        navigate("/auth", { replace: true })
                    }} className="bold fs-xxsm underline">SIGN IN</button>
                </div>
            </div>
            <p className="text-align-c">By signing up for emails, you agree to the Inverse <a className='underline' href="#">Terms of Use</a> and <a className='underline' href="#">Privacy Policy</a> </p>

        </form>


    );
}