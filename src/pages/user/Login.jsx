import React from 'react';

const Login = () => {
    return (
        <div className='auth-page'>
            <div className="container">
                <div>
                    <div className='auth-content-area'>
                        <h1 className='text-3xl lg:text-4xl font-bold text-center'>Welcome Back 👋</h1>
                        <div>Providers</div>
                        <div className='or-login-with-email'>
                            <p>Or, log in with your email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;