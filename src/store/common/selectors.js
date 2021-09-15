import { createSelector } from 'reselect';

export const common = (state) => state.common;

export const getOnBoard = createSelector(common, (data) => {
  return data.onBoardScreen;
});

export const getInfoDevice = createSelector(common, (data) => {
  return data.infoDevice;
});

export const getCodeLanguage = createSelector(common, (data) => {
  return data.codeLanguage || 'vi-VN';
});

export const getStatusModalLogout = createSelector(common, (data) => {
  return data.statusModalLogout || false;
});
