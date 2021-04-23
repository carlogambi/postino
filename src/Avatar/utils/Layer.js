import { useEffect, useState } from 'react';

const Layer = ({ src, style, animation, onAnimationEnd }) => {
  const [currentStyle, setCurrentStyle] = useState({});
  useEffect(() => {
    setCurrentStyle({
      ...style,
      ...animation.animation,
    });
  }, [animation.animation, style]);

  return (
    <img
      src={src}
      alt='avatar layer'
      style={currentStyle}
      className='component fittedComponent avatarLayer'
      onAnimationEnd={onAnimationEnd}
    />
  );
};
export default Layer;
