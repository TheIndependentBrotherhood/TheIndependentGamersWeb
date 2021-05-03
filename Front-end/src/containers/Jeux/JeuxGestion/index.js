import { connect } from 'react-redux';

import JeuxGestion from '../../../components/Jeux/JeuxGestion';

import { changeField, updateJeu, fetchListJeux, deleteJeu } from '../../../actions/list'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listJeux: state.list.listJeux,
  isAdmin: state.user.isAdmin,
  jeuNameUpdate: state.list.jeuNameUpdate,
  jeuDescriptionUpdate: state.list.jeuDescriptionUpdate,
  jeuIdUpdate: state.list.jeuIdUpdate,
  jeuIsActiveUpdate: state.list.jeuIsActiveUpdate,
  token: state.user.token,

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  updateJeu: () => {
    dispatch(updateJeu());
  },
  deleteJeu: () => {
    dispatch(deleteJeu());
  },
  fetchListJeux: () => {
    dispatch(fetchListJeux());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JeuxGestion);