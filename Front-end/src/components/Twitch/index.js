import React, { useState, useEffect } from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'

 // ==== CSS ==== //

import './twitch.scss'

// ==== Twitch API ==== //

import api from './api';

// == Composant

const Twitch = () => {

    const [nkStream, setNkStream] = useState([]);
    const [todiun, setTodiun] = useState([]);
    const [seb, setSeb] = useState([]);
    const [despe, setDespe] = useState([]);

    const [nameLive, setNameLive] = useState("NkStreamTV");

    const handleClickNkStreamTV = (evt) => {
        setNameLive("NkStreamTV")
    };

    const handleClickTodiun = (evt) => {
        setNameLive("Todiun")
    };

    const handleClicksh0otertv = (evt) => {
        setNameLive("COLONELPGM")
    };

    const handleClickDespe = (evt) => {
        setNameLive("Desperados_Unions")
    };

  const fetchNkStream = () => {
    api.get('https://api.twitch.tv/helix/users?login=NkStreamTV')
      .then((response) => {
        // console.log(response)
        setNkStream(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

  const fetchTodiun = () => {
    api.get('https://api.twitch.tv/helix/users?login=Todiun')
      .then((response) => {
        //console.log(response)
        setTodiun(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

  const fetchSeb = () => {
    api.get('https://api.twitch.tv/helix/users?login=COLONELPGM')
      .then((response) => {
        //console.log(response)
        setSeb(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

  const fetchDespe = () => {
    api.get('https://api.twitch.tv/helix/users?login=Desperados_Unions')
      .then((response) => {
        //console.log(response)
        setDespe(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

  


  useEffect(() => {
    fetchNkStream();
    fetchTodiun();
    fetchSeb();
    fetchDespe();
  }, []);

  return (

    <main className="twitch">

        <div className="twitch-container">

          {nkStream.map((nk) => (
            <div key={nk.id} onClick={handleClickNkStreamTV} className="text-center choise">
                <img className="text-center rounded-circle img--membre" src={nk.profile_image_url} alt="" />
                <p className="text-card-twitch">{nk.display_name}</p>
            </div>
          ))}

          {todiun.map((to) => (
            <div key={to.id}onClick={handleClickTodiun} className="text-center choise">
                <img className="text-center rounded-circle img--membre" src={to.profile_image_url} alt="" />
                <p className="text-card-twitch">{to.display_name}</p>
            </div>
          ))}

          {despe.map((de) => (
            <div key={de.id} onClick={handleClickDespe} className="text-center choise">
                <img className="text-center rounded-circle img--membre" src={de.profile_image_url} alt="" />
                <p className="text-card-twitch">{de.display_name}</p>
            </div>
          ))}

          {seb.map((se) => (
            <div key={se.id} onClick={handleClicksh0otertv} className="text-center choise">
                <img className="text-center rounded-circle img--membre" src={se.profile_image_url} alt="" />
                <p className="text-card-twitch">{se.display_name}</p>
            </div>
          ))}
        </div>

        <div className="containerDecale">
            <ReactTwitchEmbedVideo height="754" width="100%" channel={nameLive}/>
        </div>
        
    </main>
  );
};

export default Twitch;