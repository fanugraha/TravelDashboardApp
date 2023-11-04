import { Button } from "@mantine/core";

const TextLink = ({ children }) => {
  return (
    <Button className="Text-button" variant="filled" size="md">
      {children}
    </Button>
  );
};

export default TextLink;
