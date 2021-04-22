import { connect } from 'react-redux';

import New from '../../components/New';

import { changeField, addProjet, saveFile } from '../../actions/projet';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  titre: state.projet.titre,
  description: state.projet.description,
  status: state.projet.status,
  imageFile: state.projet.imageUrl,
  link: state.projet.link,
  isActive: state.projet.isActive,
  isLogged: state.auth.isLogged,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  saveFile: (imageFile) => {
    dispatch(saveFile(imageFile));
  },
  addProjet: () => {
    dispatch(addProjet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(New);