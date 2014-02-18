a = function() {
	console.log('test');
};

alert((function() {console.log('test');}).toString());
