import React, { useState, useEffect } from 'react';
import './Avatar.css';

import MainLayer from './utils/MainLayer';
import moods from './moods';

import layers  from './components/utils'

import Face from './components/Face';
import Glass from './components/Glass';
import Circle from './components/Circle';
import Mouth from './components/Mouth';
import Eyes from './components/Eyes';
const layersNameList = layers
const layersNum = layersNameList.length 

const asyncWait = ms => new Promise(resolve => setTimeout(resolve, ms))

const getRndmNum = () => Math.round(Math.random()*100)

export const Avatar = ({ mood }) => {
  const [currentMood, setCurrentMood] = useState(moods[mood]);
  const [rndmKey, setRndmKey] = useState(getRndmNum())
  const [currentStep, setCurrentStep] = useState(0);
  const [animationsEnd, setAnimationsEnd] = useState([])
  const [currentAnimation, setCurrentAnimation] = useState(
    currentMood[currentStep]
  )

  const onLayerAnimationEnd = (layerName) => {
    const animationsToEnd = [layerName]
    for (let key in currentAnimation.animation) {
      if (currentAnimation.animation[key] === null) {
        animationsToEnd.push(key)
      }
    }
    const tot = [...new Set([...animationsToEnd, ...animationsEnd])]
    setAnimationsEnd(tot)
  }

  useEffect(() => (async () => {
    if(currentAnimation?.wait){
      console.log('start waiting')
      await asyncWait(currentAnimation.wait*1000)
      setAnimationsEnd(layersNameList)
      console.log('finished waiting ' + currentAnimation.wait*1000)
    }
    if (
      layersNum === animationsEnd.length &&
      currentStep <= currentMood.length - 1
    ) {
      const newStep = (currentStep === currentMood.length - 1) ? currentStep : currentStep + 1
      setCurrentStep(newStep);
      setCurrentAnimation(currentMood[newStep])
      setAnimationsEnd([])
    }

    if (Object.keys(moods).includes(mood)) {
      if (moods[mood] !== currentMood) {
        console.log(`new mood - > ${mood}`)
        const newStep = 0
        setCurrentMood(moods[mood]);
        setCurrentStep(newStep);
        setAnimationsEnd([])
        setCurrentAnimation(moods[mood][newStep])
        setRndmKey(getRndmNum())
      }
    } else {
      throw Error(
        `Avatar: unknown mood ${mood} 🐵 \n supported moods are: ${Object.keys(
          moods
        ).toString()}`
      );
    }

  })(), [animationsEnd.length, currentAnimation.wait, currentMood, currentStep, mood]);

  return (
    <>
      {false &&
        (<div className='avatarState'>
          <h1>{currentStep}/{currentMood.length - 1}</h1>
          <h2>layers done with their's animation</h2>
          <pre style={{ fontFamily: 'sans-serif' }}>{JSON.stringify(animationsEnd)}</pre>
          <h2>layers still in thier's animation</h2>
          <pre style={{ fontFamily: 'sans-serif' }}>{JSON.stringify(layersNameList.filter(l => !animationsEnd.includes(l)))}</pre>
          <h2>current animation</h2>
          <pre style={{ fontFamily: 'sans-serif' }}>{JSON.stringify(currentAnimation, null, ' ')}</pre>
        </div>)
        }
      <MainLayer id='avatar' className='fittedComponent'>
        {[<Circle
          animation={currentAnimation?.animation.circle}
          onAnimationEnd={() => {
            onLayerAnimationEnd('circle')
          }}
          key={0}
          step={currentStep}
        />,
        <Face
          animation={currentAnimation.animation.face}
          onAnimationEnd={() => {
            onLayerAnimationEnd('face')
          }}
          key={1}
          step={currentStep}
        />,
        <Glass
          animation={currentAnimation.animation.glass}
          onAnimationEnd={() => {
            onLayerAnimationEnd('glass')
          }}
          key={2}
          step={currentStep}
        />,
        <Mouth
          animation={currentAnimation.animation.mouth}
          onAnimationEnd={() => {
            onLayerAnimationEnd('mouth')
          }}
          mood={currentAnimation.mouth}
          key={rndmKey+3}
          step={currentStep}
        />,
        <Eyes
          animation={currentAnimation.animation.eyes}
          onAnimationEnd={() => {
            onLayerAnimationEnd('eyes')
          }}
          mood={currentAnimation.eyes}
          key={rndmKey+4}
          step={currentStep}
        />]}
      </MainLayer>
    </>
  );
};
