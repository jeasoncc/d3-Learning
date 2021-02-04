import * as d3 from "d3";
const dataset = [
  25,
  7,
  5,
  26,
  11,
  8,
  25,
  14,
  23,
  19,
  14,
  11,
  22,
  29,
  11,
  13,
  12,
  17,
  18,
  10,
  24,
  18,
  25,
  9,
  3,
];
const div = d3
  .select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .text((d, i) => d)
  .style("color", "red")
  .attr("class", "bar")
  .style("height", (d) => d * 10 + "px");
