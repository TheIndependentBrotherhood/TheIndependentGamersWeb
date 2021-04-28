export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const SAVE_POST_LIST = 'SAVE_POST_LIST';
export const FETCH_POST_LIST = 'FETCH_POST_LIST';
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const SAVE_MESSAGE_LIST = 'SAVE_MESSAGE_LIST'
export const FETCH_MESSAGE_LIST = 'FETCH_MESSAGE_LIST';
export const NEW_POST_OK = 'NEW_POST_OK';
export const NEW_POST_NOP = 'NEW_POST_NOP';


export const changeField = (newValue, identifier) => ({
    type: CHANGE_FIELD,
    newValue,
    identifier,
});

export const addNewPost = () => ({
    type: ADD_NEW_POST,
});

export const fetchPostList = () => ({
    type: FETCH_POST_LIST,
});

export const savePostList = (listPost) => ({
    type: SAVE_POST_LIST,
    listPost,
});

export const fetchMessageList = () => ({
    type: FETCH_MESSAGE_LIST,
})

export const saveMessageList = (listMessage) => ({
    type: SAVE_MESSAGE_LIST,
    listMessage,
});

export const addNewMessage = () => ({
    type: ADD_NEW_MESSAGE,
});

export const newPostOk = (newPostOk) => ({
    type: NEW_POST_OK,
    newPostOk,
});

export const newPostNop = (newPostNop) => ({
    type: NEW_POST_NOP,
    newPostNop,
});