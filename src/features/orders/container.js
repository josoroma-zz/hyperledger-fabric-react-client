import React, { Component } from 'react';

import { PropTypes } from 'prop-types'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Orders OrderActions.
 */
import * as OrderActions from './actions';

import ComponentTable from './component.table';

export class OrderContainer extends Component {
  componentDidMount() {
    /**
     * Dispatch a Get Order Action.
     */
    this.props.actions.orders.Get();
  }

  render() {
    return (
      <ComponentTable
        orders={this.props.orders}
      />
    );
  }
}

/**
 *  OrderContainer - Property types.
 */
OrderContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired
}

/**
 *  OrderContainer - Mapping the `state` to `props`.
 */
function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders
  }
}

/**
 *  OrderContainer - Mapping the `dispatch` to `props`.
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      orders: bindActionCreators(OrderActions, dispatch)
    }
  }
}

/**
 * Makes OrderContainer functional.
 * Connects the Redux `state` and `dispatch` to the OrderContainer.
 */
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
