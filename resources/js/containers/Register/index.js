import { connect } from 'react-redux';

import Register from '../../components/Register';

import { register, changeField } from '../../actions/user'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  name: state.user.name,
  registeremail: state.user.registeremail,
  registerpassword: state.user.registerpassword,
  isLogged: state.user.isLogged,
  registerOk: state.user.registerOk,
  registerNop: state.user.registerNop,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  register: () => {
    dispatch(register());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);