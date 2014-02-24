require('./UPPERCASE/BOOT.js');

BOOT({
	CONFIG : {
		port : 8887,
		isDevMode : true
	},
	SERVER_CONFIG : {
		dbName : 'LAB-test',
		isNotRequiringDBAuth : true
	}
});
