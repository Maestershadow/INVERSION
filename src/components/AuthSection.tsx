import { LocalUser, useAuthentication } from "../providers/authProvider";

export default function AuthSection() {

    const authentication = useAuthentication();


    
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const user: LocalUser = {email: email, password:password};

    authentication.signup(user,()=>{console.log("Hello")})
    // auth.signin(username, () => {
    //   // Send them back to the page they tried to visit when they were
    //   // redirected to the login page. Use { replace: true } so we don't create
    //   // another entry in the history stack for the login page.  This means that
    //   // when they get to the protected page and click the back button, they
    //   // won't end up back on the login page, which is also really nice for the
    //   // user experience.
    //   navigate(from, { replace: true });
    // });
  }


    return <form  onSubmit={handleSubmit}>

        <div className="auth-section">

            <h1 className="bold uppercase fs-md mg-bl-400">Sign Up</h1>
            <div className="col gp-500">
                <div>
                    <p>Email</p>
                    <input type="email" name="email" />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password"/>
                </div>
            </div>

            <div className="row-sb" >
                <div className="row gp-100">
                    <input type="checkbox" />
                    <p>Remember </p>
                </div>
                <button className="fs-xxsm bold underline">FORGOT YOUR PASSWORD?</button>
            </div>

            <button type="submit"  className="ht-200 bg-black text-white">Sign In</button>
            <div className="center">
                <div className="row gp-200">
                    <p>Not a member?</p>
                    <button className="bold fs-xxsm underline">SIGN UP</button>
                </div>
            </div>
            <p>By signing up for emails, you agree to the Inverse <a href="#">Termns of Use</a> and <a href="#">Privacy Policy</a> </p>

        </div> </form>



}