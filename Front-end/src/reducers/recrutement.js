import { CHANGE_FIELD, SAVE_POST_LIST, SAVE_MESSAGE_LIST } from '../actions/recrutement'; 

  const initialState = {
      listPost: [],
      listMessage: [],
      newPostTitle: '',
      newPostContent: '',
      newPostUserId: '',
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
        };

        case SAVE_MESSAGE_LIST:
            return{
              ...state,
              listMessage: action.listMessage,
              loadingRecrutement: false,
        };
  
        default: return state;
      }
    };
    
    export default recrutementReducer;