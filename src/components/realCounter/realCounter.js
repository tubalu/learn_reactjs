"use strict";
var React = require('react');

var Counter = React.createClass({
    render: function () {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };
        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
});
var CounterParent = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    increase: function (e) {
        var currentCount = this.state.count;
        if(e.shiftKey){
            currentCount += 10;
        }
        else {
            currentCount++;
        }
        this.setState({
            count: currentCount
        });
    },
    render: function () {
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 200,
            borderRadius: 10,
            textAlign: "center"
        };
        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                <button style={buttonStyle} onClick={this.increase}>+</button>
            </div>
        );
    }
});
var Outer = React.createClass({
    render: function () {
        return (
            <div>
                <CounterParent/>
            </div>
        );
    }
});
module.exports = Outer;