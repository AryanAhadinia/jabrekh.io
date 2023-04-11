import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import MovingGradientText from "./MovingGradientText";
const NavBar = () => {
  const padding = 10;
  return (
    <HStack p={padding}>
      {/* <Image></Image> */}
      <MovingGradientText text="LINEAR ALGEBRA" />
      <Text fontSize="15px" p={5}>
        Home
      </Text>
      <Text fontSize="15px" p={5}>
        Materials
      </Text>
      <Text fontSize="15px" p={5}>
        Assignments
      </Text>
      <Box pos="absolute" right={padding}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
