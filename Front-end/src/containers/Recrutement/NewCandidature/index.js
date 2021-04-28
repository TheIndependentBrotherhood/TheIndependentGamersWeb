import { connect } from 'react-redux';

import NewCandidature from '../../../components/Recrutement/NewCandidature';

import { addNewPost, changeField } from '../../../actions/recrutement'

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  newPostTitle: state.recrutement.newPostTitle,
  newPostContent: state.recrutement.newPostContent,
  isLogged: state.user.isLogged,
  newPostNop: state.recrutement.newPostNop,
  newPostOk: state.recrutement.newPostOk
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  addNewPost: () => {
      dispatch(addNewPost());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCandidature);