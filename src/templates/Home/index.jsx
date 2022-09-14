import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  console.log(state);

  return (
    <div>
      <h1>Resetando projeto</h1>
    </div>
  );
};
