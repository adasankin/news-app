import { ActionTypes } from "../constants/action-key";

export const saveNews = (news) => ({
  type: ActionTypes.SAVE_NEWS,
  payload: news,
});

export const removeNews = (article_id) => ({
  type: ActionTypes.REMOVE_NEWS,
  payload: article_id,
});