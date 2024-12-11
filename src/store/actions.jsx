export const ADD_SAVED = 'ADD_SAVED';
export const REMOVE_SAVED = 'REMOVE_SAVED';

export const addSaved = (news) => ({
  type: ADD_SAVED,
  payload: news,
});

export const removeSaved = (news) => ({
  type: REMOVE_SAVED,
  payload: news,
});