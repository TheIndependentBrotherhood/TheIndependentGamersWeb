import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import './single.scss';
import axios from 'axios';

const Home = ( { isLogged, changeField, titre, description, status, link, isActive, token } ) => {

  const [imageFile, useimageFile] = useState(null);

  const handleFile = (evt) => {
    const file = evt.target.files[0];
    // const localImageUrl = window.URL.createObjectURL(file);
    // console.log(localImageUrl);
    useimageFile(file);
  };

  const handleTitle = (evt) => {
    changeField(evt.target.value, "titre");
  };

  const handleDescription = (evt) => {
    changeField(evt.target.value, "description");
  };

  const handleStatus = (evt) => {
    changeField(evt.target.value, "status");
  };

  const handleLink = (evt) => {
    changeField(evt.target.value, "link");
  };

  const handleIsActive = (evt) => {
    if(evt.target.value === 'Activé'){
      changeField(true, "isActive");
    }
    else if(evt.target.value === 'Désactivé'){
      changeField(false, "isActive");
    }
  };

  const api = axios.create({
    headers: {
      'Authorization': `bearer ${localStorage.getItem('token')}`,
    },
  });

  const createNewThingWithFile = (imageFile) => {
    // console.log(imageFile);
    // console.log(projet);
    const thingData = new FormData();
    thingData.append('titre', titre);
    thingData.append('description', description);
    thingData.append('status', status);
    thingData.append('link', link);
    thingData.append('isActive', isActive);
    thingData.append('image', imageFile);
    api.post('https://localhost:3000/api/projet', thingData)
    //api.post('https://api.guillaume-sanchez.fr/api/projet', thingData)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.warn(error);
      }); 
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createNewThingWithFile(imageFile);
  };

  useEffect(() => {
    changeField(true, "isActive");
  }, []);

  return (
    <main className="Single">
      <div className="Single-content container">
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Titre</label>
            <input onChange={handleTitle} type="text" className="form-control" id="exampleFormControlInput1" placeholder="titre" />
          </div>
          <div className="form-group">
            <img src="" alt=""/>
            <input className="btn btn-success" type="file" name="filename" data-attribute-name="photoPortrait" onChange={handleFile} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Description</label>
            <textarea onChange={handleDescription} type="text" className="form-control" id="exampleFormControlInput1" placeholder="description" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Status</label>
            <input onChange={handleStatus} type="text" className="form-control" id="exampleFormControlInput1" placeholder="status" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Link</label>
            <input onChange={handleLink} type="text" className="form-control" id="exampleFormControlInput1" placeholder="link" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
            <select onChange={handleIsActive} className="form-control">
              <option>Activé</option>
              <option>Désactivé</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </main>
  );
}

export default Home;
