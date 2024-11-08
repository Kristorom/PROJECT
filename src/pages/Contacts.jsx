import React, { useState } from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
  
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="contacts" id="contacts">
            <div className="content">
                <h1 className="heading">Contact us</h1>
                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                placeholder="Your name..." 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                placeholder="Your Email..." 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                required 
                                placeholder="Your question" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="btn">Leave request</button>
                    </form>
                   
                </div>
            </div>
        </section>
    );
};

export default Contacts;
