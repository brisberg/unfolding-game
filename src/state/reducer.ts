import {ACTION_INCREASE_COUNT_1, ACTION_INCREASE_COUNT_2, ACTION_RESET_STATE, AllActions} from './actions';

interface AppState {
  count1: number;
  count2: number;
}

export const initialState: AppState = {
  count1: 0,
  count2: 0,
}

export function reducer(state: AppState = initialState, action: AllActions) {
  switch (action.type) {
    case ACTION_INCREASE_COUNT_1:
      return {
        ...state, count1: state.count1 + 1,
      }
    case ACTION_INCREASE_COUNT_2:
      return {
        ...state, count2: state.count2 + 1,
      }
    case ACTION_RESET_STATE:
      return {
        ...initialState
      }
    default:
      return state;
  }
}
