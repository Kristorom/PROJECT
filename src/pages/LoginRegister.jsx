import React, { useState } from 'react';
import '../styles/LoginRegister.css'; 

const LoginRegister = () => {
    const [activeTab, setActiveTab] = useState('login');

    const showForm = (form) => {
        setActiveTab(form);
    };

    return (
        <div className="forms">
            <div className="container">
                <div className="tabs">
                    <button
                        className={activeTab === 'login' ? 'tab active' : 'tab'}
                        onClick={() => showForm('login')}
                    >
                        Log In
                    </button>
                    <button
                        className={activeTab === 'register' ? 'tab active' : 'tab'}
                        onClick={() => showForm('register')}
                    >
                        Sign Up
                    </button>
                </div>

                <div className={activeTab === 'login' ? 'form active' : 'form'}>
                    <form action="/login" method="POST">
                        <input type="email" placeholder="Enter email" required />
                        <input type="password" placeholder="Enter password" required />
                        <button type="submit">Log In</button>
                    </form>
                </div>

                <div className={activeTab === 'register' ? 'form active' : 'form'}>
                    <form action="/register" method="POST" encType="multipart/form-data">
                        <input type="text" placeholder="Enter your name" required />
                        <input type="email" placeholder="Your email" required />
                        <input type="password" placeholder="Enter password" required />
                        <input type="password" placeholder="Confirm password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
