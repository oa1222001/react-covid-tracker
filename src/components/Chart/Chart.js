import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import Chart from "chart.js/auto";
import classes from "./Chart.module.css";

const Chartcom = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(async () => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  }, []);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map((day) => day.date),
          datasets: [
            {
              data: dailyData.map((day) => day.confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map((day) => day.deaths),
              label: "Deaths",
              borderColor: "#f00",
              backgroundColor: "rgba(250,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : (
      <></>
    );

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className={classes.container}>
      {country && country !== "global" ? barChart : lineChart}
    </div>
  );
};
export default Chartcom;
