import React, { useState } from 'react';
import { Alert } from 'reactstrap';



const ErrorAlert = () => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => { setVisible(false) }

  return (
    <Alert color="warning" isOpen={visible} toggle={onDismiss}>
      There was an error in sending your message. This could be a formatting issue. Please refresh and try again.
    </Alert>
  )
}

export default ErrorAlert;
