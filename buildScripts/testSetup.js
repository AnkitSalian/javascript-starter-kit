//This file isn't transpiled so will be using CommonJS and ES5

//Require babel to transpile before our test runs
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};
