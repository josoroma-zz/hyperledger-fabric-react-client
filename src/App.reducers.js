import { combineReducers } from 'redux';
import { OrderReducers } from './features/orders/reducers';

/**
 * One root reducer for the whole app.
 * This is done so that the app will have one single reducer to manage lots of other resources.
 * By doing this we are seperating the reducer for the Collection and the Individual Item.
 */
const appReducers = combineReducers({
    orders: OrderReducers
});

export default appReducers;
