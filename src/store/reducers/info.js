import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import {getReducerProp} from '../../utils/helpers'

export const INFO_FETCHED = 'PROFILE::INFO_FETCHED';
export const infoFetched = createAction(INFO_FETCHED);
export const userInfo = handleActions({
  [infoFetched]: (state, { payload }) => ({...state, userInfo:{...payload}}),
}, {
  userInfo: {
    avatar_url: '',
    name: '',
    login: '',
    company: '',
    location: '',
    bio: '',
    public_repos: '',
    following: '',
    followers: '',
  }
});

export const INFO_STATE_NAME = 'userInfo';
export const REDUCER_INFO_NAME = 'userInfo';
const infoSelector = getReducerProp(REDUCER_INFO_NAME);
export const infoStateSelector = createSelector(infoSelector, getReducerProp(INFO_STATE_NAME));