import { Button } from "@mantine/core";
import "./Buttonstyle.css";

const ButtonPrimarry = ({ children }) => {
  return (
    <Button className="Primarry" variant="filled" size="md" radius="md">
      {children}
    </Button>
  );
};

export default ButtonPrimarry;
