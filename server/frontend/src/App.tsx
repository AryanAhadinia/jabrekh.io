import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import CourseInfo from "./componenets/CourseInfo";
import foregroundImage from "./assets/rabiee.png";
import backgroundImage from "./assets/rabiee-bg.png";
import PersonCard from "./componenets/PersonCard";
import Section from "./componenets/Section";
import CourseInfoSection from "./sections/CourseInfoSection";
import { Route, Navigate, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import Assignments from "./pages/Assignments";

interface Course {
  id: number;
  year: number;
  semester: number;
  title: string;
  subtitle: string;
  description: string;
  syllabus: string | null;
  instructors: Instructor[];
  teaching_assistants: TeachingAssistant[];
}

interface Instructor {
  id: number;
  person: {
    user: {
      id: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    employee_id: number;
    academic_email: string;
    github_url: string;
    linkedin_url: string;
    image: string;
  };
  semester: number;
  description: string;
}

interface TeachingAssistant {
  id: number;
  person: {
    user: {
      id: number;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    employee_id: number;
    academic_email: string;
    github_url: string;
    linkedin_url: string;
    image: string;
  };
  semester: number;
  description: string;
}

function App() {
  const [course, setCourse] = useState<Course | null>(null);
  const ipAddress = "http://82.115.21.194";

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get<Course>(
          ipAddress + "/api/semester/4/"
        );
        setCourse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, []);

  useEffect(() => {
    console.log(course);
  }, [course]);

  return (
    <>
      <Box>
        <NavBar />
        {/* <CourseInfo /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Box>
    </>
  );
}
export default App;
