import React, { useState } from 'react';
import { Alert } from 'reactstrap';



const SuccessAlert = () => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => { setVisible(false) }

  return (
    <Alert color="success" isOpen={visible} toggle={onDismiss}> 
      Message successfully sent. We will do our best to get back to you in a timely manner. Thank you.
    </Alert>
  )
}

export default SuccessAlert;
