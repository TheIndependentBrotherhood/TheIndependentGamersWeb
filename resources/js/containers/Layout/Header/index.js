import { connect } from 'react-redux';

import Header from '../../../components/Layout/Header';

import { changeField } from '../../../actions/user'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isLogged: state.user.isLogged,
  name: state.user.name,
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