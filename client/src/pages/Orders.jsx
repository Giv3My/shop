import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOrder } from '../redux/slices/ordersSlice/fetching';

import { OrderItem } from '../components';
import { TextField, Button } from '@mui/material';

function Orders() {
  const dispatch = useDispatch();
  const { currentOrder } = useSelector(({ order }) => order);

  const [trackNumber, setTrackNumber] = React.useState('');
  const [error, setError] = React.useState(false);

  const onTrackNumberChange = ({ target: { value } }) => {
    setTrackNumber(value);

    error && setError(false);
  };

  const getOrder = async () => {
    if (!trackNumber) {
      return;
    }

    try {
      await dispatch(fetchOrder(trackNumber)).unwrap();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="orders__container">
      <div className="orders__wrapper">
        {!currentOrder ? (
          <div className="orders__top">
            <h1 className="orders__title">Enter track number to see order details</h1>
            <div>
              <TextField
                sx={{ width: 350 }}
                value={trackNumber}
                label="Track number"
                error={error}
                helperText={error && 'Order with this track number wasn\'t found'}
                onChange={onTrackNumberChange}
              />
              <Button variant='contained' onClick={getOrder}>OK</Button>
            </div>
          </div>
        ) : (
          <div className="order__detail">
            <h1 className="order__number">Order track number: {currentOrder.id}</h1>
            <div className="order__items">
              {currentOrder.orderItems.map(orderItem => {
                return (
                  <OrderItem
                    key={orderItem.id}
                    orderItem={orderItem}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Orders;