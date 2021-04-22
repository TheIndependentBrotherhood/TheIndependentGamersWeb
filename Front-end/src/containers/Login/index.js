import { connect } from 'react-redux';

import Login from '../../components/Login';

import { logIn, changeField } from '../../actions/auth'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.auth.listProjet,
  password: state.auth.listProjet,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  logIn: () => {
    dispatch(logIn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);