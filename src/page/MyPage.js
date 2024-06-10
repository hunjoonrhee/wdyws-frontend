import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../action/orderAction';
import OrderStatusCard from '../component/OrderStatusCard';
import '../style/orderStatus.style.css';
import { useNavigate } from 'react-router-dom';
import { commonUiActions } from '../action/commonUiAction';

const MyPage = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { myOrders } = useSelector((state) => state.order);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    dispatch(orderActions.getMyOrderList());
  }, [user]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  //오더리스트 들고오기

  // 오더리스트가 없다면? 주문한 상품이 없습니다 메세지 보여주기
  return (
    <Container className="status-card-container">
      {myOrders.length === 0 ? (
        <> no orders </>
      ) : (
        myOrders.map((order) => {
          return <OrderStatusCard order={order} />;
        })
      )}
    </Container>
  );
};

export default MyPage;
