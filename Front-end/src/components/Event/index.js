import React from 'react';
import { NavLink, Link } from "react-router-dom";

 // ==== CSS ==== //

import './event.scss'

const Event = () => {

    return(
        <main className="event container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=aHJpZDJyMmVwdGFtZWFybWtjYXZuajczbXE0amxlamdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23F4511E&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0" width="100%" height="600" frameBorder="0" scrolling="no">
            </iframe>
        </main>
    );

}

export default Event;