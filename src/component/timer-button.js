import React from 'react';
import { Button } from '@chakra-ui/react'

const TimerButton = () => {
  const addTime = (time) => {
    console.log('add time', (time/1000).toFixed(2));
  };

  const [isRunning, setIsRunning] = React.useState(false);
  const [, setStartTime] = React.useState(0);

  const toggle = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setStartTime(Date.now());
    } else {
      setStartTime((startTime) => {
        addTime(Date.now() - startTime);
        return 0;
      });
    }
  };

  return <Button onClick={toggle}>{isRunning ? 'Stop' : 'Start'}</Button>;
};


export default TimerButton;
