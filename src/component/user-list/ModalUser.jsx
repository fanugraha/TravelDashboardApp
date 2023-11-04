import React from 'react';
import { Modal, Button } from '@mantine/core';

// eslint-disable-next-line react/prop-types
const ModalComponent = ({ opened, onClose }) => {
  return (
    <Modal title="Modal Title" opened={opened} onClose={onClose} transitionProps={{duration: 0, transition: 'pop', timingFunction: 'linear'}} >
      <div>Modal Content</div>
      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
};

export default ModalComponent;