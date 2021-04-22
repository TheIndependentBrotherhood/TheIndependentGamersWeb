import { connect } from 'react-redux';

import Home from '../../components/Home';

import { fetchListProjet, deleteProjet, changeField } from '../../actions/projet'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listProjet: state.projet.listProjet,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchListProjet: () => {
    dispatch(fetchListProjet());
  },
  deleteProjet: () => {
    dispatch(deleteProjet());
  },
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);