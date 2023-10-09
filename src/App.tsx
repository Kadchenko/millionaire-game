import { useSelector } from 'react-redux';

import { gameSelector } from '@store/game/selectors';
import StartScreen from '@screens/Start';
import GameScreen from '@screens/Game';
import ResultScreen from '@screens/Result';

function App() {
  const { status } = useSelector(gameSelector);

  if (status === 'NOT_STARTED') return <StartScreen />;
  if (status === 'PLAYING') return <GameScreen />;
  if (status === 'FINISHED') return <ResultScreen />;
  return null;
}

export default App;
