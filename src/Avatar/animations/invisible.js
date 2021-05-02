import './keyframes/wait.css';

export const invisible = (seconds) => {
  return {
    animation: {
      animationName: 'invisible',
      opacity: 0,
      animationDuration: `${seconds}s`,
    },
  };
};
