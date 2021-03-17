export const CHANGE_FIELD_LOADING = 'CHANGE_FIELD_LOADING';

export const changeFieldLoading = (newValue, identifier) => ({
    type: CHANGE_FIELD_LOADING,
    newValue,
    identifier,
});