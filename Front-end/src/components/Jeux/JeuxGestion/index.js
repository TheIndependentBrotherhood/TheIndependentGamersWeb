import React, { useState, useEffect } from 'react';

// components

import ListJeuGestion from './ListJeuGestion'
import AddJeu from './AddJeu'
import EditJeu from './EditJeu'
import Error404 from '../../Error404';


// ==== CSS ==== //

const JeuxGestion = ({ 
  updateJeu,
  changeField,
  listJeux,
  listAllJeux,
  isAdmin,
  token,
  fetchListJeux,
  fetchListAllJeux,
  deleteJeu,
 }) => {

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [jeuSelect, setJeuSelect] = useState([]);

  const handleAdd = (evt) => {
    evt.preventDefault();
    setAdd(true);
  }

  const handleEdit = (jeu, evt) => {
    evt.preventDefault();
    setEdit(true);
    setJeuSelect(jeu)
    changeField(jeu.id, "jeuIdUpdate");
    changeField(jeu.name, "jeuNameUpdate");
    changeField(jeu.description, "jeuDescriptionUpdate");
    if(jeu.isActive){
      changeField(1, "jeuIsActiveUpdate");
    } else {
      changeField(0, "jeuIsActiveUpdate");
    }
    
  }

  const handleBack = (evt) => {
    evt.preventDefault();
    setAdd(false);
    setEdit(false);
  }

  const hundleDeleteJeuId = (jeu, evt) => {
    evt.preventDefault();
    changeField(jeu.id, 'idJeuDelete')
  }

  const hundleDeleteJeu = (evt) => {
    evt.preventDefault();
    deleteJeu();
  }

  const isActiveOrNot = (isActive) =>{
    if(isActive){
      return '✅'
    }
    return '❌'
  }

  useEffect(() => {
    fetchListAllJeux();
  }, []);

  return(
    
    <main className="container membreGestion mt-5 mb-5">

      {!isAdmin && <Error404 />}

      {isAdmin && (<>

        {!add && !edit && (
          <ListJeuGestion 
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            listJeux={listAllJeux}
            hundleDeleteJeu={hundleDeleteJeu}
            hundleDeleteJeuId={hundleDeleteJeuId}
            isActiveOrNot={isActiveOrNot}
          />
        )}

        {add && (
          <AddJeu 
            handleBack={handleBack}
            token={token}
            fetchListJeux={fetchListJeux}
            fetchListAllJeux={fetchListAllJeux}
          />
        )}

        {edit && (
          <EditJeu 
            updateJeu={updateJeu}
            changeField={changeField}
            jeuSelect={jeuSelect}
            handleBack={handleBack}
          />
        )}

      </>)}
    
    </main>
  );
};

export default JeuxGestion;