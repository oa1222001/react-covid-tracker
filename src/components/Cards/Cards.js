import classes from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
const Cards = ({ data }) => {
  return (
    <div className={classes.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={classes.card + " " + classes.infected}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                duration={1}
                separator=","
                start={0}
                end={data.confirmed.value}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          className={classes.card + " " + classes.recovered}
          item
          component={Card}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                duration={1}
                separator=","
                start={0}
                end={data.recovered.value}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={classes.card + " " + classes.deaths}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                duration={1}
                separator=","
                start={0}
                end={data.deaths.value}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
