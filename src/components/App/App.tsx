import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoiteOptions from '../VoteOptions/VoteOptions';
import { useState } from 'react';
import type { Votes } from '../../types/votes';
import type { VoteType } from '../../types/votes';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (key: VoteType) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoiteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={true}
        />
      </div>
    </>
  );
}

export default App;
