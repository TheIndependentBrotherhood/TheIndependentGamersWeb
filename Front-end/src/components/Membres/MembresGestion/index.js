import React, { useState } from 'react';

// components

import ListMembreGestion from './ListMembreGestion'
import AddMembre from './AddMembre'
import EditMembre from './EditMembre'
import Error404 from '../../Error404';


// ==== CSS ==== //

const MembresGestion = ({ 
  updateMembre,
  changeField,
  listMembres,
  isAdmin,
  token,
  fetchListMembres,
  deleteMembre,
 }) => {

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [membreSelect, setMembreSelect] = useState([]);

  const handleAdd = (evt) => {
    evt.preventDefault();
    setAdd(true);
  }

  const handleEdit = (membre, evt) => {
    evt.preventDefault();
    setEdit(true);
    setMembreSelect(membre)
    changeField(membre.id, "membresIdUpdate");
    changeField(membre.name, "membreNameUpdate");
    changeField(membre.role, "membreRoleUpdate");
    if(membre.isActive){
      changeField(1, "membresIsActiveUpdate");
    } else {
      changeField(0, "membresIsActiveUpdate");
    }
    
  }

  const handleBack = (evt) => {
    evt.preventDefault();
    setAdd(false);
    setEdit(false);
  }

  const hundleDeleteMembreId = (membre, evt) => {
    evt.preventDefault();
    changeField(membre.id, 'idMembreDelete')
  }

  const hundleDeleteMembre = (evt) => {
    evt.preventDefault();
    deleteMembre();
  }

  const isActiveOrNot = (isActive) =>{
    if(isActive){
      return '✅'
    }
    return '❌'
  }

  return(
    
    <main className="container membreGestion mt-5 mb-5">

      {!isAdmin && <Error404 />}

      {isAdmin && (<>

        {!add && !edit && (
          <ListMembreGestion 
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            listMembres={listMembres}
            hundleDeleteMembre={hundleDeleteMembre}
            hundleDeleteMembreId={hundleDeleteMembreId}
            isActiveOrNot={isActiveOrNot}
          />
        )}

        {add && (
          <AddMembre 
            handleBack={handleBack}
            token={token}
            fetchListMembres={fetchListMembres}
          />
        )}

        {edit && (
          <EditMembre 
            updateMembre={updateMembre}
            changeField={changeField}
            membreSelect={membreSelect}
            handleBack={handleBack}
          />
        )}

      </>)}
    
    </main>
  );
};

export default MembresGestion;