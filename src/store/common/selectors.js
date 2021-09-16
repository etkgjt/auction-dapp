import { createSelector } from 'reselect';

export const common = (state) => state.common;

export const getCodeLanguage = createSelector(common, (data) => {
  return data.codeLanguage || 'vi';
});

export const getLanguage = createSelector(common, (data) => {
  return data.language || 'vi';
});