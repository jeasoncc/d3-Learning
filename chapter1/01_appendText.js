import * as d3 from "d3";
/**
 *  在html中插入一个简单的文本
 *
 */

/**
 * JSdom写法
 *
 */
// document.querySelector("body").append(
//   (() => {
//     const ele = document.createElement("p");
//     ele.innerText = "hello world";
//     return ele;
//   })()
// );

/**
 * D3写法
 *
 */
d3.select("body").append("p").text("hello world");

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