import MSLLogo from '../assets/Logo.png';
import '../index.css';
import { useState } from 'react';
import { professorLogIn } from '../data/repository';
import { professorIcon } from '../assets/Icons';

const ProfessorLoginForm = () => {
    
    // userRole is used to determine whether the user is a student or professor
    let userRole = "";

    // state to hold credentials
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    // state to hold error messages
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
    });

    // logic to handle input change, update credentials state on change
    const handleInputChange = (event) => {
        
      const { name, value } = event.target;
      setCredentials({ ...credentials, [name]: value });

      // all fields are required, if any is empty, display error message
      if (value === "") {
        setErrorMessages({ ...errorMessages, [name]: "*This field is required*" })
      } else {
        setErrorMessages({ ...errorMessages, [name]: "" })
      }
    };

    // logic to handle login
    const handleLogin = (event) => {
        event.preventDefault();

        // login logic
        if (credentials.email !== "" && credentials.password !== "") {
          console.log(credentials)
            professorLogIn(credentials)
            .then((response) => {
              console.log(response)
                // if the user exists, store user details in local storage and redirect to dashboard
                if (response !== null) {
                    // remove password field before storing in local storage
                    delete response.password
                    localStorage.setItem('user', JSON.stringify(response))
                    localStorage.setItem('userRole', userRole)
                    window.location.href = "/home";
                }
                // if the user does not exist, display error message
                else {
                    setErrorMessages({ ...errorMessages, email: "*Incorrect email or password*" })
                }
            })
        }
    }



    // get the user's role from local storage if it exists, else set it to Professor
    if (localStorage.getItem('userRole') !== null) {
        userRole = localStorage.getItem('userRole');
    }
    else {
        userRole = "Professor";
    }

    return (
         <div className="signup-form">
              <div className="form-box">
                <img
                  className="form-logo"
                  src={MSLLogo}
                  alt="Logo"
                />

                <section className="form-container">
                  <form action="#" className="form">
                    <div className="input-box">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" placeholder="Enter your email" name="email" onChange={handleInputChange} />
                      <div className='text-danger'>{errorMessages.email}</div>
                    </div>

                    <div className="input-box">
                      <label htmlFor="Password">Password</label>
                      <input type="password" id="Password" placeholder="Enter your password" name="password" onChange={handleInputChange} />
                      <div className='text-danger'>{errorMessages.password}</div>
                    </div>

                    <div className="professor-signup">
                    <p><a href="/signup" className="login-link">Don't have an account? Sign up</a></p>
                    </div>

                    <div className="form-login">
                      <label className="remember-me">
                        <input type="checkbox" />
                        <span className="checkbox-label-text">Remember Me</span>
                      </label>
                      <p><a href="/signup" className="login-link">Forgot your password?</a></p>
                    </div>

                    <button className="signup-button" onClick={handleLogin}>LOG IN</button>
                  </form>
                </section>
              </div>
            </div>
    )

}

export default ProfessorLoginForm;