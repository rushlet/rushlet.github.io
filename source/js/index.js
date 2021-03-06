import * as d3 from "d3";

var w = 300;
var h = 100;
var padding = 2;
var dataset = [5, 10, 14, 20, 25];

var svg = d3.select("body").append("svg")
            .attr('width', w)
            .attr('height', h);
svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
.attr({
  x: function(d, index){return index * (w / dataset.length);}),
  y: function(d){ return h - (d*4); }),
  width: w / dataset.length - padding,
  height: funciton(d) { return d*10; },
  fill: function(d) { return `rgb(${d*10}, 0, 0)`; }
});
