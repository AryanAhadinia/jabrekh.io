import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import SplineEmbed from "../componenets/SplineEmbed";
import CourseInfo from "../componenets/CourseInfo";
import { Grid, GridItem } from "@chakra-ui/react";

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
        base: `'courseInfo' 'object'`,
        lg: `'courseInfo courseInfo courseInfo object object'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "repeat(5, 1fr)",
      }}
      templateRows={{
        lg: "1fr",
      }}
    >
      <GridItem area={"courseInfo"} m={10} ref={courseInfoRef}>
        <CourseInfo />
      </GridItem>
      <GridItem
        area={"object"}
        m={10}
        ref={objectRef}
        h={splineWidth}
        style={{ maxHeight: `${splineWidth}px!importaant`, overflow: "hidden" }} // Set maxHeight equal to the calculated width and hide overflow content
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
