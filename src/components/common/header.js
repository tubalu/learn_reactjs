"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src="images/leeco.png" width="60px" />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="scott">Scott</Link></li>
            <li><Link to="colorCard">Card</Link></li>
            <li><Link to="counter">Counter</Link></li>
            <li><Link to="circle">Circle</Link></li>
            <li><Link to="realCounter">Button Counter</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
