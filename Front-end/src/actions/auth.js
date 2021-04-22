export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';

export const changeField = (newValue, identifier) => ({
    type: CHANGE_FIELD,
    newValue,
    identifier,
});

export const logIn = () => ({
    type: LOG_IN,
});

export const saveUser = (isLogged, token) => ({
    type: SAVE_USER,
    isLogged,
    token,
});