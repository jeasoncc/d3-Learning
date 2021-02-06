import * as d3 from "d3";

//Width and height
var w = document.documentElement.clientWidth-100;
var h = document.documentElement.clientHeight-100;
var padding = 20;

var dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
  [25, 67],
  [85, 21],
  [220, 88],
  [600, 150],
];

//Create scale functions
var xScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d[0];
    }),
  ])
  .range([padding, w - padding * 2]);

var yScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d[1];
    }),
  ])
  .range([h - padding, padding]);

var aScale = d3
  .scaleSqrt()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d[1];
    }),
  ])
  .range([0, 10]);

//Define X axis
var xAxis = d3.axisBottom().scale(xScale);
//   .ticks(5);
//Define Y axis
var yAxis = d3.axisLeft().scale(yScale).ticks(5);
//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Create circles
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return xScale(d[0]);
  })
  .attr("cy", function (d) {
    return yScale(d[1]);
  })
  .attr("r", function (d) {
    return aScale(d[1]);
  });

//Create labels
svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d[0] + "," + d[1];
  })
  .attr("x", function (d) {
    return xScale(d[0]);
  })
  .attr("y", function (d) {
    return yScale(d[1]);
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red");

//Create X axis
svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);
//Create Y axis
svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);