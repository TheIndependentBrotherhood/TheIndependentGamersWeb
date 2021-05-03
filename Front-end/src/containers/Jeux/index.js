import { connect } from 'react-redux';

import Jeux from '../../components/Jeux';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listJeux: state.list.listJeux,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Jeux);