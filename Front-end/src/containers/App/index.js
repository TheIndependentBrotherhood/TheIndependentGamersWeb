import { connect } from 'react-redux';

import App from '../../components/App';

import { logInCheck } from '../../actions/user'

import { fetchListJeux, fetchListMembres } from '../../actions/list'

import { changeFieldLoading } from '../../actions/loading'

import { fetchPostList, fetchMessageList } from '../../actions/recrutement'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  loading: state.loading.loading,
  loadingRecrutement: state.recrutement.loadingRecrutement,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  logInCheck: () => {
    dispatch(logInCheck());
  },
  changeFieldLoading: (value, name) => {
    dispatch(changeFieldLoading(value, name));
  },
  fetchListMembres: () => {
    dispatch(fetchListMembres());
  },
  fetchListJeux: () => {
    dispatch(fetchListJeux());
  },
  fetchPostList: () => {
    dispatch(fetchPostList());
  },
  fetchMessageList: () => {
    dispatch(fetchMessageList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);