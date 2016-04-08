const parseJSON = (response) => {
	return response.json()
}

//object 只考虑 简单传值
const addQueryStr = (url, params) => {
	if(!params) {
		return url;
	}
	if(typeof params == 'string') {
		params = params.replace(/^&/, '')
	} else if(typeof params == 'object') {
		params = Object.keys(params).map((k) => {
			return `${k}=${params[k]}`
		}).join('&')
	} else {
		params = ''
	}
	if(url.indexOf('?') == -1) {
		url = `${url}?${params}`
	} else {
		url = `${url}&${params}`
	}
	return url
}

export function wget(url, options) {
	return fetch(addQueryStr(url, options && options.query))
		.then(parseJSON)
		.catch((error)=> {
			console.log('request failed', error)
		})
}