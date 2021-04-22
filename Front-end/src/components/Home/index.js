import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import {slugifyTitle} from '../../utils'

import './home.scss';
import Delete from './Delete'

const Home = ({ changeField, listProjet, fetchListProjet, deleteProjet}) => {

  const [suppr, UseSuppr] = useState(false);

  const handleDelete = () => {
    UseSuppr(true);
  };

  useEffect(() => {
    fetchListProjet();
  }, []);

  return (
      <main className="Home">
            <div className="Home-content container">
              <ul className="Home-ul">
                {listProjet.map((Projet) => (
                  <>
                    <li key={Projet._id} className="Home-li">
                      <h3>{Projet.titre}</h3>
                      <NavLink to={`/single/${slugifyTitle(Projet.titre)}`}><button type="button" className="btn btn-warning">Modifier</button></NavLink>
                      <button onClick={handleDelete} type="button" className="btn btn-danger">Supprimer</button>
                    </li>
                    {suppr && (
                      <Delete fetchListProjet={fetchListProjet} suppr={UseSuppr} changeField={changeField} id={Projet._id} deleteProjet={deleteProjet} />
                    )}
                  </>
                ))}
              </ul>
            </div>
      </main>
  );
}

export default Home;
