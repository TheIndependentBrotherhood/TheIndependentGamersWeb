import React from 'react';
import PropTypes from 'prop-types';

import './delete.scss';

const Delete = ({ fetchListProjet, deleteProjet, suppr, changeField, id }) => {

    const handleDelete = (evt) => {
        evt.preventDefault();
        changeField(id, '_id');
        deleteProjet();
        suppr(false);
      };

  return (
    <main className="Delete">
        <form onSubmit={handleDelete} className="Delete-form">
            <h2 className="Delete-h2">Supprimer ?</h2>
            <button className="Delete-button" type="submit" className="btn btn-primary">Valider</button>
        </form>
    </main>
  );
}

export default Delete;