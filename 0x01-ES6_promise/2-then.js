function handleResponseFromAPI(promise) {

	promise.finally(() => {
		console.log('Got a response from the API');
	}).then((resolve) => {
		return ({ status: 200, body: 'success' });
	}).catch((reject) => {
		return (new Error());
	});

	return promise;
}
