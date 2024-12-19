import { createSelector } from 'reselect';

const savedNewsSelector = (state) => state.news.savedNews;

export const getSavedNews = createSelector(
  [savedNewsSelector],
  (savedNews) => {
    return Array.isArray(savedNews) ? savedNews : [];
  }
);