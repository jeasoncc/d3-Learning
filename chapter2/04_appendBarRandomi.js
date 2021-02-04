import * as d3 from "d3";

// const a= new Array(10);
const dataset  = [...Array(40).keys()].map(cur =>  Math.floor(Math.random() * 30))
// console.log(a)
// console.log([...Array(10).keys()])
console.log(dataset)
// for(let a of ){
//   console.log(a)
// }
// const dataset = (() => {
//   const k = new Array(10).map((val, index) => {
//     console.log(index)
//   })
// })()
console.log(dataset)
const div = d3
  .select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .text((d, i) => d)
  .attr("class", "bar")
  .style("color", "red")
  .style("height", (d) => d * 10 + "px");
