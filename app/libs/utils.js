const Utils = {
	isObject(obj) {
		return Object.prototype.toString.call(obj) === '[object Object]'
	}
}

export default Utils