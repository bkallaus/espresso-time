import React from "react";
import { Button } from "@chakra-ui/react";
import { EspressoShot } from "../pages";

const TimerButton = ({
  setShots,
}: {
  setShots: React.SetStateAction<EspressoShot[]>;
}) => {
  const addTime = (time: number) => {
    const shot = {
      shotTime: time / 1000,
      date: new Date().toISOString(),
    };
    setShots((shots: number[]) => [...shots, shot]);
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

  return <Button onClick={toggle}>{isRunning ? "Stop" : "Start"}</Button>;
};

export default TimerButton;
