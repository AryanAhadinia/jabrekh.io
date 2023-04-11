// MovingGradientText.tsx
import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";

interface Props {
  text: string;
}

const MovingGradientText: React.FC<Props> = ({ text }) => {
  const [gradientColors] = useState([
    "#d05a45", // Color 1
    "#e4aa42", // Color 2
    "#3f6ee7", // Color 3
    "#4a9c80", // Color 4
  ]);

  const getColorShiftKeyframes = () => {
    let keyframeStr = "";
    gradientColors.forEach((color, index) => {
      const percentage = (index * 100) / gradientColors.length;
      keyframeStr += `
        ${percentage}% {
          color: ${color};
        }
      `;
    });
    return keyframes`${keyframeStr}`;
  };

  const ColorShift = getColorShiftKeyframes();

  const letterStyle = (index: number) => {
    const initialColor = gradientColors[index % gradientColors.length];
    const animationDelay = index % gradientColors.length;
    return css`
      color: ${initialColor};
      animation: ${ColorShift} ${gradientColors.length}s ease-in-out infinite;
      animation-delay: ${animationDelay}s;
    `;
  };

  const renderLetters = () => {
    return text.split("").map((letter, index) => (
      <Text
        as="span"
        fontSize="25px"
        fontWeight="900"
        textTransform="uppercase"
        css={letterStyle(index)}
        key={`letter-${index}`}
      >
        {letter}
      </Text>
    ));
  };

  return <Box>{renderLetters()}</Box>;
};

export default MovingGradientText;
