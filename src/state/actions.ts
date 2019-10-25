import {ActionsUnion, createAction, createActionPayload} from './action_utils';

export const ACTION_INCREASE_COUNT_1 = 'ACTION_INCREASE_COUNT_1';
export const ACTION_INCREASE_COUNT_2 = 'ACTION_INCREASE_COUNT_2';
export const ACTION_RESET_STATE = 'ACTION_RESET_STATE';

export const AppActions = {
  increaseCount1:
      createAction<typeof ACTION_INCREASE_COUNT_1>(ACTION_INCREASE_COUNT_1),
  increaseCount2:
      createAction<typeof ACTION_INCREASE_COUNT_2>(ACTION_INCREASE_COUNT_2),
  reset: createAction<typeof ACTION_RESET_STATE>(ACTION_RESET_STATE),
};

export type AllActions = ActionsUnion<typeof AppActions>;
