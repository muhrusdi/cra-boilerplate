import cookie from "js-cookie";

export { default as theme } from "./theme";
/**
 * get token from
 */
export const getToken = () => cookie.get("accessToken");

/**
 * set token
 * @param {string} token
 */
export const setToken = (token) => {
  cookie.set("accessToken", token);
};

/**
 * get role from cookie
 */
export const getRole = () => cookie.get("role");

/**
 * set role
 * @param {string} role
 */
export const setRole = (role) => {
  cookie.set("role", role);
};

/**
 * set cookie
 * @param {string} key
 * @param {string} value
 */
export const setCookie = (key, value) => {
  cookie.set(key, value);
};

/**
 * get cookie from cookie browser
 * @param {string} key
 */
export const getCookie = (key) => cookie.get(key);


/**
 *  remove token
 * */
export const removeCookie = () => {
  // cookie.remove("accessToken");
  // cookie.remove("role");
  cookie.remove("accessToken");
  cookie.remove("email");
  cookie.remove("name");
  cookie.remove("username");
  cookie.remove("photo");
  cookie.remove("phone");
};

/**
 * media queries
 */

export const minSM = "@media (min-width: 577.98px)";
export const minMD = "@media (min-width: 769.98px)";
export const minLG = "@media (min-width: 993.98px)";
export const minXL = "@media (min-width: 1201.98px)";

export const maxSM = "@media (max-width: 575.98px)";
export const maxMD = "@media (max-width: 767.98px)";
export const maxLG = "@media (max-width: 991.98px)";
export const maxXL = "@media (max-width: 1199.98px)";

export const media = ({ type = "min", width = 993.98 }) => `@media (${type}-width: ${width}px)`;

export const redirect = (code, path = "/login", cb) => {
  if (code === "401") {
    removeCookie();
    window.location.href = path;
  } else {
    cb();
  }
};

