import * as d3Request from 'd3-request';
import * as d3 from "d3";

var body = d3.select("body");
var div = body.append("div");
div.html("Hello, world!");

var data = [4, 8, 15, 16, 23, 42];

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 590]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .classed("bar", true)
    .text(function(d) { return d; });
