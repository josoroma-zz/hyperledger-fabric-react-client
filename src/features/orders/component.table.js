import React from 'react';

import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from 'material-ui/Table';

import ComponentRow from './component.row'

/**
 * A simple Stateless Component.
 * It simply takes the props and maps the specific events to the methods of parent component.
 */
const ComponentTable = ({orders}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Orderer</TableCell>
        <TableCell>Maker</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        orders.map(order => {
          return <ComponentRow
            order={order}
            key={order.orderId}
          />
        })
      }
    </TableBody>
  </Table>
);

export default ComponentTable;
