import React from 'react';
import { NavLink, Link } from "react-router-dom";

 // ==== CSS ==== //

import './event.scss'

const Event = () => {

    document.title = `Evenements - The Independent Gamers`;

    return(
        <main className="event container">

            <h1 className="event-title">Calendrier des évenements</h1>

            <p className="event-text">Retrouvez ici le calendrier qui référence tous les évènements de la team. Pour participer à un évènement, rendez-vous sur le channel "Event" de Discord et ajoutez-vous.</p>

            <iframe className="event-calandar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=aHJpZDJyMmVwdGFtZWFybWtjYXZuajczbXE0amxlamdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23F4511E&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0" width="100%" height="600" frameBorder="0" scrolling="no">
            </iframe>
        </main>
    );

}

export default Event;