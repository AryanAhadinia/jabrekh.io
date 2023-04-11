import { useState } from "react";
import { Center } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import CourseInfo from "./componenets/CourseInfo";
import foregroundImage from "./assets/rabiee.png";
import backgroundImage from "./assets/rabiee-bg.png";
import PersonCard from "./componenets/PersonCard";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      {/* <CourseInfo /> */}

      <Center>
        <PersonCard
          foreground={foregroundImage}
          background={backgroundImage}
          width={300}
          height={300}
        />
      </Center>
    </>
  );
}
export default App;
