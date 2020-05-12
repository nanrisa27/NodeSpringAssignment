import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center'}}>
              <span className="brain"><img src="/brain-solid.svg" className="brainpic"/></span>
                </div>
                <h1>MasterMinds</h1>
                <div className="play-button-container">
                    <ul>
                        <li>
                            <Link className="play-button" to="/play/quiz">Play</Link>
                        </li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Log in</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>
                </div>
            </section>
        </div>
    </Fragment>
    
    );


export default Home;