import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const padding = 10;
  return (
    <HStack p={padding}>
      {/* <Image></Image> */}
      <Text p={5}>Home</Text>
      <Text p={5}>Materials</Text>
      <Text p={5}>Assignments</Text>
      <Box pos="absolute" right={padding}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
