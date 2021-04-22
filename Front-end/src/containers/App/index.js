import { connect } from 'react-redux';

import App from '../../components/App';

import { fetchListProjet } from '../../actions/projet'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchListProjet: () => {
    dispatch(fetchListProjet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);