import * as d3 from "d3";

/**
 * D3写法
 *
 */
// d3.select("body").append("div")
const dataset = [5, 10, 15, 20, 25];
const div = d3
  .select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .text((d,i) => d).style("color", "red");
console.log(div)
/**
 * @function select
 * Selects the first element that matches the specified selector string.
 * If no elements match the selector, returns an empty selection.
 * If multiple elements match the selector, only the first matching element (in document order) will be selected
 */

/**
 * @function append
 * If the specified type is a string,
 * appends a new element of this type (tag name) as the last child of each selected element
 */

/**
 * @function text
 * If a value is specified, sets the text content to the specified value on all selected elements, replacing any existing child elements.
 *  If the value is a constant, then all elements are given the same text content;
 * otherwise, if the value is a function, it is evaluated for each selected element
 */

/**
 * @function data
 * Binds the specified array of data with the selected elements, returning a new selection
 *  that represents the update selection:
 * the elements successfully bound to data.
 */
