import './keyframes/fadeOut.css';

export const fadeOut = (seconds) => {
  return {
    animation: {
      animationName: 'kfadeOut',
      animationDuration: `${seconds}s`,
      opacity: 0,
    },
  };
};
