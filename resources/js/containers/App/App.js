import { connect } from 'react-redux';

import App from '../../components/App/App';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);