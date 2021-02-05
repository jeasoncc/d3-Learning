import * as d3 from "d3";

//Width and height
var w = "100vw";
var h = "1100";
var barPadding = 1;

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
console.log(dataset.length)
//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", (d, i) => i * (h / dataset.length))
  .attr("width", (d, i) => d * 40)
  .attr("height", h / dataset.length - barPadding);
