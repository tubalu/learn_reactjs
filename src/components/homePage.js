"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
			</div>
		);
	}
});

module.exports = Home;