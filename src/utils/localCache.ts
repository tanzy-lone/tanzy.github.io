class LocalCache {
	setCache(key: string, value: any, isLocalStorage: boolean = true) {
		if (isLocalStorage) {
			window.localStorage.setItem(key, JSON.stringify(value))
		} else {
			window.sessionStorage.setItem(key, JSON.stringify(value))
		}
	}
	getCache(key: string, isLocalStorage: boolean = true) {
		const value = isLocalStorage ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key)
		if (value) {
			return JSON.parse(value)
		} else {
			return undefined
		}
	}

	deleteCache(key: string, isLocalStorage: boolean = true) {
		if (isLocalStorage) {
			window.localStorage.removeItem(key)
		} else {
			window.sessionStorage.removeItem(key)
		}
	}
	clearCache(isLocalStorage: boolean = true) {
		if (isLocalStorage) {
			window.localStorage.clear()
		} else {
			window.sessionStorage.clear()
		}
	}
}

export default new LocalCache()
