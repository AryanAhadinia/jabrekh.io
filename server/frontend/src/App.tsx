import { useState } from "react";
import { Center } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import CourseInfo from "./componenets/CourseInfo";
import foregroundImage from "./assets/rabiee.png";
import backgroundImage from "./assets/rabiee-bg.png";
import PersonCard from "./componenets/PersonCard";
import Section from "./componenets/Section";
import "./App.css";
import SplineEmbed from "./componenets/SplineEmbed";
import CourseInfoSection from "./sections/CourseInfoSection";
function App() {
  return (
    <>
      <NavBar />
      {/* <CourseInfo /> */}
      <Section variant="dark">
        <CourseInfoSection />
      </Section>
      <Section>
        <Center>
          <PersonCard
            foreground={foregroundImage}
            background={backgroundImage}
            width={300}
            height={300}
          />
        </Center>
      </Section>
    </>
  );
}
export default App;
