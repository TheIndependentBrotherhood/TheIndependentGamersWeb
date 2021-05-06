export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const SAVE_POST_LIST = 'SAVE_POST_LIST';
export const FETCH_POST_LIST = 'FETCH_POST_LIST';
export const SAVE_ALL_POST_LIST = 'SAVE_ALL_POST_LIST';
export const FETCH_ALL_POST_LIST = 'FETCH_ALL_POST_LIST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_MEMBRE = 'DELETE_MEMBRE';
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

// post

export const addNewPost = () => ({
    type: ADD_NEW_POST,
});

export const updatePost = () => ({
    type: UPDATE_POST,
});

export const deletePost = () => ({
    type: DELETE_MEMBRE,
})

export const fetchPostList = () => ({
    type: FETCH_POST_LIST,
});

export const fetchAllPostList = () => ({
    type: FETCH_ALL_POST_LIST,
});

export const savePostList = (listPost) => ({
    type: SAVE_POST_LIST,
    listPost,
});

export const saveAllPostList = (listAllPost) => ({
    type: SAVE_ALL_POST_LIST,
    listAllPost,
});

// message

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