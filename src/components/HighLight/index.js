import { Grid } from "@material-ui/core";
import React from "react";
import { HighLightCart } from "./HighLightCart";

export const HighLight = ({ report }) => {
  const data = report && report.length ? report[report.length - 1] : [];
  console.log("1: ", data.Confirmed);
  console.log("2: ", data.Recovered);
  console.log("3: ", data.Deaths);
  const summary = [
    {
      title: "So ca nhiem",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "So ca khoi",
      count: data.Active,
      type: "recovered",
    },
    {
      title: "So ca tu vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item, index) => (
        <Grid key={index} item sm={4} xs={12}>
          <HighLightCart
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};
