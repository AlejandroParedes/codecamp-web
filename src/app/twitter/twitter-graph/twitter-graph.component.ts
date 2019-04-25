import { Component, OnInit } from '@angular/core';
import * as dagreD3 from 'dagre-d3';
import * as d3 from 'd3';
import * as graphlibDot from 'graphlib-dot';

@Component({
  selector: 'app-twitter-graph',
  templateUrl: './twitter-graph.component.html',
  styleUrls: ['./twitter-graph.component.scss']
})
export class TwitterGraphComponent implements OnInit {

  public graphString: string;
  constructor() { }

  ngOnInit() {
    this.graphString = `
digraph {
    /* Note: HTML labels do not work in IE, which lacks support for <foreignObject> tags. */
    node [rx=5 ry=5 labelStyle="font: 300 14px 'Helvetica Neue', Helvetica"]
    edge [labelStyle="font: 300 14px 'Helvetica Neue', Helvetica"]
    A [labelType="html"
       label="A <span style='font-size:32px'>Big</span> <span style='color:red;'>HTML</span> Source!"];
    C;
    E [label="Bold Red Sink" style="fill: #f77; font-weight: bold"];
    A -> B -> C;
    B -> D [label="A blue label" labelStyle="fill: #55f; font-weight: bold;"];
    D -> E [label="A thick red edge" style="stroke: #f77; stroke-width: 2px;" arrowheadStyle="fill: #f77"];
    C -> E;
    A -> D [labelType="html" label="A multi-rank <span style='color:blue;'>HTML</span> edge!"];
}

    `;
    this.getGraphData();
  }

  getGraphData() {
    var inputGraph = document.querySelector("#inputGraph");
    var oldInputGraphValue;
    // Set up zoom support
    var svg = d3.select("svg"),
        inner = d3.select("svg g"),
        zoom = d3.zoom().on("zoom", function() {
          inner.attr("transform", d3.event.transform);
        });
    svg.call(zoom);
    // Create and configure the renderer
    var render = dagreD3.render();
    var g;
      try {
        g = graphlibDot.read(this.graphString);
      } catch (e) {
        console.log(e);
        throw e;
      }
      // Set margins, if not present
      if (!g.graph().hasOwnProperty("marginx") &&
          !g.graph().hasOwnProperty("marginy")) {
        g.graph().marginx = 20;
        g.graph().marginy = 20;
      }
      g.graph().transition = function(selection) {
        return selection.transition().duration(500);
      };
      // Render the graph into svg g
      d3.select("svg g").call(render, g);
  }

}
