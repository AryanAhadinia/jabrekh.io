import { useState, useEffect } from "react";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import CourseInfo from "./componenets/CourseInfo";
import foregroundImage from "./assets/rabiee.png";
import backgroundImage from "./assets/rabiee-bg.png";
import PersonCard from "./componenets/PersonCard";
import Section from "./componenets/Section";
import CourseInfoSection from "./sections/CourseInfoSection";
import "./App.css";

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
