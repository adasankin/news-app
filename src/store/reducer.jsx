import { ActionTypes } from '../constants/action-key';

const initialState = {
  savedNews: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_NEWS:
      if (!state.savedNews.some((item) => item.article_id === action.payload.article_id)) {
        return {
          ...state,
          savedNews: [...state.savedNews, action.payload],
        };
      }
      return state;
    case ActionTypes.REMOVE_NEWS:
      return {
        ...state,
        savedNews: state.savedNews.filter(
          (item) => item.article_id !== action.payload
        ),
      };

    default:
      return state;
  }
};