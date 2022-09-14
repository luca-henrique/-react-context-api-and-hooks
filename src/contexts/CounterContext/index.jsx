import { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import { reducer } from './reducer';
import { actions } from './actions';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext({});

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actionsBuild = useRef(actions(dispatch));

  return <Context.Provider value={[state, actionsBuild]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use CounterContext inside');
  }

  return [...context];
};

export default useCounterContext;
