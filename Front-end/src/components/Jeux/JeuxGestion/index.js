import React, { useState } from 'react';

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
  isAdmin,
  token,
  fetchListJeux,
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

  return(
    
    <main className="container membreGestion mt-5 mb-5">

      {!isAdmin && <Error404 />}

      {isAdmin && (<>

        {!add && !edit && (
          <ListJeuGestion 
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            listJeux={listJeux}
            hundleDeleteJeu={hundleDeleteJeu}
            hundleDeleteJeuId={hundleDeleteJeuId}
          />
        )}

        {add && (
          <AddJeu 
            handleBack={handleBack}
            token={token}
            fetchListJeux={fetchListJeux}
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