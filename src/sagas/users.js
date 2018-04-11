import { call, put } from "redux-saga/effects";
import ApiUsers from '../api/getUsers';

export function* searchUsers(action) {
  let users = {};
  if (action.query === '') {
    users.items = [];
  } else {
    users = yield call(ApiUsers.getUsersList, action.query);
  }
  yield put({
    type: 'SEARCH_USERS_SAVE',
    users: users.items,
  });
}

export function* selectUsers(action) {
  yield put({
    type: 'SELECT_USERS_SAVE',
    selected: action.selected,
  });
}

export function* selectedUser(action) {
  let win = window.open(action.selectedItem.html_url, '_blank');
  win.focus();
  yield put({
    type: 'SELECTED_USERS_SAVE',
    selectedItem: action.selectedItem,
  });
}