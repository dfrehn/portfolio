import React, { Component } from "react";
import { render } from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Image from "react-shimmer";
import { Grid } from "@material-ui/core";

//1-25
import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import day3 from "../assets/day3.jpg";
import day4 from "../assets/day4.jpg";
import day5 from "../assets/day5.jpg";
import day6 from "../assets/day6.jpg";
import day7 from "../assets/day7.jpg";
import day8 from "../assets/day8.jpg";
import day9 from "../assets/day9.jpg";
import day10 from "../assets/day10.jpg";
import day11 from "../assets/day11.jpg";
import day12 from "../assets/day12.jpg";
import day13 from "../assets/day13.jpg";
import day14 from "../assets/day14.jpg";
import day15 from "../assets/day15.jpg";
import day16 from "../assets/day16.jpg";
import day17 from "../assets/day17.jpg";
import day18 from "../assets/day18.jpg";
import day19 from "../assets/day19.jpg";
import day20 from "../assets/day20.jpg";
import day21 from "../assets/day21.jpg";
import day22 from "../assets/day22.jpg";
import day23 from "../assets/day23.jpg";
import day24 from "../assets/day24.jpg";
import day25 from "../assets/day25.jpg";
//26-50
import day26 from "../assets/day26.jpg";
import day27 from "../assets/day27.jpg";
import day28 from "../assets/day28.jpg";
import day29 from "../assets/day29.jpg";
import day30 from "../assets/day30.jpg";
import day31 from "../assets/day31.jpg";
import day32 from "../assets/day32.jpg";
import day33 from "../assets/day33.jpg";
import day34 from "../assets/day34.jpg";
import day35 from "../assets/day35.jpg";
import day36 from "../assets/day36.jpg";
import day37 from "../assets/day37.jpg";
import day38 from "../assets/day38.jpg";
import day39 from "../assets/day39.jpg";
import day40 from "../assets/day40.jpg";
import day41 from "../assets/day41.jpg";
import day42 from "../assets/day42.jpg";
import day43 from "../assets/day43.jpg";
import day44 from "../assets/day44.jpg";
import day45 from "../assets/day45.jpg";
import day46 from "../assets/day46.jpg";
import day47 from "../assets/day47.jpg";
import day48 from "../assets/day48.jpg";
import day49 from "../assets/day49.jpg";
import day50 from "../assets/day50.jpg";
//51-75
import day51 from "../assets/day51.jpg";
import day52 from "../assets/day52.jpg";
import day53 from "../assets/day53.jpg";
import day54 from "../assets/day54.jpg";
import day55 from "../assets/day55.jpg";
import day56 from "../assets/day56.jpg";
import day57 from "../assets/day57.jpg";
import day58 from "../assets/day58.jpg";
import day59 from "../assets/day59.jpg";
import day60 from "../assets/day60.jpg";
import day61 from "../assets/day61.jpg";
import day62 from "../assets/day62.jpg";
import day63 from "../assets/day63.jpg";
import day64 from "../assets/day64.jpg";
import day65 from "../assets/day65.jpg";
import day66 from "../assets/day66.jpg";
import day67 from "../assets/day67.jpg";
import day68 from "../assets/day68.jpg";
import day69 from "../assets/day69.jpg";
import day70 from "../assets/day70.jpg";
import day71 from "../assets/day71.jpg";
import day72 from "../assets/day72.jpg";
import day73 from "../assets/day73.jpg";
import day74 from "../assets/day74.jpg";
import day75 from "../assets/day75.jpg";

//76-100
import day76 from "../assets/day76.jpg";
import day77 from "../assets/day77.jpg";
import day78 from "../assets/day78.jpg";
import day79 from "../assets/day79.jpg";
import day80 from "../assets/day80.jpg";
import day81 from "../assets/day81.jpg";
import day82 from "../assets/day82.jpg";
import day83 from "../assets/day83.jpg";
import day84 from "../assets/day84.jpg";
import day85 from "../assets/day85.jpg";
import day86 from "../assets/day86.jpg";
import day87 from "../assets/day87.jpg";
import day88 from "../assets/day88.jpg";
import day89 from "../assets/day89.jpg";
import day90 from "../assets/day90.jpg";
import day91 from "../assets/day91.jpg";
import day92 from "../assets/day92.jpg";
import day93 from "../assets/day93.jpg";
import day94 from "../assets/day94.jpg";
import day95 from "../assets/day95.jpg";
import day96 from "../assets/day96.jpg";
import day97 from "../assets/day97.jpg";
import day98 from "../assets/day98.jpg";
import day99 from "../assets/day99.jpg";
import day100 from "../assets/day100.jpg";

const styles = theme => ({
  container: {
    marginTop: 400,
    [theme.breakpoints.down("sm")]: {}
  },
  poster: {
    marginBottom: 25
  },
  title: {
    fontFamily: "eurostileDemi"
  }
});

export class Shimmer extends React.Component {
  render() {
    const { classes } = this.props;
    let loop=[];
    for (let index = 1; index < 100; index++) {
      loop.push(
        <>
          <Image
            src={require(`../assets/day${index}.jpg`)}
            width={200}
            height={280}
            style={{ objectFit: "cover" }}
          />
          <Grid item sm={4}></Grid>
          <Grid item sm={8} align="left" className={classes.title}>
            {`day ${index}`}
          </Grid>{" "}
        </>
      );
    }
    console.log(loop)
    return (
      <Grid container sm={12} align="center" className={classes.container}>
        <Grid item sm={4} />
        <Grid item sm={2} className={classes.poster}>
          {loop}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Shimmer);
