import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../Context/context';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { routePath } from '../../App';
function Login() {
  const { state, dispatch } = useContext(GlobalContext);
  const [cradentioalError, setCradentioalError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const handleLogin = (e) => {
    e.preventDefault();
    const payload = { email, password };
    
    if (email !== "" && password !== "") {
      axios.post(`${routePath}api/login`, payload)
        .then((json) => {
          setCradentioalError(json.data.message); // Update the error message state
  
          if (json.data.token) {
            Cookies.set('token', json.data.token);
            dispatch({
              type: "USER_LOGIN",
              token: json.data.token
            });
  
            // Display success SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'You have successfully logged in.',
            });
          } else {
            // Display a generic error message
          console.log("else block")
          }
        })
        .catch((error) => {
          setCradentioalError("An error occurred. Please try again.");
          console.log("Catch error", error.message);
        });
    } else {
      setCradentioalError("Please enter email and password");
    }
  };
  



  return (
    <>
      <div className="container mt-5">
        <div className="row gx-5">
          <div className="col-md-6  image-col">
          </div>
          <div className="col-md-6  registration-form">
            {/* Registration Form */}
            <div className=" ">
              <div className="card-body">
                <h2 className="text-center mb-4 text-white">LOG IN</h2>
                <form id="registrationForm" noValidate="" onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className='text-white' htmlFor="email ">Email</label>
                    <input
                      type="email"
                      className={`form-control`}
                      id="email"
                      name="email"
                      required="true"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <div className="invalid-feedback ">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="form-group">
                    <label className='text-white' htmlFor="password ">Password</label>
                    <input
                      type="password"
                      className={`form-control`}
                      id="password"
                      name="password"
                      required="true"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </div>
                  <p className="text-danger">{cradentioalError}</p>
                  <div className="text-center">
                    <button type="submit" className="btn signup-btn btn-block mt-3 text-white">
                      Log In
                    </button>
                    

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
