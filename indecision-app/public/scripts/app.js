console.log('App.js is running!');

// JSX - JavaScript XML
var template = <p>This is JSX from app.js!</p>;
// var template = React.createElement(
//     "h1",
//     {id: "someid"},
//     "Something new"

// );

var appRoot = document.getElementById('app');

// ReactDOM.render() takes 2 args: the JSX you'd like to render, and the elemn 
// (where you'd like to render it)
ReactDOM.render(template, appRoot); 