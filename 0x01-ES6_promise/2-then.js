function handleResponseFromAPI(promise) {

	promise.finally(() => {
		console.log('Got a response from the API');
	}).then(() => {
		return ({ status: 200, body: 'success' });
	}).catch(() => {
		return (new Error());
	});

	return promise;
}
