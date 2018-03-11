import * as OrderActions from './actions';

/**
 * We are dividing the reducers using a technique called Reducer composition.
 * By doing this we are seperating the reducer for the Collection and the Individual Item.
 */

/**
 * It handles the Collection Reducer.
 */
export function OrderReducers(state = [], action) {
  switch (action.type) {
    /**
     * CREATE.
     */
    case OrderActions.CREATE_SUCCESS: {
      return [
        ...state,
        action.order
      ];
    }

    /**
     * READ.
     */
    case OrderActions.GET_SUCCESS: {
      return action.orders;
    }

    /**
     * UPDATE.
     *
     * The following Cases handle the data by mapping it.
     * Mostly because they are related with the modification of single data.
     */
    case OrderActions.START_EDITING: {
      return state.map(state => order(state, action));
    }

    case OrderActions.CANCEL_EDITING: {
      return state.map(state => order(state, action));
    }

    case OrderActions.UPDATE: {
      return state.map(state => order(state, action));
    }

    case OrderActions.UPDATE_SUCCESS: {
      return state.map(state => order(state, action));
    }

    /**
     * DELETE.
     */
    case OrderActions.DELETE: {
      return state.map(state => order(state, action));
    }

    case OrderActions.DELETE_SUCCESS: {
      return state.filter(state => order(state, action));
    }

    /**
     * DEFAULT.
     */
    default: return state;
  }
}

/**
 * It handles the individual Reducer.
 * Only one Object at a time.
 */
const order = (state, action) => {
  /**
   * If the mapped order of the previous state matches with the new ID of the action,
   * only then proceed to the Reducer Switch case.
   */
  if (state._id !== (action._id || action.order._id)) {
    return state;
  }

  switch(action.type) {
    /**
     * Edits/modifies the individual Participants using ES6 spread operator.
     */
    case OrderActions.START_EDITING: {
      return {
        ...state,
        editing: true
      };
    }

    case OrderActions.CANCEL_EDITING: {
      return {
        ...state,
        editing: false
      };
    }

    case OrderActions.UPDATE: {
      return {
        ...state,
        editing: false,
        updating: true
      };
    }

    case OrderActions.UPDATE_SUCCESS: {
      return {
        ...state,
        ...action.order,
        updating: false
      };
    }

    case OrderActions.DELETE: {
      return {
        ...state,
        deleting: true
      };
    }

    case OrderActions.DELETE_SUCCESS: {
      return false;
    }

    /**
     * DEFAULT.
     */
    default: {
      return state;
    }
  }
};
