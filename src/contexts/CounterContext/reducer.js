import { initialState } from '.';
import * as actionsTypes from './actions-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };

    case actionsTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };

    case actionsTypes.RESET:
      return { ...initialState };

    case actionsTypes.SET_COUNTER:
      return { ...state, counter: action.payload };

    case actionsTypes.ASYNC_INCREATE_START:
      return { ...state, loading: true };

    case actionsTypes.ASYNC_INCREATE_END:
      return { ...state, loading: false, number: action.payload };

    case actionsTypes.ASYNC_INCREATE_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
