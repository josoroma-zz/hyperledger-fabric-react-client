import { ModelOrder } from '../../api/model.order';

/**
 * `Action type constants`. Ordered by CRUD order.
 * Pattern: `Action`, `Action_Success` and `Action_Error` action types for the Async actions.
 */

/**
 * CREATE Action type constants.
 */
export const CREATE = '[Order] CREATE'
export const CREATE_SUCCESS = '[Order] CREATE_SUCCESS'
export const CREATE_ERROR = '[Order] CREATE_ERROR'

/**
 * READ Action type constants.
 */
export const GET = '[Order] GET'
export const GET_SUCCESS = '[Order] GET_SUCCESS'
export const GET_ERROR = '[Order] GET_ERROR'

/**
 * UPDATE Action type constants.
 */
export const START_EDITING = '[Order] START_EDITING'
export const CANCEL_EDITING = '[Order] CANCEL_EDITING'

export const UPDATE = '[Order] UPDATE'
export const UPDATE_SUCCESS = '[Order] UPDATE_SUCCESS'
export const UPDATE_ERROR = '[Order] UPDATE_ERROR'

export const COMPLETE = 'COMPLETE'

/**
 * DELETE Action type constants.
 */
export const DELETE = '[Order] DELETE'
export const DELETE_SUCCESS = '[Order] DELETE_SUCCESS'
export const DELETE_ERROR = '[Order] DELETE_ERROR'

/**
 * `Action types` also ordered in CRUD Order.
 * `dispatch` and `getstate` are provided by the Redux-Thunk middleware, we can dispatch actions with it.
 */

/**
 * CREATE Action types.
 */

export function Create(order) {
  return (dispatch, getState) => {
    return ModelOrder.create(order).then(response => {
      dispatch(CreateSuccess(response.data.data));
    });
  };
}

export function CreateSuccess(order) {
  return {
    type: CREATE_SUCCESS,
    order
  };
}

/**
 * READ Action types.
 */

export function Get() {
  return (dispatch, getState) => {
    return ModelOrder.get().then(response => {
      dispatch(GetSuccess(response.data));
    });
  };
}

export function GetSuccess(orders) {
  return {
    type: GET_SUCCESS,
    orders
  };
}

/**
 * UPDATE Action types.
 */

export function StartEditing(_id) {
  return {
    type: START_EDITING,
    _id
  };
}

export function CancelEditing(_id) {
  return {
    type: CANCEL_EDITING,
    _id
  };
}

export function Update(order) {
  return (dispatch, getState) => {
    /**
     * Sent multiple actions usign the Redux-Thunk middleware.
     */
    dispatch({
      type: UPDATE,
      order
    });

    ModelOrder.update(order).then(response => {
      dispatch(UpdateSuccess(response.data.data))
    });
  };
}

export function UpdateSuccess(order) {
  return {
    type: UPDATE_SUCCESS,
    order,
    _id: order._id
  }
}

/**
 * DELETE Action types.
 */

export function Delete(order) {
  return (dispatch, getState) => {
    /**
     * Sent multiple actions usign the Redux-Thunk middleware.
     */
    dispatch({
      type: DELETE,
      order
    });

    ModelOrder.remove(order).then(response => {
      if (response.status === 204) {
        dispatch(DeleteSuccess(order))
      }
    });
  };
}

export function DeleteSuccess(order) {
  return {
    type: DELETE_SUCCESS,
    order,
    _id: order._id
  };
}
