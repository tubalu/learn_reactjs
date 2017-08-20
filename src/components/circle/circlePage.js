"use strict";

var React = require('react');


var Label = React.createClass({
  render: function(){
    var labelStyle = {
			fontFamily: "sans-serif",
			fontWeight: "bold",
			paddingTop: 5,
			paddingLeft: 22,
			margin: 0
		};
    return (
        <p style={labelStyle}> {this.props.bgColor} </p>
    );
  }
});

var Circle = React.createClass({
    render: function () {
        var circleStyle = {
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100,
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        return (
            <div style={circleStyle}> </div>
        );
    }
});

var Card = React.createClass({
    render: function(){
        var cardStyle = {
            padding: 10,
            margin: 10,
            display: "inline-block"
        };
      return (
        <div style={cardStyle} >
            <Circle bgColor={this.props.color} />
            <Label bgColor={this.props.color} />
        </div>
      );
    }
  });

var Outer = React.createClass({
    render: function () {
        var colors = ["#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4CC3D9", "#CF6CC7", "#DB6597", "#4BABBD", "#EA9BE1", "#FFB6C1", "#FFE4E1", "#F2F2F3", "#EBD3C7", "#5BA68C", "#EBEF89", "#92EACC", "#62D7D2", "#ABB1E8", "#D0E4B7", "#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4CC3D9", "#CF6CC7", "#DB6597", "#4BABBD", "#EA9BE1", "#FFB6C1", "#FFE4E1", "#F2F2F3", "#EBD3C7", "#5BA68C", "#EBEF89", "#92EACC", "#62D7D2", "#ABB1E8", "#D0E4B7", "#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4CC3D9", "#CF6CC7", "#DB6597", "#4BABBD", "#EA9BE1", "#FFB6C1", "#FFE4E1", "#F2F2F3", "#EBD3C7", "#5BA68C", "#EBEF89", "#92EACC", "#62D7D2", "#ABB1E8", "#D0E4B7", "#58B3FF", "#FF605F", "#FFD52E", "#49DD8E", "#AE99FF", "#4CC3D9", "#CF6CC7", "#DB6597", "#4BABBD", "#EA9BE1", "#FFB6C1", "#FFE4E1", "#F2F2F3", "#EBD3C7", "#5BA68C", "#EBEF89", "#92EACC", "#62D7D2", "#ABB1E8", "#D0E4B7"];
        var renderData = [];
        for (var i = 0; i < colors.length; i++) {
        renderData.push(<Card color={colors[i]} />);
        }
        return (
            <div>
                {renderData}
            </div>
        );
    }
});

module.exports = Outer;
