export const FETCH_LIST_JEUX = 'FETCH_LIST_JEUX';
export const SAVE_LIST_JEUX = 'SAVE_LIST_JEUX';

export const fetchListJeux = () => ({
    type: FETCH_LIST_JEUX,
});

export const saveListJeux = (listJeux) => ({
    type: SAVE_LIST_JEUX,
    listJeux,
});