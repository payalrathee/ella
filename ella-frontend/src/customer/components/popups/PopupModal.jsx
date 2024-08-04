import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoginPopup from './LoginPopup';
import SignupPopup from './SignupPopup';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../../state/actions/popupActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: '0 0 5px #aaa',
  p: 4,
  width: '50%'
};

export default function PopupModal() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const popup = useSelector((state) => {
    return state.popup.open
  })
  const handleClose = () => {
    dispatch(closePopup());
    navigate("/")
  }

  return (
    <div>
      <Modal
        open={popup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {location.pathname.includes('login') && <LoginPopup />}
            {location.pathname.includes('signup') && <SignupPopup />}
        </Box>
      </Modal>
    </div>
  );
}
