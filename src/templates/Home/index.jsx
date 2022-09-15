import { useCounterContext } from '../../contexts/CounterContext';

import { Button } from '../../components/Button';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <Button onEventClick={() => dispatch.current.increse()} title={state.counter} />
      <Button onEventClick={() => dispatch.current.decrease()} title={state.counter} />
    </div>
  );
};
