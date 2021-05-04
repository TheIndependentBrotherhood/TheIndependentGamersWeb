import React from 'react';

const ListMembreGestion = ({ handleEdit, handleAdd, listMembres, hundleDeleteMembre, hundleDeleteMembreId, isActiveOrNot }) => {

    return (
        <div>
          <button onClick={handleAdd} to="" className="btn btn-success float-right">Ajouter</button>
          <h2>Liste des membres</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nom</th>
                      <th scope="col">role</th>
                      <th scope="col">Visible</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>

              {listMembres.map((membre) => (

                <tr key={membre.id}>
                    <th scope="row">{membre.id}</th>
                    <td>{membre.name}</td>
                    <td>{membre.role}</td>
                    <td>{isActiveOrNot(membre.isActive)}</td>
                    <td className="text-right">
                        <button onClick={(evt) => handleEdit(membre, evt)} className="btn btn-sm btn-warning">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <div className="btn-group">
                            <button onClick={(evt) => hundleDeleteMembreId(membre, evt)} type="button" className="btn btn-sm btn-danger dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={hundleDeleteMembre} >Oui, je veux supprimer</button>
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

export default ListMembreGestion;