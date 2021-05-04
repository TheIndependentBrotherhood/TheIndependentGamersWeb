import React from 'react';

const ListJeuGestion = ({ handleEdit, handleAdd, listJeux, hundleDeleteJeu, hundleDeleteJeuId, isActiveOrNot }) => {

    return (
        <div>
          <button onClick={handleAdd} to="" className="btn btn-success float-right">Ajouter</button>
          <h2>Liste des Jeux</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Description</th>
                      <th scope="col">Visible</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>

              {listJeux.map((jeu) => (

                <tr key={jeu.id}>
                    <th scope="row">{jeu.id}</th>
                    <td>{jeu.name}</td>
                    <td>{jeu.description}</td>
                    <td>{isActiveOrNot(jeu.isActive)}</td>
                    <td className="text-right">
                        <button onClick={(evt) => handleEdit(jeu, evt)} className="btn btn-sm btn-warning">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <div className="btn-group">
                            <button onClick={(evt) => hundleDeleteJeuId(jeu, evt)} type="button" className="btn btn-sm btn-danger dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={hundleDeleteJeu} >Oui, je veux supprimer</button>
                                <a className="dropdown-item" href="#" data-toggle="dropdown">Oups !</a>
                            </div>
                        </div>
                    </td>
                </tr>

              ))}
              </tbody>
          </table>
        </div>
    )
}

export default ListJeuGestion;