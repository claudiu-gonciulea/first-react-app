import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var buttonElement = <button class="btn btn-danger">Click me</button>;
ReactDOM.render(buttonElement, document.getElementById("root"));
