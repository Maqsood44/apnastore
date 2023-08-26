import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { routePath } from '../../App';
function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [full_name, setFull_name] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const Signup = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      email,
      full_name,
      password,
      address
    };

    try {
      axios.post(`${routePath}api/register`, payload)
      .then((json) => {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: json.data.message
        });

        setUsername('');
        setEmail('');
        setFull_name('');
        setPassword('');
        setAddress('');
        setError('');

        setTimeout(() => {
               // Redirect to login page
               window.location.href = '/login'; }, 2000);
      })

    

    }
     catch (error) {
      setError('An error occurred during registration. Please try again.');
    }
  };

  if (redirectToLogin) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row gx-5">
          <div className="col-md-6  image-col"></div>
          <div className="col-md-6  registration-form">
            <div className=" ">
              <div className="card-body">
                <h2 className="text-center mb-4 text-white">REGISTER</h2>
                <form id="registrationForm" noValidate="" onSubmit={Signup}>
                  <div className="form-group">
                    <label className="text-white" htmlFor="email">
                      Username
                    </label>
                    <input
                      type="text"
                      className={`form-control`}
                      name="username"
                      required={true}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white" htmlFor="email">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control`}
                      name="Full Name"
                      required={true}
                      value={full_name}
                      onChange={(e) => setFull_name(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control`}
                      id="email"
                      name="email"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  </div>

                  <div className="form-group">
                    <label className="text-white" htmlFor="email">
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control`}
                      name="password"
                      required={true}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white" htmlFor="email">
                      Shiping Address
                    </label>
                    <input
                      type="text"
                      className={`form-control`}
                      name="address"
                      required={true}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <p className="text-danger">{error}</p>
                  <div className="text-center">
                    <button type="submit" className="btn signup-btn btn-block mt-3 text-white">
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
