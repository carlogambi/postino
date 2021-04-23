import './keyframes/move.css';

export const move = (seconds) => {
  return {
    animation: {
      animationName: 'kMove',
      animationDuration: `${seconds}s`,
    },
  };
};
