import React from 'react';
const WelcomePage = ({ onStart }) => {
    return (
        <div className="welcome-page">
            <div className="welcome-content">
                <h1>Bienvenido a GISTASK</h1>
                <p>Tu herramienta definitiva para gestionar tus tareas y proyectos de manera eficiente.</p>
                <button className="start-button" onClick={onStart}>Comenzar</button>
            </div>
        </div>
    );
};

export default WelcomePage;
