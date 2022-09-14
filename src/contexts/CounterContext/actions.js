import * as actionTypes from './actions-types';

export const actions = (dispatch) => {
  return {
    increse: () => dispatch({ type: actionTypes.INCREASE }),
  };
};
