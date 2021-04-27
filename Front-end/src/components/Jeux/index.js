import React from 'react';

 // ==== CSS ==== //
import './jeux.scss';

const Jeux = ({ listJeux }) => {
    
    return(

        <main className="jeux">

            <div className="cards">

                {listJeux.map((Jeux) => ( 
                    <div key={Jeux.id} className="card">

                        <div className="card__image-holder">

                            <img className="card__image" src={`/images/jeux/${Jeux.image}.png`} alt="wave" />

                        </div>

                        <div className="card-title">

                            <h2>{Jeux.name}</h2>

                        </div>
                        <div className="card-title">

                            <a href="#" className="toggle-info btn">

                                <span className="left"></span>
                                
                                <span className="right"></span>

                            </a>

                        </div>

                        <div className="card-flap flap1">

                            <div className="card-description">

                                {Jeux.content}

                            </div>

                        </div>
                        
                    </div>
                ))}

            </div>

        </main>
    );
};

export default Jeux;
