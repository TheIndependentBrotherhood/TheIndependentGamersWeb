import { connect } from 'react-redux';

import Recrutement from '../../components/Recrutement';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listPost: state.recrutement.listPost,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recrutement);