import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LoginCard from "../../component/card/auth-card/LoginCard";
import RegisterCard from "../../component/card/auth-card/RegisterCard";
import "./Authstyle.css";

const AuthPage = () => {
  const [authType, setAuthType] = useState(true);
  const [errorVisible, setErrorVisible] = useState(false); // Error state

  // Modaleorror
  const [opened, { open, close }] = useDisclosure(false);

  const handleLogin = () => {
    setAuthType(true);
  };

  const handleRegister = () => {
    setAuthType(false);
  };

  const openError = () => {
    setErrorVisible(true);
    open(); // Open the error modal
  };

  return (
    <div className="container-fluid AuthPage">
      {errorVisible && (
        <Modal
          opened={opened}
          onClose={close}
          title="Oops an error occurred"
          centered
        >
          <p>Please fill in the data correctly</p>
          <div className="WrapperBtnModal">
            <Button onClick={close} className="BtnModal">
              Close
            </Button>
          </div>
        </Modal>
      )}
      {authType ? (
        <LoginCard handleRegister={handleRegister} />
      ) : (
        <RegisterCard handleLogin={handleLogin} openError={openError} />
      )}
    </div>
  );
};

export default AuthPage;