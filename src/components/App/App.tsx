import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoiteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
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

  const totalVotes: number = votes.good + votes.neutral + votes.bad;
  const positiveRate: number = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoiteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes ? true : false}
        />
        {totalVotes ? (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

export default App;
