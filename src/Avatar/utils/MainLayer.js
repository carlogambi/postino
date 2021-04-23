import React from 'react';

const MainLayer = ({
  id,
  className,
  children,
  style,
  animation,
  onAnimationEnd,
}) => {
  return (
    <div
      className={className}
      id={id}
      style={{
        ...style,
        ...animation,
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

export default MainLayer;
