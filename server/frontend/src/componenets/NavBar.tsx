import React from "react";
import {
  HStack,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
  Portal,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";
import MovingGradientText from "./MovingGradientText";

const NavBar = () => {
  const padding = 10;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#121212" : "#FFFFFF";

  const renderMenuItems = () => (
    <>
      <Text fontSize="18px" fontWeight="500" pl={35}>
        Home
      </Text>
      <Text fontSize="18px" fontWeight="500" pl={35}>
        Materials
      </Text>
      <Text fontSize="18px" fontWeight="500" pl={35}>
        Assignments
      </Text>
    </>
  );

  const renderDropdownMenu = () => (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} mr={5} />
      <Portal>
        <MenuList width="100%" position="fixed" top="0" left="0" bg={bgColor}>
          <MenuItem bg={bgColor}>Home</MenuItem>
          <MenuItem bg={bgColor}>Materials</MenuItem>
          <MenuItem bg={bgColor}>Assignments</MenuItem>
          <MenuItem bg={bgColor}>
            <ColorModeSwitch />
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );

  return (
    <HStack m={padding} bgColor={bgColor} alignItems="baseline">
      {/* <Image></Image> */}
      {isMobile ? renderDropdownMenu() : null}
      <MovingGradientText text="LINEAR ALGEBRA" />
      {!isMobile && renderMenuItems()}
      {!isMobile && (
        <Box pos="absolute" right={padding} bottom={0}>
          <ColorModeSwitch />
        </Box>
      )}
    </HStack>
  );
};

export default NavBar;
