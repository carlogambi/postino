import React, { useState, useEffect } from 'react';
import './Avatar.css';

import MainLayer from './utils/MainLayer';
import moods from './moods';

import Face from './components/Face';
import Glass from './components/Glass';
import Circle from './components/Circle';
import Mouth from './components/Mouth';
import Eyes from './components/Eyes';

export const Avatar = ({ mood }) => {
  const [currentMood, setCurrentMood] = useState(moods[mood]);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationEndCounter, setAnimationEndCounter] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(
    currentMood[currentStep]
  );

  const layers = [
    <Circle
      animation={currentAnimation.animation.circle}
      onAnimationEnd={() => {
        setAnimationEndCounter(animationEndCounter + 1);
      }}
      key={0}
    />,
    <Face
      animation={currentAnimation.animation.face}
      onAnimationEnd={() => {
        setAnimationEndCounter(animationEndCounter + 1);
      }}
      key={1}
    />,
    <Glass
      animation={currentAnimation.animation.glass}
      onAnimationEnd={() => {
        setAnimationEndCounter(animationEndCounter + 1);
      }}
      key={2}
    />,
    <Mouth
      animation={currentAnimation.animation.mouth}
      onAnimationEnd={() => {
        setAnimationEndCounter(animationEndCounter + 1);
      }}
      mood={currentAnimation.mouth}
      key={3}
    />,
    <Eyes
      animation={currentAnimation.animation.eyes}
      onAnimationEnd={() => {
        setAnimationEndCounter(animationEndCounter + 1);
      }}
      mood={currentAnimation.eyes}
      key={4}
    />,
  ];

  useEffect(() => {
    if (Object.keys(moods).includes(mood)) {
      if (moods[mood] !== currentMood) {
        setCurrentMood(moods[mood]);
        setCurrentStep(0);
      }
    } else {
      throw Error(
        `Avatar: unknown mood ${mood} 🐵 \n supported moods are: ${Object.keys(
          moods
        ).toString()}`
      );
    }
    if (currentStep <= currentMood.length - 1) {
      setCurrentAnimation(currentMood[currentStep]);
    }
    if (animationEndCounter === layers.length - 1) {
      setCurrentStep(currentStep + 1);
      setAnimationEndCounter(0);
    }
  }, [animationEndCounter, currentMood, currentStep, layers.length, mood]);

  return (
    <MainLayer id='avatar' className='fittedComponent'>
      {currentStep} - {animationEndCounter}
      {layers}
    </MainLayer>
  );
};
