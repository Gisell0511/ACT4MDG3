import React from "react";
import PropTypes from "prop-types";


const WelcomePage = ({ onStart }) => {
    return (
        <div className="welcome-page">
            <h1>Bienvenido a GISETASK</h1>
            <p>Gestiona tus tareas de manera eficiente 
                <br></br>con nuestra aplicación.</p>
            <button onClick={onStart} className="start-button">Empezar</button>
        </div>
    );
};

WelcomePage.propTypes = {
    onStart: PropTypes.func.isRequired,
};

export default WelcomePage;
