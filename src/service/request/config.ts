let BASE_URL = ''
let TIME_OUT = 0

// if (process.env.NODE_) export const BASE_URL = 'http://123.207.32.32:8000'
// export const TIME_OUT = 5000
// webpack
// process.env.NODE_ENV === 'development'
if (import.meta.env.DEV) {
  BASE_URL = '/api'
  TIME_OUT = 1000
} else if (import.meta.env.PROD) {
  BASE_URL = '/api'
  TIME_OUT = 2000
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://123.207.32.32:8000/test'
  TIME_OUT = 3000
}

export { BASE_URL, TIME_OUT }
