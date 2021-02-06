// d3.csv(require("../static/math.csv")).then(function(data) {
//     console.log(data); // [{"Hello": "world"}, …]
//   });
d3.csv(require("../static/math.csv"), function (d) {
  return d;
}).then(function (datas) {
  console.log(datas);
  const values = datas.map(cur => cur.value)
  const times = datas.map(cur => cur.time)
  const types = datas.map(cur => cur.type)
  console.log(times)
  var chart = c3.generate({
    data: {
        columns: [
            values
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: types
        }
    },
    zoom: {
        enabled: true
    }
});

});

