/**
 * Using the ES6 destructuring assignment we can import a subset of a module
 * which can be quite useful for modules like react-router and underscore where
 * it exports more than one function.
 *
 * One thing to keep in mind is that ES6 imports are hoisted. All dependent
 * modules will be loaded before any of the module code is executed. In other
 * words, you can't conditionally load a module like with CommonJS. That did
 * throw me off a little when I tried to import a module inside an if-else
 * condition.
 *
 * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 */


// ES6
import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

// ES5
var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
