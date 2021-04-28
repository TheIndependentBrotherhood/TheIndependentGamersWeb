import { connect } from 'react-redux';

import PostCandidature from '../../../components/Recrutement/PostCandidature';

import { changeField, addNewMessage, fetchPostList } from '../../../actions/recrutement'


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  listPost: state.recrutement.listPost,
  loadingRecrutement: state.recrutement.loadingRecrutement,
  postFocusId: state.recrutement.postFocusId,
  listMessage: state.recrutement.listMessage,
  isLogged: state.user.isLogged,
  newMessageContent: state.recrutement.newMessageContent,
  userName: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  addNewMessage: () => {
    dispatch(addNewMessage());
  },
  fetchPostList: () => {
    dispatch(fetchPostList());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCandidature);