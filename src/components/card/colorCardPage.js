"use strict";

var React = require('react');


var Square = React.createClass({
	render: function() {
    var squareStyle = {
      height: 75,
      backgroundColor: this.props.color
    };
    return (
      <div style={squareStyle} />
    );
  }
});

var Label = React.createClass({
  render: function(){
    var labelStyle = {
			fontFamily: "sans-serif",
			fontWeight: "bold",
			padding: 5,
			margin: 0
		};
    return (
      <p style={labelStyle}> {this.props.color} </p>
    );
  }
});


var Card = React.createClass({
  render: function(){
    var cardStyle = {
      height: 100,
      width: 75,
      padding: 0,
      margin: 10,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
			filter: "drop-shadow(0px 0px 5px #666)",
      display: "inline-block"
		};
    return (
      <div style={cardStyle} >
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    );
  }
});

var ColorCard = React.createClass({
	render: function() {
		return (
			<div>
				<Card color="#58B3FF" />
				<Card color="#FF605F" />
				<Card color="#FFD52E" />
				<Card color="#49DD8E" />
				<Card color="#AE99FF" />
				<Card color="#4cc3d9" />
				<Card color="#cf6cc7" />
				<Card color="#db6597" />
				<Card color="#4babbd" />
				<Card color="#ea9be1" />
				<Card color="#ffb6c1" />
				<Card color="#ffe4e1" />
				<Card color="#f2f2f3" />
				<Card color="#ebd3c7" />
				<Card color="#5ba68c" />
				<Card color="#ebef89" />
				<Card color="#92eacc" />
				<Card color="#62d7d2" />
				<Card color="#abb1e8" />
				<Card color="#d0e4b7" />
				<Card color="#58B3FF" />
				<Card color="#FF605F" />
				<Card color="#FFD52E" />
				<Card color="#49DD8E" />
				<Card color="#AE99FF" />
				<Card color="#4cc3d9" />
				<Card color="#cf6cc7" />
				<Card color="#db6597" />
				<Card color="#4babbd" />
				<Card color="#ea9be1" />
				<Card color="#ffb6c1" />
				<Card color="#ffe4e1" />
				<Card color="#f2f2f3" />
				<Card color="#ebd3c7" />
				<Card color="#5ba68c" />
				<Card color="#ebef89" />
				<Card color="#92eacc" />
				<Card color="#62d7d2" />
				<Card color="#abb1e8" />
				<Card color="#d0e4b7" />
				<Card color="#58B3FF" />
				<Card color="#FF605F" />
				<Card color="#FFD52E" />
				<Card color="#49DD8E" />
				<Card color="#AE99FF" />
				<Card color="#4cc3d9" />
				<Card color="#cf6cc7" />
				<Card color="#db6597" />
				<Card color="#4babbd" />
				<Card color="#ea9be1" />
				<Card color="#ffb6c1" />
				<Card color="#ffe4e1" />
				<Card color="#f2f2f3" />
				<Card color="#ebd3c7" />
				<Card color="#5ba68c" />
				<Card color="#ebef89" />
				<Card color="#92eacc" />
				<Card color="#62d7d2" />
				<Card color="#abb1e8" />
				<Card color="#d0e4b7" />
				<Card color="#58B3FF" />
				<Card color="#FF605F" />
				<Card color="#FFD52E" />
				<Card color="#49DD8E" />
				<Card color="#AE99FF" />
				<Card color="#4cc3d9" />
				<Card color="#cf6cc7" />
				<Card color="#db6597" />
				<Card color="#4babbd" />
				<Card color="#ea9be1" />
				<Card color="#ffb6c1" />
				<Card color="#ffe4e1" />
				<Card color="#f2f2f3" />
				<Card color="#ebd3c7" />
				<Card color="#5ba68c" />
				<Card color="#ebef89" />
				<Card color="#92eacc" />
				<Card color="#62d7d2" />
				<Card color="#abb1e8" />
				<Card color="#d0e4b7" />
			</div>
		);
	}
});


module.exports = ColorCard;