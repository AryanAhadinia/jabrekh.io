import React from "react";
import MaterialItem from "../componenets/MaterialItem";
import Section from "../componenets/Section";
import { Box } from "@chakra-ui/react";
import Chapter from "../componenets/Chapter";
import blend from "../assets/blend.jpg";

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
      <Box m={10}>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
        <MaterialItem {...material}></MaterialItem>
      </Box>
    </Section>
  );
};

export default Materials;
