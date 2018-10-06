import {api} from "../utils/api";
import {infoFetched} from './reducers/info';
import {infoLoading, infoLoaded} from './reducers/loading';
import { actions as notifActions} from 'redux-notifications';

const { notifSend } = notifActions;

export default function getUser(user) {
  return (dispatch) => {

    dispatch(infoLoading());
    dispatch(notifSend({
      message: 'User info is loading...',
      kind: 'info',
      dismissAfter: 2000
    }));

    api().getSingleUser(user).then(
      res => {
        dispatch(infoFetched(res));
        dispatch(notifSend({
          message: 'User info successfully loaded',
          kind: 'success',
          dismissAfter: 2000
        }));
      },
      rej => {
        dispatch(notifSend({
          message: rej,
          kind: 'danger',
          dismissAfter: 2000
        }));
      }
    ).finally(
      dispatch(infoLoaded())
    );
  };
}


