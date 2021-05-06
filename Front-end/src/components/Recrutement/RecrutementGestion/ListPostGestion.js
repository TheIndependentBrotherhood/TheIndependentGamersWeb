import React from 'react';

import {GetFormattedDate} from '../../../utils'

const ListMembreGestion = ({ handleEdit, listAllPost, hundleDeletePost, hundleDeletePostId, isActiveOrNot }) => {

    return (
        <div>
          <h2>Liste des Candidatures</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Titre</th>
                      <th scope="col">Statu</th>
                      <th scope="col">Date</th>
                      <th scope="col">Visible</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>

              {listAllPost.map((post) => (

                <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>{post.status}</td>
                    <td>{GetFormattedDate(post.createdAt)}</td>
                    <td>{isActiveOrNot(post.isActive)}</td>
                    <td className="text-right">
                        <button onClick={(evt) => handleEdit(post, evt)} className="btn btn-sm btn-warning">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <div className="btn-group">
                            <button onClick={(evt) => hundleDeletePostId(post, evt)} type="button" className="btn btn-sm btn-danger dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={hundleDeletePost} >Oui, je veux supprimer</button>
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