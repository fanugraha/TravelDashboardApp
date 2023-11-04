import { Button } from "@mantine/core";
import "./Buttonstyle.css";

const ButtonBlue = ({ children }) => {
  return (
    <Button className="Primarry-Blue" variant="filled" size="md" radius="md">
      {children}
    </Button>
  );
};

export default ButtonBlue;
