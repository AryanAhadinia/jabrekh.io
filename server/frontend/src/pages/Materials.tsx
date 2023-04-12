import React from "react";
import MaterialItem from "../componenets/MaterialItem";
import Section from "../componenets/Section";
import { Box } from "@chakra-ui/react";
import Chapter from "../componenets/Chapter";
import blend from "../assets/blend.jpg";
import CourseItem from "../componenets/CourseItem";

const Materials = () => {
  const material = {
    title: "Pre-Algebra",
    description:
      "In this course, you'll simplify expressions and solve equations using methods that impart deep understanding.",
    imageUrl: blend,
    downloads: {
      slide: "https://example.com/slide.pdf",
      video: "https://example.com/video.mp4",
      pdf: "https://example.com/document.pdf",
    },
  };
  return (
    <Section variant="dark">
      <Box ml={[3, 5, 20]} mr={[3, 5, 20]} mb={5}>
        {/* <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem> */}
        <CourseItem
          topic="Linear Algebra"
          title="Introduction"
          chapter="Chapter 1"
          color="#d05a45"
          downloads={{
            slide: "https://example.com/slide.pdf",
            video: "https://example.com/video.mp4",
            pdf: "https://example.com/document.pdf",
          }}
        ></CourseItem>
        <CourseItem
          topic="Linear Algebra"
          title="Vectors"
          chapter="Chapter 2"
          color="#e4aa42"
          downloads={{
            video: "https://example.com/video.mp4",
            pdf: "https://example.com/document.pdf",
          }}
        ></CourseItem>
        <CourseItem
          topic="Linear Algebra"
          title="General Vector Space"
          chapter="Chapter 3"
          color="#3f6ee7"
          downloads={{
            slide: "https://example.com/slide.pdf",
            pdf: "https://example.com/document.pdf",
          }}
        ></CourseItem>
        <CourseItem
          topic="Linear Algebra"
          title="Linear Equations"
          chapter="Chapter 4"
          color="#4a9c80"
        ></CourseItem>
      </Box>
    </Section>
  );
};

export default Materials;
