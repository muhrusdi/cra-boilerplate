import { getToken, redirect } from ".";

const _HOST = "http://api-dev.realtravelfinance.com";

export const HOST = process.env.HOST_PROD || _HOST;
const VERSION = "/v1";

export const LOGIN = "/admin/auth/login";
export const CRUD_COMPANY = "/admin/master/company";
export const UPDATE_STATUS_COMPANY = "/admin/master/companyStatus";
export const SUSPEND_COMPANY = "/admin/master/company/suspend";
export const READ_ALL_COUNTRY = "/admin/master/country";
export const READ_ALL_CITY = "/admin/master/country";
export const CRUD_BRANCH_COMPANY = "/admin/master/companyBranch";
export const CRUD_USER = "/admin/master/user";

const AUTH = `Bearer ${getToken()}`;

export const multiFetch = (path) => new Promise((resolve, reject) => Promise.all(path)
  .then((values) => Promise.all(values.map((value) => value.json())))
  .then((data) => {
    redirect(data.diagnostic.status, "/login", resolve(data));
  })
  .catch((err) => {
    reject(err);
  }));

export const globalFetch = (method = "GET", path) => new Promise((resolve, reject) => {
  fetch(`${HOST}${path}`, {
    method,
    headers: {
      Authorization: AUTH,
    },
  })
    .then((res) => {
      if (!res.ok) {
        reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      redirect(data.diagnostic.status, "/login", resolve(data));
    })
    .catch((err) => {
      reject(err);
    });
});

export const globalPost = (path, headers, body) => new Promise((resolve, reject) => {
  fetch(`${HOST}${path}`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body,
  })
    .then((res) => {
      if (!res.ok) {
        reject(res.statusText);
      }
      // console.log(res.headers);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // redirect(data.diagnostic.status, "/login", resolve(data));
    })
    .catch((err) => {
      reject(err);
    });
});
