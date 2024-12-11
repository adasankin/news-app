import { ADD_SAVED, REMOVE_SAVED } from './actions';

const initialState = {
  savedNews: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SAVED:
      return {
        ...state,
        savedNews: [...state.savedNews, action.payload],
      };
    case REMOVE_SAVED:
      return {
        ...state,
        savedNews: state.savedNews.filter(
          (item) => item.title !== action.payload.title
        ),
      };
    default:
      return state;
  }
};