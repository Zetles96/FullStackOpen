const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="notefication">{message}</div>;
};

export default { Notification, ErrorNotification };
