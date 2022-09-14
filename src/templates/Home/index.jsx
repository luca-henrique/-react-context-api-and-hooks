import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();
  return (
    <div>
      <h1>Resetando projeto</h1>
    </div>
  );
};
