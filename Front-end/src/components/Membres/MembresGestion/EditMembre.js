import React from 'react';

const EditMembre = ({ updateMembre, changeField, membreSelect, handleBack }) => {

    const handleNameUpdate = (evt) => {
        evt.preventDefault();
        changeField( evt.target.value, "membreNameUpdate");
    }

    const handleRoleUpdate = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "membreRoleUpdate");
    }

    const handleIsActive = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "membresIsActiveUpdate"); 
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateMembre();
        handleBack(evt);
    }

    return (
        <div className="container my-4">
                <button onClick={handleBack} className="btn btn-success float-right">Retour</button>
                <h2>Modifier un Membre</h2>
              
                <form onSubmit={handleSubmit} action="" className="mt-5">
      
                    <input defaultValue={membreSelect.id} type="hidden" />
      
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input onChange={handleNameUpdate} defaultValue={membreSelect.name} name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Role</label>
                        <select onClick={handleRoleUpdate} defaultValue={membreSelect.role} className="custom-select">
                            <option value="membre">membre</option>
                            <option value="staff">staff</option>
                            <option value="admin">admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Image / Pas disponible pour le moment</label>
                        <div className="custom-file mb-4">
                            <input disabled="disabled" type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" for="inputGroupFile01">Choisir une image</label>
                        </div>
                        <img className="rounded-circle d-block mx-auto" src={membreSelect.picture} style={{height: '150px'}} alt={`photo de ${membreSelect.name}`} />
                        <small id="pictureHelpBlock" className="form-text text-muted">
                            URL relative d'une image (jpg, gif, svg ou png) fournie sur <a href={membreSelect.picture} target="_blank">cette page</a>
                        </small>
                   </div>
                   <div className="form-group">
                        <label htmlFor="subtitle">Visible ou non visible</label>
                        <select onClick={handleIsActive} className="custom-select">
                            <option defaultValue={membreSelect.isActive}></option>
                            <option value="1">Activé</option>
                            <option value="0">Désctivé</option>
                        </select>
                    </div>
                   <button type="submit" className="btn btn-primary btn-block mt-5">Valider</button>
                </form>
          </div>
    )
}

export default EditMembre;