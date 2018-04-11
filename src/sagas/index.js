import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { searchUsers, selectUsers, selectedUser } from './users'

export function* sagas() {
  yield [
    fork(takeLatest, 'SEARCH_USERS', searchUsers),
    fork(takeLatest, 'SELECT_USERS', selectUsers),
    fork(takeLatest, 'SELECTED_USERS', selectedUser)
  ];
}
