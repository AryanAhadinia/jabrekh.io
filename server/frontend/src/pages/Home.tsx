import { useState, useEffect } from "react";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import foregroundImage from "../assets/rabiee.png";
import backgroundImage from "../assets/rabiee-bg.png";
import PersonCard from "../componenets/PersonCard";
import Section from "../componenets/Section";
import CourseInfoSection from "../sections/CourseInfoSection";
import { Route, Navigate, Routes } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <>
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
};

export default Home;
