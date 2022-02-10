import { useEffect, useState } from "react";
import { fetchData } from "./api";
import classes from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Country from "./components/Country/Country";
import i from "./img/image.png";
function App() {
  const [res, setRes] = useState({
    confirmed: {
      value: "loading...",
    },
    recovered: {
      value: "loading...",
    },
    deaths: {
      value: "loading...",
    },
    lastUpdate: "loading.....",
  });

  const [country, setCountry] = useState("");

  useEffect(async () => {
    const data = await fetchData();
    setRes(data);
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setRes(data);
    setCountry(country);
  };
  return (
    <div className={classes.container}>
      <img className={classes.image} src={i} alt="covid-19" />
      <Cards data={res} />
      <Country change={handleCountryChange} />
      <Chart data={res} country={country} />
    </div>
  );
}

export default App;
