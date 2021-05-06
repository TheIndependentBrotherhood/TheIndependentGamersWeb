import { CHANGE_FIELD, SAVE_POST_LIST, SAVE_MESSAGE_LIST, ADD_NEW_MESSAGE, NEW_POST_OK, NEW_POST_NOP, SAVE_ALL_POST_LIST } from '../actions/recrutement'; 

  const initialState = {
      newPostNop: false,
      newPostOk: false,
      listPost: [],
      listAllPost: [],
      listMessage: [],
      newPostTitle: '',
      newPostContent: '',
      postUpdateTitle: '',
      postUpdateStatus: '',
      postUpdateContent: '',
      postUpdateIsActive: '',
      postUpdateUserId: '',
      postUpdateId: '',
      postDeletedId: '',
      newMessageContent: '',
      postFocusId: '',
      loadingRecrutement: true,
    };
    
    const recrutementReducer = (state = initialState, action = {}) => {
      switch (action.type) {

        case CHANGE_FIELD:
            return {
              ...state,
              [action.identifier]: action.newValue,
        };

        case SAVE_POST_LIST:
            return{
              ...state,
              listPost: action.listPost,
              loadingRecrutement: false,
              newPostNop: false,
        };

        case SAVE_ALL_POST_LIST:
          return{
            ...state,
            listAllPost: action.listAllPost,
            loadingRecrutement: false,
            newPostNop: false,
        };

        case SAVE_MESSAGE_LIST:
            return{
              ...state,
              listMessage: action.listMessage,
              loadingRecrutement: false,
        };

        case ADD_NEW_MESSAGE:
          return{
            ...state,
            newMessageContent: '',
        };

        case NEW_POST_OK:
          return {
            ...state,
            newPostOk: action.newPostOk,
        };
  
        case NEW_POST_NOP:
          return {
            ...state,
            newPostNop: action.newPostNop,
        };
  
        default: return state;
      }
    };
    
    export default recrutementReducer;