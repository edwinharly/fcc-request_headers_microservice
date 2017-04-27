"use strict";

const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
	let data = {
		"ipaddress": null,
		"language": null,
		"os": null
	};
	
	data.ipaddress = req.ip.split(':')[3];
	data.language = req.headers['accept-language'].split(',')[0];
	data.os = req.headers['user-agent'].split(' ')[2] + ' ' + req.headers['user-agent'].split(' ')[3].split(')')[0].split(',');
	/*
	console.log(data.ipaddress);
	console.log(data.language);
	console.log(data.os);
	*/
	res.send(data);
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server is running!') ;
});
