import { connect } from 'react-redux';

import Profil from '../../components/Profil';

import { register, changeField } from '../../actions/user'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  name: state.user.name,
  email: state.user.email,
  isLogged: state.user.isLogged,
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
)(Profil);