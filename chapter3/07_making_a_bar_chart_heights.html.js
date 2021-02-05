import * as d3 from "d3";

var w = 500;
var h = 100;
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

//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * (w / dataset.length);
  })
  .attr("y", (d) => {
    return h - d * 4;
  })
  .attr("width", w / dataset.length - barPadding)
  .attr("height", function (d) {
    return d * 4;
  })
  .attr("fill", function (d, i) {
    return "rgb(0, 0, " + Math.round(i * 10) + ")";
  });

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return i * (w / dataset.length) + 5;
  })
  .attr("y", function (d) {
    return h - d * 4 + 11 ;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white");
