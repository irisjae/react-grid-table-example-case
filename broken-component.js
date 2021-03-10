let React = require ('react')
let ReactDOM = require ('react-dom')
let { useState, useEffect } = require ('react')
let GridTable = require ('@nadavshaar/react-grid-table') .default
document .addEventListener ('DOMContentLoaded', _ => {
	ReactDOM .render (React .createElement (GridTable, null), document .querySelector ('div'));
} )
