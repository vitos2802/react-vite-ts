import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  canReset: boolean;
  onVote: (type: 'good' | 'neutral' | 'bad') => void;
  onReset: () => void;
}

export default function VoiteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <>
      <div className={css.container}>
        <button className={css.button} onClick={() => onVote('good')}>
          Good
        </button>
        <button className={css.button} onClick={() => onVote('neutral')}>
          Neutral
        </button>
        <button className={css.button} onClick={() => onVote('bad')}>
          Bad
        </button>
        {canReset&&<button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>}
      </div>
    </>
  );
}