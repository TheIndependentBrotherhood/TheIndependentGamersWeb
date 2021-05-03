import React from 'react';

const EditJeu = ({ updateJeu, changeField, jeuSelect, handleBack }) => {

    const handleNameUpdate = (evt) => {
        evt.preventDefault();
        changeField( evt.target.value, "jeuNameUpdate");
    }

    const handleDescriptionUpdate = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "jeuDescriptionUpdate");
    }

    const handleIsActive = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "jeuIsActiveUpdate"); 
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateJeu();
        handleBack(evt);
    }

    return (
        <div className="container my-4">
                <button onClick={handleBack} className="btn btn-success float-right">Retour</button>
                <h2>Modifier un Jeux</h2>
              
                <form onSubmit={handleSubmit} action="" className="mt-5">
      
                    <input defaultValue={jeuSelect.id} type="hidden" />
      
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input onChange={handleNameUpdate} defaultValue={jeuSelect.name} name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Description</label>
                        <input onChange={handleDescriptionUpdate} defaultValue={jeuSelect.description} name="description" type="text" className="form-control" id="name" placeholder="Description du Jeu" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Image / Pas disponible pour le moment</label>
                        <div className="custom-file mb-4">
                            <input disabled="disabled" type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" for="inputGroupFile01">Choisir une image</label>
                        </div>
                        <img className="rounded-circle d-block mx-auto" src={jeuSelect.picture} style={{height: '150px'}} alt={`photo de ${jeuSelect.name}`} />
                        <small id="pictureHelpBlock" className="form-text text-muted">
                            URL relative d'une image (jpg, gif, svg ou png) fournie sur <a href={jeuSelect.picture} target="_blank">cette page</a>
                        </small>
                   </div>
                   <div className="form-group">
                        <label htmlFor="subtitle">Visible ou non visible</label>
                        <select onClick={handleIsActive} defaultValue={jeuSelect.isActive} className="custom-select">
                            <option value="1">Activé</option>
                            <option value="0">Désctivé</option>
                        </select>
                    </div>
                   <button type="submit" className="btn btn-primary btn-block mt-5">Valider</button>
                </form>
          </div>
    )
}

export default EditJeu;