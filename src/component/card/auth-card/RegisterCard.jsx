import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Input } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import axios from "axios";
import { IconChevronDown } from '@tabler/icons-react';
import "./LoginRegisterstyle.css"

function RegisterCard({ handleLogin, openError }) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [role, setRole] = useState();

  // Modal
  const [opened, { open, close }] = useDisclosure(false);

  const handleSumbitRegister = () => {
    axios
      .post(" https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register", {
        name,
        roleId: parseInt(role),
        username: userName,
        password: passwordRegister,
      })
      .then(() => {
        open();
      })
      .catch(() => {
        openError();
      });
  };

  return (
    <div className="CardRegister">
      <div className="Label">
        <h1 className="TitleAuth">Please register first</h1>
        <p className="ParagraphAuth">Enter your details below</p>
      </div>
      <div className="WrapperInput">
        <p className="LabelInput">Name</p>
        <Input
          placeholder="Input your name"
          className="Input"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="WrapperInput">
        <p className="LabelInput">Role Id</p>
        <Input
          value={role}
          onChange={(event) => setRole(parseInt(event.target.value))}
          component="select"
          rightSection={<IconChevronDown size={14} stroke={1.5} />}
        >
          <option value={1}>Admin</option>
          <option value={2}>Employee</option>
        </Input>
      </div>
      <div className="WrapperInput">
        <p className="LabelInput">Email</p>
        <Input
          placeholder="Enter your email"
          className="Input"
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="WrapperInput">
        <p className="LabelInput">Password</p>
        <PasswordInput
          placeholder="Create your Password"
          onChange={(event) => setPasswordRegister(event.target.value)}
        />
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Registration Successful!"
        centered
      >
        <p>To proceed with your food order, please log in to your account!</p>
        <div className="WrapperBtnModal">
          <Button onClick={handleLogin} className="BtnModal">
            Login
          </Button>
        </div>
      </Modal>
      <Button className="LoginBtn" onClick={handleSumbitRegister}>
        Register
      </Button>
      <p className="ParagraphAuth">
        Have account?{" "}
        <span>
          <a href="#" onClick={handleLogin}>
            Login
          </a>
        </span>
      </p>
    </div>
  );
}

export default RegisterCard;