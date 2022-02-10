import { useEffect, useState } from "react";
import classes from "./Country.module.css";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../api/index";

const Country = ({ change }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchco = async () => {
      setCountries(await fetchCountries());
    };
    fetchco();
  }, []);
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        defaultValue={""}
        onChange={(e) => {
          change(e.target.value);
        }}
      >
        <option value="global">Global</option>
        {countries.length !== 0
          ? countries.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};
export default Country;
