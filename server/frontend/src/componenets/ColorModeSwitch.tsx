import React from "react";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize="18px" fontWeight="400">
        Dark
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
