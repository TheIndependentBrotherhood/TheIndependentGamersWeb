import { connect } from 'react-redux';

import App from '../../components/App/App';

import { logInCheck } from '../../actions/user'

import { changeFieldLoading } from '../../actions/loading'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  logInCheck: () => {
    dispatch(logInCheck());
  },
  changeFieldLoading: (value, name) => {
    dispatch(changeFieldLoading(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);