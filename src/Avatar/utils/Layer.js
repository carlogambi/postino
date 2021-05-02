import { useState } from 'react';

const Layer = ({ src, style, animation, onAnimationEnd, alt, step }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      src={src}
      alt={`avatar layer ${alt}`}
      style={
        loaded ?
          {
            ...style,
            ...animation?.animation,
          } :
          { opacity: 0 }}
      className='component fittedComponent avatarLayer'
      onAnimationEnd={() =>
        onAnimationEnd()
      }
      onLoad={() => setLoaded(true)}
    />
  );
};
export default Layer;
