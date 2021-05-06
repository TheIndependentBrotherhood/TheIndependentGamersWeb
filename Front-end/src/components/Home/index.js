import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink }from 'react-router-dom';


 // ==== CSS ==== //

import './home.scss'

import logo from '../../assets/images/logo.png';
import merde from '../../assets/images/Sans-titre-1.png';
import merde2 from '../../assets/images/Sans-titre-2.png';
import merde3 from '../../assets/images/Sans-titre-3.png';
import decort from '../../assets/images/decort.png';
import decortReverse from '../../assets/images/decort-reverse.png';
import wantYou from '../../assets/images/want-you.png';
import wantYouReverse from '../../assets/images/want-you-reverse.png';
import twitchLol from '../../assets/images/twitch-lol.png';
import twitchLolReverse from '../../assets/images/twitch-lol-reverse.png';

 const properties = {
	duration: 6000,
	transitionDuration: 1000,
	infinite: true,
	indicators: false,
	arrows: false,
  }

 const Home = ( {listJeux, listMembres} ) => {

	document.title = `The Independent Gamers`;

    return (

		<>
			<Slide {...properties}>
				<div className="each-slide">
					<div className="slide-content" style={{'backgroundImage': `url(${merde})`}}>
						<div className="slide-card-welcom">
							<div className="slide-welcom-decort-reverse">
								<img src={decortReverse} alt=""/>
							</div>
							<div className="slide-card-welcom-head">
								<div className="slide-card-welcom-header">
									<img className="slide-card-welcom-logo" src={logo} alt=""/>
									<h1 className="slide-card-welcom-title">The Independent Gamers</h1>
								</div>
								<div className="slide-card-welcom-text">
									<span>Bienvenue sur notre site</span>
									<p>Vous trouverez sur ce site toute les informations concernant les "The Independent Gamers"</p>
								</div>
							</div>
							<div className="slide-welcom-decort">
								<img src={decort} alt=""/>
							</div>
						</div>
					</div>
				</div>
				<div className="each-slide">
				<div className="slide-content" style={{'backgroundImage': `url(${merde2})`}}>
						<div className="slide-card-welcom" >
							<div className="slide-welcom-decort-reverse">
								<img src={wantYouReverse} alt=""/>
							</div>
							<div className="slide-card-welcom-head">
								<div className="slide-card-welcom-header">
									<img className="slide-card-welcom-logo" src={logo} alt=""/>
									<h1 className="slide-card-welcom-title">The Independent Gamers <span>Recrute !</span></h1>
								</div>
								<div className="slide-card-welcom-text">
									<p>Envie de rejoindre notre team multigaming ?</p>
									<p>Rien de plus simple <NavLink to="/recrutement">Postulez ici</NavLink></p>
								</div>
							</div>
							<div className="slide-welcom-decort">
								<img src={wantYou} alt=""/>
							</div>
						</div>
					</div>
				</div>
				<div className="each-slide">
					<div className="slide-content" style={{'backgroundImage': `url(${merde3})`}}>
						<div className="slide-card-welcom" >
							<div className="slide-welcom-decort-reverse">
								<img src={twitchLolReverse} alt=""/>
							</div>
							<div className="slide-card-welcom-head">
								<div className="slide-card-welcom-header">
									<img className="slide-card-welcom-logo" src={logo} alt=""/>
									<h1 className="slide-card-welcom-title"><span>Les Streamers</span> des The Independent Gamers </h1>
								</div>
								<div className="slide-card-welcom-text">
									<p>La team compte 4 streamers actifs</p>
									<p><NavLink to="/twitch">Rejoignez les communautés de nos streamers !</NavLink></p>
								</div>
							</div>
							<div className="slide-welcom-decort">
								<img src={twitchLol} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</Slide>
		</>
    )
}

export default Home;