import { connect } from 'react-redux';

import RecrutementGestion from '../../../components/Recrutement/RecrutementGestion';

import { changeField, fetchPostList, fetchAllPostList, updatePost, deletePost } from '../../../actions/recrutement'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listPost: state.recrutement.listPost,
  listAllPost: state.recrutement.listAllPost,
  isAdmin: state.user.isAdmin,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  fetchPostList: () => {
    dispatch(fetchPostList());
  },
  fetchAllPostList: () => {
    dispatch(fetchAllPostList());
  },
  updatePost: () => {
    dispatch(updatePost());
  },
  deletePost: () => {
    dispatch(deletePost());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecrutementGestion);