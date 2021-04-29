export const FETCH_LIST_JEUX = 'FETCH_LIST_JEUX';
export const SAVE_LIST_JEUX = 'SAVE_LIST_JEUX';
export const FETCH_LIST_MEMBRES = 'FETCH_LIST_MEMBRES'
export const SAVE_LIST_MEMBRES = 'SAVE_LIST_MEMBRES'

export const fetchListJeux = () => ({
    type: FETCH_LIST_JEUX,
});

export const saveListJeux = (listJeux) => ({
    type: SAVE_LIST_JEUX,
    listJeux,
});

export const fetchListMembres = () => ({
    type: FETCH_LIST_MEMBRES,
});

export const saveListMembres = (listMembres) => ({
    type: SAVE_LIST_MEMBRES,
    listMembres,
});