import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  console.log(dispatch);

  return (
    <div>
      <h1 onClick={() => dispatch.increse()}>Resetando projeto</h1>
    </div>
  );
};
