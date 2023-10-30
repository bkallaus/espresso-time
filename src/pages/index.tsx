import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Button,
  Box,
  ChakraProvider,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import TimerButton from "../components/timer-button";
import ManualInput from "../components/manual-input";
import { Line } from "react-chartjs-2";
import { useLiveQuery } from "dexie-react-hooks";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
} from "chart.js";
import { useDB } from "../components/use-db";
import { db } from "../components/db";
import { EspressoShot } from "src/types/espresso-shot";

const pageStyles = {
  color: "#232129",
  padding: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  fontSize: 36,
  fontWeight: "bold",
  marginTop: 0,
  marginBottom: "20px",
  textAlign: "center",
};

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

const IndexPage: React.FC<PageProps> = () => {
  const { clearAllShots, deleteShot } = useDB();
  const shots = (useLiveQuery(async () => {
    return await db.espressoShots.toArray();
  }) ?? []) as EspressoShot[];

  return (
    <ChakraProvider>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Espresso Time</h1>
        <Box
          pb={5}
          display={"flex"}
          flexDirection={"row"}
          gap={"12px"}
          justifyContent={"center"}
        >
          <TimerButton />
          <ManualInput />
        </Box>
        <Box maxH={400} display="flex" justifyContent={"center"}>
          <Line
            datasetIdKey="id"
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
            data={{
              labels: shots.map((shot) =>
                new Date(shot.date).toLocaleDateString()
              ),
              datasets: [
                {
                  data: shots.map((s) => s.shotTime),
                },
              ],
            }}
          />
        </Box>
        <Table maxW={300} margin="auto">
          <Thead>
            <Td>Shot Time (Sec)</Td>
            <Td>Date</Td>
            <Td>Actions</Td>
          </Thead>
          <Tbody>
            {shots.map((shot) => (
              <Tr key={shot.id}>
                <Td>{shot.shotTime.toFixed(2)}</Td>
                <Td>{new Date(shot.date).toLocaleDateString()}</Td>
                <Td>
                  <Button onClick={() => deleteShot(shot.id)}>Delete</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box display={"flex"} justifyContent={"center"} width={"100%"} p={5}>
          <Button onClick={clearAllShots}>Clear All</Button>
        </Box>
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Espresso Time</title>;
