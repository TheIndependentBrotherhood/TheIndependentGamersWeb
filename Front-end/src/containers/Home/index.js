import { connect } from 'react-redux';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listJeux: state.list.listJeux,
  listMembres: state.list.listMembres,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);