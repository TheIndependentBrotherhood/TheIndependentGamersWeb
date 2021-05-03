export const CHANGE_FIELD_LIST = 'CHANGE_FIELD_LIST';

// Jeux

export const FETCH_LIST_JEUX = 'FETCH_LIST_JEUX';
export const SAVE_LIST_JEUX = 'SAVE_LIST_JEUX';
export const UPDATE_JEU = 'UPDATE_JEU';
export const DELETE_JEU = 'DELETE_JEU';

// Membres 

export const FETCH_LIST_MEMBRES = 'FETCH_LIST_MEMBRES';
export const SAVE_LIST_MEMBRES = 'SAVE_LIST_MEMBRES';
export const UPDATE_MEMBRE = 'UPDATE_MEMBRE';
export const DELETE_MEMBRE = 'DELETE_MEMBRE';

export const changeField = (newValue, identifier) => ({
    type: CHANGE_FIELD_LIST,
    newValue,
    identifier,
});

// Jeux

export const fetchListJeux = () => ({
    type: FETCH_LIST_JEUX,
});

export const saveListJeux = (listJeux) => ({
    type: SAVE_LIST_JEUX,
    listJeux,
});

export const updateJeu = () => ({
    type: UPDATE_JEU,
});

export const deleteJeu = () => ({
    type: DELETE_JEU,
});

// Membre

export const fetchListMembres = () => ({
    type: FETCH_LIST_MEMBRES,
});

export const saveListMembres = (listMembres) => ({
    type: SAVE_LIST_MEMBRES,
    listMembres,
});

export const updateMembre = () => ({
    type: UPDATE_MEMBRE,
});

export const deleteMembre = () => ({
    type: DELETE_MEMBRE,
});
