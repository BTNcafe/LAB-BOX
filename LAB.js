require('./UPPERCASE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	SERVER_CONFIG : {
		dbName : 'LAB-test',
		isNotRequiringDBAuth : true
	}
});
