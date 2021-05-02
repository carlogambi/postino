import './keyframes/wait.css';
export const wait = (seconds) => {
  return {
    animation: {
      animationName: 'kWaitA',
      animationDuration: `${seconds}s`,
    },
  };
};
