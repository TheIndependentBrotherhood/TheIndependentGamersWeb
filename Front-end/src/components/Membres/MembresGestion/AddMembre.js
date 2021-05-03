import React, {useState} from 'react';
import axios from 'axios'

const AddMembre = ({ 
    handleBack,
    token,
    fetchListMembres,
}) => {

    const prod = "https://api.theindependentgamers.fr";
    const develop = "http://localhost:3000"

    const [name, setName] = useState('')
    const [role, setRole] = useState('membre')
    const [imagePreviewUrl, setimagePreviewUrl] = useState('')
    const [file, setFile] = useState('')
    const [isActive, setisActive] = useState(1)

    const handleFile = (evt) => {
        evt.preventDefault();

        let reader = new FileReader();
        const file = evt.target.files[0];

        reader.onloadend = () => {
            setFile(file)
            setimagePreviewUrl(reader.result)
        }

        reader.readAsDataURL(file)
    };

    const handleNameAdd = (evt) => {
        evt.preventDefault();
        setName(evt.target.value)
    }

    const handleRoleAdd = (evt) => {
        evt.preventDefault();
        setRole(evt.target.value)
    }

    const handleIsActiveAdd = (evt) => {
        evt.preventDefault();
        setisActive(evt.target.value)
    }

    const handleSubmitAddMembre = (evt) => {
        evt.preventDefault();
        createNewMembre(file, evt)
    }

    const api = axios.create({
        headers: {
          'Authorization': `bearer ${token}`,
        },
    });

    const createNewMembre = (image, evt) => {
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('role', role);
        formdata.append('image', image);
        formdata.append('isActive', isActive);

        api.post(`${prod}/api/membre`, formdata)
        .then((response) => {
            fetchListMembres();
            handleBack(evt)
        })
        .catch((error) => {
            console.log(error)
        })
    };

    return (
        <div className="container my-4">
                <button onClick={handleBack} className="btn btn-success float-right">Retour</button>
                <h2>Ajouter un Membre</h2>
              
                <form onSubmit={handleSubmitAddMembre} action="" method="POST" className="mt-5">
    
      
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input onChange={handleNameAdd} name="name" type="text" className="form-control" id="name" placeholder="Nom du Membre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Role</label>
                        <select onClick={handleRoleAdd} className="custom-select">
                            <option defaultValue="membre">membre</option>
                            <option value="staff">staff</option>
                            <option value="admin">admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Image / Pas disponible pour le moment</label>
                        <div className="custom-file mb-4">
                            <input onChange={handleFile} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choisir une image</label>
                        </div>
                        <img className="rounded-circle d-block mx-auto" src={imagePreviewUrl} style={{height: '150px'}} />
                   </div>
                   <div className="form-group">
                        <label htmlFor="subtitle">Visible ou non visible</label>
                        <select onClick={handleIsActiveAdd} className="custom-select">
                            <option defaultValue="1">Activé</option>
                            <option value="0">Désctivé</option>
                        </select>
                    </div>
                   <button type="submit" className="btn btn-primary btn-block mt-5">Valider</button>
                </form>
          </div>
    )
}

export default AddMembre;