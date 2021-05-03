import React, {useState} from 'react';
import axios from 'axios'

const AddJeu = ({ 
    handleBack,
    token,
    fetchListJeux,
}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('membre')
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

    const handleDescriptionAdd = (evt) => {
        evt.preventDefault();
        setDescription(evt.target.value)
    }

    const handleIsActiveAdd = (evt) => {
        evt.preventDefault();
        setisActive(evt.target.value)
    }

    const handleSubmitAddJeu = (evt) => {
        evt.preventDefault();
        createNewJeu(file, evt)
    }

    const api = axios.create({
        headers: {
          'Authorization': `bearer ${token}`,
        },
    });

    const createNewJeu = (image, evt) => {
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('description', description);
        formdata.append('image', image);
        formdata.append('isActive', isActive);

        api.post('http://localhost:3000/api/jeux', formdata)
        .then((response) => {
            fetchListJeux();
            handleBack(evt)
        })
        .catch((error) => {
            console.log(error)
        })
    };

    return (
        <div className="container my-4">
                <button onClick={handleBack} className="btn btn-success float-right">Retour</button>
                <h2>Ajouter un Jeu</h2>
              
                <form onSubmit={handleSubmitAddJeu} action="" method="POST" className="mt-5">
    
      
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input onChange={handleNameAdd} name="name" type="text" className="form-control" id="name" placeholder="Nom du Jeu" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtitle">Description</label>
                        <input onChange={handleDescriptionAdd} name="description" type="text" className="form-control" id="name" placeholder="Description du Jeu" />
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

export default AddJeu;