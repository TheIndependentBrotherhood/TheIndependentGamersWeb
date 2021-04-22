import { connect } from 'react-redux';

import Single from '../../components/Single';

import { changeField, modifProjet } from '../../actions/projet'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  _id: state.projet._id,
  titre: state.projet.titre,
  description: state.projet.description,
  status: state.projet.status,
  imageUrl: state.projet.imageUrl,
  link: state.projet.link,
  isActive: state.projet.isActive,
  listProjet: state.projet.listProjet,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  modifProjet: () => {
    dispatch(modifProjet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Single);