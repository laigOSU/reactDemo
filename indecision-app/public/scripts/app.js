console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>This is JSX from app.js!</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
// var template = React.createElement(
//     "h1",
//     {id: "someid"},
//     "Something new"

// );

var appRoot = document.getElementById('app');

var templateTwo = (
    <div>
        <h1>SUNNY</h1>
        <p>Tengo seis anos</p>
        <p>Soy de Guadalajara</p>
    </div>

);

var appRootDos = document.getElementById('sunnyApp');
// Create a templateTwo car JSX expression
// div (root element)
// h1 -> your name
// p-> age: _
// p-> location:
// render tempalteTwo instaed of template

// ReactDOM.render() takes 2 args: the JSX you'd like to render, and the elemn 
// (where you'd like to render it)
ReactDOM.render(template, appRoot); 
ReactDOM.render(templateTwo, appRootDos); 
