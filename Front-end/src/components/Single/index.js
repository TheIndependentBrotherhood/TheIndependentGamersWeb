import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getProjetBySlug } from '../../utils';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './single.scss';

const Home = ({ isLogged, modifProjet, changeField, listProjet, _id, titre, description, status, imageUrl, link, isActive }) => {

  const { slug } = useParams();

  const projet = getProjetBySlug(listProjet, slug);

  const initValue = () => {
    changeField(projet._id, "_id")
    changeField(projet.titre, "titre");
    changeField(projet.description, "description");
    changeField(projet.status, "status");
    changeField(projet.imageUrl, "imageUrl");
    changeField(projet.link, "link");
    changeField(projet.isActive, "isActive")
  }

  const [imageFile, useimageFile] = useState(null);

  const handleFile = (evt) => {
    const file = evt.target.files[0];
    // console.log(file);
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
    if(imageFile){
      const thingData = new FormData();
      thingData.append('projet', JSON.stringify(projet));
      thingData.append('titre', titre);
      thingData.append('description', description);
      thingData.append('status', status);
      thingData.append('link', link);
      thingData.append('isActive', isActive);
      thingData.append('image', imageFile);
      api.put(`http://localhost:3000/api/projet/${_id}`, thingData)
      //api.put(`https://api.guillaume-sanchez.fr/api/projet/${_id}`, thingData)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.warn(error);
      }); 
    }
    else{
      const thingData = new FormData();
      thingData.append('projet', JSON.stringify(projet));
      thingData.append('titre', titre);
      thingData.append('description', description);
      thingData.append('status', status);
      thingData.append('link', link);
      thingData.append('isActive', isActive);
      api.put(`http://localhost:3000/api/projet/${_id}`, thingData)
//       api.put(`https://api.guillaume-sanchez.fr/api/projet/${_id}`, thingData)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.warn(error);
      }); 
    }
  }

  const handleSubmit = (evt) => {

    evt.preventDefault();
    createNewThingWithFile(imageFile);
  };

  useEffect(() => {
    initValue()
    changeField(true, "isActive");
  }, []);

  return (
    <main className="Single">
      {isLogged && (
        <div className="Single-content container">
          <form onSubmit={handleSubmit} action="" method="put">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Titre</label>
              <input onChange={handleTitle} value={titre} type="text" className="form-control" id="exampleFormControlInput1" placeholder="titre" />
            </div>
            <div className="form-group">
              <img src={imageUrl} alt=""/>
              <input className="btn btn-success" type="file" name="filename" data-attribute-name="photoPortrait" onChange={handleFile} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Description</label>
              <textarea onChange={handleDescription} value={description} type="text" className="form-control" id="exampleFormControlInput1" placeholder="description" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Status</label>
              <input onChange={handleStatus} value={status} type="text" className="form-control" id="exampleFormControlInput1" placeholder="status" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Link</label>
              <input onChange={handleLink} value={link} type="text" className="form-control" id="exampleFormControlInput1" placeholder="link" />
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
      )}
      {!isLogged && (
          <Redirect push to="/login" />
      )}
    </main>
  );
}

export default Home;
