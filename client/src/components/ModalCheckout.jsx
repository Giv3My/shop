import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setModalVisible } from '../redux/slices/modalSlice';
import { clearCart } from '../redux/slices/cartSlice';

import { Modal, Box, TextField, Button } from '@mui/material';

import api from '../common/api'

const style = {
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    outline: 'none'
  },
  modalWrapper: {
    width: 400,
    height: 250,
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  modalTitle: {
    fontWeight: 600
  }
};

function ModalCheckout({ cartItems }) {
  const dispatch = useDispatch();
  const { modalVisible } = useSelector(({ modal }) => modal);

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);
  const [orderId, setOrderId] = React.useState('');

  const handleModalClose = () => {
    dispatch(setModalVisible(false));

    setEmail('');
    setOrderId('');
  };

  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);

    error && setError(false);
  };

  const handleSumbit = async () => {
    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if (!emailValid) {
      return setError(true);
    }

    try {
      const { data } = await api.post('/orders', {
        email,
        cart: cartItems
      });

      setOrderId(data.id);
      setEmail('');
      dispatch(clearCart());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      open={modalVisible}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.modalStyle}>
        <div
          className={`modal__wrapper ${!!orderId && "modal__wrapper-orderId"}`}
          style={!orderId ? style.modalWrapper : { ...style.modalWrapper, width: 460, height: 140 }}>
          {!orderId ? (
            <>
              <h2 style={style.modalTitle}>To make order enter email:</h2>
              <TextField
                label="Email"
                value={email}
                onChange={onEmailChange}
                error={error}
                helperText={error && 'Enter a valid email'}
              />
              <div
                className="button__block"
                style={style.buttonBlock}
              >
                <Button
                  variant='contained'
                  onClick={handleSumbit}
                >
                  Generate order number
                </Button>
                <Button onClick={handleModalClose}>Cancel</Button>
              </div>
            </>
          ) : (
            <>
              <h3 style={{ fontSize: 20 }}>Order number was sent on your email</h3>
              <p style={{ fontSize: 18 }}><b>Order:</b> {orderId}</p>
            </>
          )}
        </div>
      </Box>
    </Modal >
  )
};

export default ModalCheckout;