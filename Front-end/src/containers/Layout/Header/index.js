import { connect } from 'react-redux';

import Header from '../../../components/Layout/Header';

import { changeField } from '../../../actions/auth'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  token: state.auth.token,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);