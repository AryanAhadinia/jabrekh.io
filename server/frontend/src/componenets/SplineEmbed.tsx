import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";

type SplineEmbedProps = {
  scene: string;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
};

const SplineEmbed: React.FC<SplineEmbedProps> = ({
  scene,
  width = "100%",
  height = "100%",
}) => {
  const [splineWidth, setSplineWidth] = useState(width);

  useEffect(() => {
    const handleResize = () => {
      setSplineWidth(
        `${document.getElementById("spline-container")?.clientWidth}px`
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Center
      id="spline-container"
      w={`${width}`}
      h={`${splineWidth}`}
      minH={splineWidth}
      position={"relative"}
    >
      <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
    </Center>
  );
};

export default SplineEmbed;
