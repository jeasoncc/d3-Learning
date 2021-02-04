import * as d3 from "d3";

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

d3.select("body").selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar")
.text(d => d)
.style("display", "block")
.style("height", "30px")
.style("margin", "10px")
.style("width", function(d) {
var barHeight = d * 15;
return barHeight + "px";
});