import './App.css'
import { GameCard } from './components/GameCard';

export const App = () => {
  return (
    <>
      <h1>Improv Game Directory</h1>
      <GameCard
        title="Yes, And"
        description="A fun improv game"
        numberOfPlayers={{ min: 2, max: 8 }}
      />
    </>
  )
}