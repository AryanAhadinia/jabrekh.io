import React, { ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

type SectionProps = {
  children: ReactNode;
  variant?: "light" | "dark";
};

const Section: React.FC<SectionProps> = ({ children, variant = "light" }) => {
  const bgColorLight = useColorModeValue("gray.100", "#202020");
  const bgColorDark = useColorModeValue("#FFFFFF", "#121212");
  const textColorLight = useColorModeValue("black", "white");
  const textColorDark = useColorModeValue("black", "white");

  const bgColor = variant === "dark" ? bgColorDark : bgColorLight;
  const textColor = variant === "dark" ? textColorDark : textColorLight;

  return (
    <Box bg={bgColor} color={textColor} p={4} w="100%">
      {children}
    </Box>
  );
};

export default Section;
