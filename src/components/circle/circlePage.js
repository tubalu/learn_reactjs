"use strict";

var React = require('react');


var Label = React.createClass({
  render: function(){
    var labelStyle = {
			fontFamily: "sans-serif",
			fontWeight: "bold",
            display: "inline-block",
			padding: 10,
			margin: 0
		};
    return (
        <div> 
            <p style={labelStyle}> {this.props.bgColor} </p>
        </div>
    );
  }
});

var Circle = React.createClass({
    render: function () {
        var circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100,
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        return (
            <div style={circleStyle}>
            </div>
        );
    }
});

var Outer = React.createClass({
    render: function () {
        var colors = ["#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4cc3d9", "#cf6cc7", "#db6597", "#4babbd", "#ea9be1", "#ffb6c1", "#ffe4e1", "#f2f2f3", "#ebd3c7", "#5ba68c", "#ebef89", "#92eacc", "#62d7d2", "#abb1e8", "#d0e4b7", "#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4cc3d9", "#cf6cc7", "#db6597", "#4babbd", "#ea9be1", "#ffb6c1", "#ffe4e1", "#f2f2f3", "#ebd3c7", "#5ba68c", "#ebef89", "#92eacc", "#62d7d2", "#abb1e8", "#d0e4b7", "#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4cc3d9", "#cf6cc7", "#db6597", "#4babbd", "#ea9be1", "#ffb6c1", "#ffe4e1", "#f2f2f3", "#ebd3c7", "#5ba68c", "#ebef89", "#92eacc", "#62d7d2", "#abb1e8", "#d0e4b7", "#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4cc3d9", "#cf6cc7", "#db6597", "#4babbd", "#ea9be1", "#ffb6c1", "#ffe4e1", "#f2f2f3", "#ebd3c7", "#5ba68c", "#ebef89", "#92eacc", "#62d7d2", "#abb1e8", "#d0e4b7"];
        var renderData = [];
        for (var i = 0; i < colors.length; i++) {
            renderData.push(<Circle bgColor={colors[i]} /><Label bgColor={colors[i]}/> );
        }
        return (
            <div>
                {renderData}
            </div>
        );
    }
});

module.exports = Outer;
