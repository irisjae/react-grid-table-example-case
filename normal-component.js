let React = require ('react')
let ReactDOM = require ('react-dom')
let Loader = require ('react-loader-spinner') .default
document .addEventListener ('DOMContentLoaded', _ => {
	ReactDOM .render (React .createElement (Loader, null), document .querySelector ('div'));
} )
