import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { badgeBg } from '../constants/order.constants';
import { currencyFormat } from '../utils/number';

const OrderStatusCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'preparing':
        return 'primary';
      case 'shipping':
        return 'warning';
      case 'refund':
        return 'danger';
      case 'delivered':
        return 'success';
      default:
        return 'default';
    }
  };
  const badgeBgColor = getStatusColor(order.status);
  return (
    <div>
      <Row className="status-card">
        <Col xs={2}>
          <img src={order.orderItems[0].productId.image} alt={order.orderItems[0].productId.name} height={96} />
        </Col>
        <Col xs={8} className="order-info">
          <div>
            <strong>Order Number: {order.orderNum}</strong>
          </div>

          <div className="text-12">{order.createdAt.slice(0, 10)}</div>

          <div>
            {order.orderItems[0].productId.name}
            {order.orderItems.length > 1 && `and ${item.orderItems.length - 1} pcs.`}
          </div>
          <div>€ {order.orderItems[0].productId.price}</div>
        </Col>
        <Col md={2} className="vertical-middle">
          <div className="text-align-center text-12">Order Status</div>
          <Badge bg={badgeBgColor}>{order.status}</Badge>
        </Col>
      </Row>
    </div>
  );
};

export default OrderStatusCard;
