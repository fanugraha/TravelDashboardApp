import { Button } from "@mantine/core";
import "./Buttonstyle.css";

const ButtonSecondary = ({ children }) => {
  return (
    <Button className="Secondary" variant="filled" size="md" radius="md">
      {children}
    </Button>
  );
};

export default ButtonSecondary;
