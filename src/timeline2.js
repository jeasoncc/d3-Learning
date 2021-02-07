// d3.csv(require("../static/math.csv")).then(function(data) {
//     console.log(data); // [{"Hello": "world"}, …]
//   });
var labella = require(" ");
console.log(labella)
var nodes = [
    new labella.Node(1, 50), // idealPos, width
    new labella.Node(2, 50),
    new labella.Node(3, 50),
    new labella.Node(3, 50),
    new labella.Node(3, 50),
  ];
  
  var force = new labella.Force()
    .nodes(nodes)
    .compute();
  
  // The rendering is independent from this library.
  // User can use canvas, svg or any library to draw the labels.
  // There is also a built-in helper for this purpose. See labella.Renderer
  draw(force.nodes());
d3.csv(require("../static/time.csv"), function (d) {
  return d;
}).then(function (datas) {
  console.log(datas);
//   const values = datas.map(cur => cur.value)
//   const times = datas.map(cur => cur.time)
//   const types = datas.map(cur => cur.type)
//   console.log(times)
//   var chart = c3.generate({
//     data: {
//         columns: [
//             values
//         ]
//     },
//     axis: {
//         x: {
//             type: 'category',
//             categories: types
//         }
//     },
//     zoom: {
//         enabled: true
//     }
// });

});

