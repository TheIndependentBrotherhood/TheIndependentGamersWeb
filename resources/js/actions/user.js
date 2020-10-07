export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTER_OK = 'REGISTER_OK'
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_NOP = 'REGISTER_NOP';

export const changeField = (newValue, identifier) => ({
    type: CHANGE_FIELD,
    newValue,
    identifier,
});

export const logIn = () => ({
    type: LOG_IN,
});

export const saveUser = (token, name, email, role, api_token, isLogged) => ({
    type: SAVE_USER,
    token,
    name,
    email,
    role,
    api_token,
    isLogged,
});

export const registerOk = (registerOk) => ({
    type: REGISTER_OK,
    registerOk,
});

export const registerNop = (registerNop) => ({
    type: REGISTER_NOP,
    registerNop,
});

export const register = () => ({
    type: REGISTER_USER,
});

