import './keyframes/fadeIn.css';

export const fadeIn = (seconds) => {
  return {
    animation: {
      animationName: 'kFadeIn',
      animationDuration: `${seconds}s`,
    },
  };
};
