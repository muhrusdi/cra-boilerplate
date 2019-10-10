import cookie from "js-cookie"

/**
 * get token from
 */
export const getToken = () => {
  return cookie.get("accessToken")
}

/**
 * set token
 * @param {string} token 
 */
export const setToken = token => {
  cookie.set("accessToken", token)
}

/**
 * get role from cookie
 */
export const getRole = () => {
  return cookie.get("role")
}

/**
 * set role
 * @param {string} role 
 */
export const setRole = role => {
  cookie.set("role", role)
}

/**
 * set cookie
 * @param {string} key 
 * @param {string} value 
 */
export const setCookie = (key, value) => {
  cookie.set(key, value)
}

/**
 * get cookie from cookie
 * @param {string} key 
 */
export const getCookie = key => {
  return cookie.get(key)
}
