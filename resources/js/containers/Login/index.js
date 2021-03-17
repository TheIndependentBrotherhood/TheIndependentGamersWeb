import { connect } from 'react-redux';

import Login from '../../components/Login';

import { logIn, changeField } from '../../actions/user'

import { changeFieldLoading } from '../../actions/loading'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  loginemail: state.user.loginemail,
  loginpassword: state.user.loginpassword,
  isLogged: state.user.isLogged,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  changeFieldLoading: (value, name) => {
    dispatch(changeFieldLoading(value, name));
  },
  logIn: () => {
    dispatch(logIn());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);