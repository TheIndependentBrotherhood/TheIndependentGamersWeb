export const CHANGE_FIELD = 'CHANGE_FIELD';
export const FETCH_LIST_PROJET = 'FETCH_LIST_PROJET';
export const SAVE_LIST_PROJET = 'SAVE_LIST_PROJET';
export const ADD_PROJET = 'ADD_PROJET';
export const MODIF_PROJET = 'MODIF_PROJET';
export const DELETE_PROJET = 'DELETE_PROJET';
export const SAVE_FILE = "SAVE_FILE";

export const changeField = (newValue, identifier) => ({
    type: CHANGE_FIELD,
    newValue,
    identifier,
});

export const fetchListProjet = () => ({
    type: FETCH_LIST_PROJET,
});

export const saveListProjet = (listProjet) => ({
    type: SAVE_LIST_PROJET,
    listProjet,
});

export const addProjet = () => ({
    type: ADD_PROJET,
});

export const modifProjet = () => ({
    type: MODIF_PROJET,
});

export const deleteProjet = () => ({
    type: DELETE_PROJET,
});

export const saveFile = (imageFile) => ({
    type: SAVE_FILE,
    imageFile,
})