import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from './Account';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5500/')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);
    function handleSubmit(event) {
        event.preventDefault();
        if (!password) {
            setPasswordError(true);
            return;
        }
        axios.post('http://localhost:5500/create', { email, password })
            .then(res => {
                console.log(res);
                setUserData(res.data);
                setLoginSuccess(true);
                navigate('/Account');
            }).catch(err => {
                console.log(err);
                setLoginSuccess(false);
            });
    }
    if (userData) {
        return <Account userData={userData} />;
      }
    return (
        <section className='container'>
            <div className='login-container'>
                <div className='form-container'>
                    <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className='illustration' />
                    <h1 className='opacity'>LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" name="email"
                            onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
                        <input type="password" placeholder="PASSWORD" name="password"
                            onChange={e => setPassword(e.target.value)} />
                        {passwordError && ( // Conditionally render the password error alert
                            <div className='error-alert'>
                                Please enter a password.
                            </div>
                        )}
                        <button className='opacity submit'>SUBMIT</button>
                    </form>
                    {loginSuccess && ( // Conditionally render the success alert
                        <div className='success-alert'>
                            Valid connection! You will receive notifications about Tunisian professionnel league and Tunisian cup news.
                        </div>
                    )}
                    <div className='register-forget opacity'>
                        <a href="">REGISTER</a>
                        <a href="">FORGOT PASSWORD</a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Login;