import {
  Box,
  Image,
  Text,
  Link,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CourseInfo = () => {
  return (
    <Box display="flex" flexDirection="row">
      <Box flex="9">
        <VStack spacing="4" align="stretch">
          <Text fontSize="xl" fontWeight="bold">
            CE282: Linear Algebra
          </Text>
          <Text fontSize="sm" color="gray.500">
            Spring 2023, Group 1; Computer Engineering Department, Sharif
            University of Technology, Tehran, Tehran Province, Iran
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Classes:
          </Text>
          <Text fontSize="md">
            Sunday and Tuesday, 10:30-12:00, Education Tower 306
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            TA Classes:
          </Text>
          <Text fontSize="md"></Text>
          <Text fontSize="md">
            This course covers matrix theory and linear algebra, emphasizing
            topics useful in other disciplines. Linear algebra is a branch of
            mathematics that studies systems of linear equations and the
            properties of matrices. The concepts of linear algebra are extremely
            useful in image processing, computer vision, data science, machine
            learning, bio-informatics, social networks, and neuroscience. Due to
            its broad range of applications, linear algebra is one of the most
            widely taught subjects in college-level mathematics.
          </Text>
          <Link href="assets/materials/CE282_1_Spring23_Syllabus_File.pdf">
            Syllabus
          </Link>
        </VStack>
      </Box>
      <Box flex="3">
        <Box position="relative">
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            top="50%"
            left="2"
            transform="translateY(-50%)"
          >
            <FaChevronLeft size={32} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            top="50%"
            right="2"
            transform="translateY(-50%)"
          >
            <FaChevronRight size={32} />
          </Box>
          <Box>
            <Image src="#" alt="book 1" boxSize="100%" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseInfo;
