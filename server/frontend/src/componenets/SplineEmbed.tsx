import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Box, Center, Spinner, useColorModeValue } from "@chakra-ui/react";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLoading(true);
      setSplineWidth(
        `${document.getElementById("spline-container")?.clientWidth}px`
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <Center
      id="spline-container"
      w={`${width}`}
      h={`${splineWidth}`}
      minH={splineWidth}
      position={"relative"}
    >
      {isLoading && (
        <Center position="absolute" top={0} left={0} right={0} bottom={0}>
          <Spinner />
        </Center>
      )}
      <Spline
        key={splineWidth}
        scene={scene}
        onLoad={handleSplineLoad}
        style={{ width: "100%", height: "100%" }}
      />
    </Center>
  );
};

export default SplineEmbed;
