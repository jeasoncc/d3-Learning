import * as d3 from "d3";
// import { style } from "d3";
// style
const dataset = [5, 10, 15, 20, 25];
const div = d3
  .select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .text((d, i) => d)
  .style("color", "red")
  .attr("class", "bar");
