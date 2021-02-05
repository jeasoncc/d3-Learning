import * as d3 from "d3";

var w = 1500;
var h = 1100;

var dataset = [
  5,
  10,
  13,
  19,
  21,
  25,
  22,
  18,
  15,
  13,
  11,
  12,
  15,
  20,
  18,
  17,
  16,
  18,
  23,
  25,
];

//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", (d,i) => i * 21)
  .attr("width", (d,i) => d * 20)
  .attr("height", 20);
