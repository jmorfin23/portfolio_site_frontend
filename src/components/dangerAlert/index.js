import React, { useState } from 'react';
import { Alert } from 'reactstrap';



const DangerAlert = () => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => { setVisible(false) }

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      Please fill in the entire form.
    </Alert>
  )
}

export default DangerAlert;
