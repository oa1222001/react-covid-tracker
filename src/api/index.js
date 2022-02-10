import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;
  if (country && country !== "global") {
    changableUrl = `${url}/countries/${country}`;
  }
  try {
    const res = await axios.get(changableUrl);
    const modifiedData = {
      confirmed: res.data.confirmed,
      recovered: res.data.recovered,
      deaths: res.data.deaths,
      lastUpdate: res.data.lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const res = await axios.get(`${url}/daily`);
    const x = res.data.map((day) => ({
      confirmed: day.confirmed.total,
      deaths: day.deaths.total,
      date: day.reportDate,
    }));
    return x;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const res = await axios.get(`${url}/countries`);
    return res.data.countries.map((c) => c.name);
  } catch (error) {
    console.log(error);
  }
};
