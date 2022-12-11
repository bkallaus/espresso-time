import React from "react";
import { Button } from "@chakra-ui/react";
import { useDB } from "./use-db";
import { EspressoShot } from "../types/espresso-shot";

const TimerButton = () => {
  const { addShot } = useDB();
  const [isRunning, setIsRunning] = React.useState(false);
  const [, setStartTime] = React.useState(0);

  const addTime = async (time: number) => {
    const shot = {
      shotTime: time / 1000,
      date: new Date().toISOString(),
    };

    await addShot(shot);
  };

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
