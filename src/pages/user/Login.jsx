import React from 'react';

const Login = () => {
    return (
        <div className='auth-page'>
            <div className="container">
                <div>
                    <div className='auth-content-area'>
                        <h1 className='text-3xl lg:text-4xl font-bold text-center'>Welcome Back 👋</h1>
                        <div className='login-buttons mt-5 mb-5'>
                            <button>
                                <img src="/google.svg" />
                                <span className="text-[16px] font-medium">Log in with Google</span>
                            </button>
                            <button>
                                <img src="/facebook.svg" />
                                <span className="text-[16px] font-medium">Log in with Facebook</span>
                            </button>
                            <button>
                                <img src="/twitter.svg" />
                                <span className="text-[16px] font-medium">Log in with X(Twitter)</span>
                            </button>
                        </div>
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