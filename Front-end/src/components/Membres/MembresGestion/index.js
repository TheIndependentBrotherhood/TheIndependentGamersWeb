import React from 'react';


// ==== CSS ==== //

const MembresGestion = ({ listMembres, isAdmin }) => {

  return(
    
    <main className="container membre">
    
        <div className="membre-content">
          <div className="membre-card">
            {listMembres.map((membre) => (
              <div key={membre.id} className="membre-card-content">
                <img className="membre-card-img" src={membre.picture} alt="" />
                <p className="membre-card-role">{membre.role}</p>
                <h2 className="membre-card-name">{membre.name}</h2>
              </div>
            ))}
          </div>
        </div>
    
    </main>
  );
};

export default MembresGestion;