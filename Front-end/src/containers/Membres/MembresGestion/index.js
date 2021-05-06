import { connect } from 'react-redux';

import Membres from '../../../components/Membres/MembresGestion';

import { changeField, updateMembre, fetchListMembres, fetchListAllMembres, deleteMembre } from '../../../actions/list'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listMembres: state.list.listMembres,
  listAllMembres: state.list.listAllMembres,
  isAdmin: state.user.isAdmin,
  membreNameUpdate: state.list.membreNameUpdate,
  membreRoleUpdate: state.list.membreRoleUpdate,
  membresIdUpdate: state.list.membresIdUpdate,
  membresIsActiveUpdate: state.list.membresIsActiveUpdate,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  updateMembre: () => {
    dispatch(updateMembre());
  },
  deleteMembre: () => {
    dispatch(deleteMembre());
  },
  fetchListMembres: () => {
    dispatch(fetchListMembres());
  },
  fetchListAllMembres: () => {
    dispatch(fetchListAllMembres());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Membres);