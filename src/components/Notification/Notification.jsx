import PropTypes from 'prop-types';
import { NotificationMessage } from './NotificationMessage.styled';
const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
