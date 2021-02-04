import * as d3 from "d3";
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
var w = 1500;
var h = 1500;
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
// var circles = svg.selectAll("circle").data(dataset).enter().append("ellipse");
// circles
//   .attr("cx", function (d, i) {
//     return i * 50 + 25;
//   })
//   .attr("cy", h / 2)
//   .attr("rx", function (d) {
//     return d;
//   })
//   .attr("ry", function (d, i) {
//     return i * 10;
//   })
//   .attr("fill", "yellow")
//   .attr("stroke", "orange")
//   .attr("stroke-width", function (d) {
//     return d / 2;
//   });

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => d * 40)
  .attr("y", (d, i) => i * 22)
  .attr("width", (d, i) => d * 20)
  .attr("height", 20)
  .attr("stroke", "orange")
  .attr("fill", "yellow");
