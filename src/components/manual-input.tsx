import React, { useEffect } from "react";
import { Button, Input } from "@chakra-ui/react";
import { useDB } from "./use-db";
import { Box } from "@chakra-ui/react";

const ManualInput = () => {
  const { addShot } = useDB();
  const [time, setTime] = React.useState<number>(0);

  const addTime = async () => {
    const shot = {
      shotTime: time,
      date: new Date().toISOString(),
    };

    await addShot(shot);
  };

  return (
    <Box
      display="flex"
      gap="12px"
      alignItems={"center"}
      justifyContent="center"
    >
      <Input
        placeholder="Shot Time"
        type="number"
        onChange={(e) => setTime(Number(e.target.value))}
      />
      <Button onClick={addTime}>Add Shot</Button>
    </Box>
  );
};

export default ManualInput;
