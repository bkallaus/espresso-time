import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useDB } from "./use-db";
import { Box } from "@chakra-ui/react";

const TimerButton = () => {
  const { addShot } = useDB();
  const [isRunning, setIsRunning] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

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
      setStartTime((time) => {
        addTime(Date.now() - time);
        return 0;
      });
    }
  };

  React.useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(Date.now() - startTime),
      100
    );

    if (!isRunning) {
      clearInterval(interval);
      setCurrentTime(0);
      return;
    }

    return () => {
      clearInterval(interval);
      setCurrentTime(0);
    };
  }, [isRunning]);

  return (
    <Box
      display="flex"
      gap="12px"
      alignItems={"center"}
      justifyContent="center"
    >
      <Button onClick={toggle}>{isRunning ? "Stop" : "Start"}</Button>
      <span>{(currentTime / 1000).toFixed(2)}</span>
    </Box>
  );
};

export default TimerButton;
