import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button, ChakraProvider } from "@chakra-ui/react";
import TimerButton from "../components/timer-button";
import { Line } from "react-chartjs-2";

import { useLiveQuery } from "dexie-react-hooks";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

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

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

const IndexPage: React.FC<PageProps> = () => {
  const shots =
    useLiveQuery(async () => {
      return await db.espressoShots.toArray();
    }) ?? [];

  return (
    <ChakraProvider>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Espresso Time</h1>
        <Line
          datasetIdKey="id"
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
        <TimerButton />
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
