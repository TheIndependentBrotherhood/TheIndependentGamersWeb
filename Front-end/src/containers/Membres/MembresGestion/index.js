import { connect } from 'react-redux';

import Membres from '../../../components/Membres/MembresGestion';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listMembres: state.list.listMembres,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Membres);