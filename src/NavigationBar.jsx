import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavigationBarHeader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h class="navbar-brand" href="#">Demo</h>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <Link className="Link-text" to="/jobs">Job </Link>
                    <Link  className="Link-text" to="/inbox">Inbox</Link>
                    <Link className="Link-text"  to="/carrier">Calender</Link>
                    <Link  className="Link-text"  to="/calendar">Carrier Page</Link>
                    <Link  className="Link-text"  to="/reports">Reports</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavigationBarHeader;
