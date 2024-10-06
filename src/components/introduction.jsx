import React from 'react';
import Typed from 'react-typed';
import '../styles/introduction.css';

const Introduction = () => {
    return (
        <div className="intro-container">
            <div className="avatar">
                <img src="../assets/avatar.svg" alt="Avatar" className='avatar-img' />
            </div>

            <h1>
                Hi, I'm a{' '}
                <span className="dynamic-text">
                    <Typed
                        strings={['coder', 'student', 'NBA fan', 'chess lover']}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </span>
            </h1>

            <p className='intro-subtitle'>
                Full-time student with a passion for web development.
            </p>

            <div className="intro-buttons">
                <button className='intro-btn'>About Me</button>
                <button className='intro-btn'>Projects</button>
            </div>
        </div>
    );
};

export default Introduction;