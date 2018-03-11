import { HttpClient } from './http.client';

/**
 * API URL.
 */
const API = 'http://localhost:3000/api';

/**
 * Particpants URI.
 */
const API_ORDER = `${API}/org.acme.vehicle_network.Order`;

/**
 * Create Order.
 * @param {*} order
 */
const create = order => {
  return HttpClient.post(API_ORDER, order);
};

/**
 * Read Order.
 */
const get = () => {
  return HttpClient.get(API_ORDER);
};

/**
 * Update Order.
 * @param {*} order
 */
const update = order => {
  return HttpClient.put(API_ORDER, order);
};

/**
 * Remove Order.
 * @param {*} order
 */
const remove = order => {
  return HttpClient.delete(`${API_ORDER}/${order._id}`);
};

/**
 * ModelOrder Object.
 */
const ModelOrder = {
  create,
  get,
  update,
  remove
}

export { ModelOrder };
