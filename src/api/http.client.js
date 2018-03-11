import axios from 'axios';

/**
 * Axios http Client. Every API call will be made through this Client.
 *
 * Further modifications in this layer can be done later (e.g Auth).
 */

/**
 * Post Request.
 * @param {string} url
 * @param {string} data
 * @param {Object} config
 */
const post = (url = '', data = '', config = {}) => {
  return axios.post(url, data, config);
};

/**
 * Get Request.
 * @param {string} url
 */
const get = (url) => {
  return axios(url);
};

/**
 * Put Request.
 * @param {string} url
 * @param {string} data
 * @param {Object} config
 */
const put = (url = '', data = '', config = {}) => {
  return axios.put(url, data, config);
};

/**
 * Remove Request.
 * Cannot contain a delete method - Cause delete is a keyword.
 * @param {string} url
 * @param {Object} config
 */
const remove = (url = '', config = {}) => {
  return axios.delete(url, config);
};

/**
 * HttpClient Object.
 */
const HttpClient = {
  post,
  get,
  put,
  remove
};

export { HttpClient };
