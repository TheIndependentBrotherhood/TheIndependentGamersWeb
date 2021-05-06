import React from 'react';

const EditMembre = ({ updatePost, changeField, postSelect, handleBack }) => {

    const handleTitleUpdate = (evt) => {
        evt.preventDefault();
        changeField( evt.target.value, "postUpdateTitle");
    }

    const handleStatusUpdate = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "postUpdateStatus");
    }

    const handleContentUpdate = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "postUpdateContent")
    }

    const handleIsActive = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, "postUpdateIsActive"); 
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updatePost();
        handleBack(evt);
    }

    return (
        <div className="container my-4">
                <button onClick={handleBack} className="btn btn-success float-right">Retour</button>
                <h2>Modifier une Candidature</h2>
              
                <form onSubmit={handleSubmit} action="" className="mt-5">
      
                    <input defaultValue={postSelect.id} type="hidden" />
      
                    <div className="form-group">
                        <label htmlFor="name">Titre</label>
                        <input onChange={handleTitleUpdate} defaultValue={postSelect.title} name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Status</label>
                        <select onClick={handleStatusUpdate} defaultValue={postSelect.status} className="custom-select">
                            <option value="Nouveau">Nouveau</option>
                            <option value="Test">Test</option>
                            <option value="Accéptée">Accéptée</option>
                            <option value="Refusée">Refusée</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Content</label>
                        <div className="form-group mb-4">
                            <textarea onChange={handleContentUpdate} defaultValue={postSelect.content} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                   </div>
                   <div className="form-group">
                        <label htmlFor="subtitle">Visible ou non visible</label>
                        <select onClick={handleIsActive} className="custom-select">
                            <option defaultValue={postSelect.isActive}></option>
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