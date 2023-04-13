import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import SplineEmbed from "../componenets/SplineEmbed";
import CourseInfo from "../componenets/CourseInfo";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const CourseInfoSection = () => {
  const courseInfoRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const [splineWidth, setSplineWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const updateSplineWidth = () => {
      if (objectRef.current) {
        const { width } = objectRef.current.getBoundingClientRect();
        setSplineWidth(width);
      }
    };
    updateSplineWidth();

    window.addEventListener("resize", updateSplineWidth);
    return () => window.removeEventListener("resize", updateSplineWidth);
  }, [objectRef, splineWidth]);

  return (
    <Grid
      templateAreas={{
        base: `'object' 'courseInfo'`,
        lg: `'courseInfo courseInfo courseInfo object object'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "repeat(5, 1fr)",
      }}
      templateRows={{
        lg: "1fr",
      }}
      maxW="100%"
      overflow="hidden"
    >
      <GridItem area={"courseInfo"} m={[3, 0]} ref={courseInfoRef}>
        <Box maxW="100%" overflow="hidden">
          <CourseInfo />
        </Box>
      </GridItem>
      <GridItem
        area={"object"}
        m={[3, 0]}
        ref={objectRef}
        h={splineWidth}
        style={{
          maxHeight: `${splineWidth}px !importaant`,
          maxWidth: `100% !importaant`,
          overflow: "hidden",
        }}
      >
        <SplineEmbed
          scene="https://prod.spline.design/uyvl9W6Yv2NG4mv7/scene.splinecode"
          width="100%"
        />
      </GridItem>
    </Grid>
  );
};

export default CourseInfoSection;
