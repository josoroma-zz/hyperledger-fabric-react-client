import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import { TableRow, TableCell } from 'material-ui/Table';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

/**
 * A simple Stateless Component.
 * It simply takes the props and maps the specific events to the methods of parent component.
 */

const ComponentRow = ({order}) => (
    <TableRow>
      <TableCell>{order.orderId}</TableCell>
      <TableCell>{order.orderStatus}</TableCell>
      <TableCell>{order.orderer}</TableCell>
      <TableCell>{order.vehicleDetails.make}</TableCell>
    </TableRow>
);

ComponentRow.propTypes = {
  order: PropTypes.object.isRequired
};

export default withStyles(styles)(ComponentRow);
